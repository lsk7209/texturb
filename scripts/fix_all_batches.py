import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

MARURI_TEXT = '\n\n## 마무리\n\n이 글에서 정리한 기준을 실제 작업에 적용할 때는 [텍스터브 글자수 세기](/tools/char-counter/) 도구로 분량을 직접 확인하면서 진행하면 더 정확하게 맞출 수 있다.'

DISCLAIMER_PAT = re.compile(
    r'\n*\*이 글은 AI[^*]*\*\n*',
    re.DOTALL
)

def insert_sections(content_text, answer_text):
    if '## 핵심 답변' not in content_text and answer_text:
        first_h2 = content_text.find('\n\n##')
        if first_h2 == -1:
            first_h2 = content_text.find('\n##')
        if first_h2 != -1:
            section = f'\n\n## 핵심 답변\n\n{answer_text}'
            content_text = content_text[:first_h2] + section + content_text[first_h2:]

    if '## 마무리' not in content_text:
        content_text = content_text.rstrip()
        content_text += MARURI_TEXT

    return content_text


def process_file(fname):
    with open(fname, 'r', encoding='utf-8') as f:
        text = f.read()

    # Remove AI disclaimers
    text_no_disc = DISCLAIMER_PAT.sub('\n\n', text)
    disc_removed = text_no_disc != text
    text = text_no_disc

    # Extract aeoAnswer values
    aeo_pattern = re.compile(r'aeoAnswer:\s*"((?:[^"\\]|\\.)*)"')
    # Extract metaDescription values as fallback
    meta_pattern = re.compile(r'metaDescription:\s*"((?:[^"\\]|\\.)*)"')
    # Content blocks — handle escaped backticks (\`) inside template literals
    content_pattern = re.compile(r'content:\s*`((?:[^`\\]|\\.)*)`', re.DOTALL)

    aeo_list = aeo_pattern.findall(text)
    meta_list = meta_pattern.findall(text)
    content_matches = list(content_pattern.finditer(text))

    # Build answer list: prefer aeoAnswer, fallback to metaDescription
    answers = []
    for i in range(len(content_matches)):
        if i < len(aeo_list) and aeo_list[i].strip():
            ans = aeo_list[i].replace('\\"', '"').replace('\\n', ' ')
        elif i < len(meta_list) and meta_list[i].strip():
            ans = meta_list[i].replace('\\"', '"').replace('\\n', ' ')
        else:
            ans = ''
        answers.append(ans)

    modified = text
    offset = 0
    changed = 0

    for i, match in enumerate(content_matches):
        answer = answers[i] if i < len(answers) else ''
        old_content = match.group(1)
        new_content = insert_sections(old_content, answer)

        if new_content != old_content:
            start = match.start(1) + offset
            end = match.end(1) + offset
            modified = modified[:start] + new_content + modified[end:]
            offset += len(new_content) - len(old_content)
            changed += 1

    if changed > 0 or disc_removed:
        with open(fname, 'w', encoding='utf-8') as f:
            f.write(modified)

    return changed, disc_removed


total_changed = 0
total_disc = 0
TARGET_BATCHES = [6, 10, 11]
for batch_num in TARGET_BATCHES:
    fname = f'lib/blog-posts-batch{batch_num}.ts'
    try:
        n, disc = process_file(fname)
        tag = []
        if n > 0:
            tag.append(f'섹션+{n}')
        if disc:
            tag.append('면책제거')
        if tag:
            print(f'  [{", ".join(tag)}] {fname}')
        total_changed += n
        total_disc += (1 if disc else 0)
    except FileNotFoundError:
        pass

print(f'\n섹션 추가: {total_changed}개 | 면책 제거: {total_disc}개 파일')
