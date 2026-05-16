import re
import sys
import glob

sys.stdout.reconfigure(encoding='utf-8')

def insert_sections(content_text, aeo_answer):
    if '## 핵심 답변' in content_text:
        return content_text

    # Insert 핵심 답변 before first ## heading
    first_h2 = content_text.find('\n\n##')
    if first_h2 == -1:
        first_h2 = content_text.find('\n##')

    if first_h2 != -1 and aeo_answer:
        section = f'\n\n## 핵심 답변\n\n{aeo_answer}'
        content_text = content_text[:first_h2] + section + content_text[first_h2:]

    if '## 마무리' not in content_text:
        content_text = content_text.rstrip()
        content_text += '\n\n## 마무리\n\n이 글에서 정리한 기준을 실제 작업에 적용할 때는 [텍스터브 글자수 세기](/tools/char-counter/) 도구로 분량을 직접 확인하면서 진행하면 더 정확하게 맞출 수 있다.'

    return content_text


def process_file(fname):
    with open(fname, 'r', encoding='utf-8') as f:
        text = f.read()

    # Split by article objects - find content blocks paired with aeoAnswer
    # Strategy: find each aeoAnswer and corresponding content block

    # Find all aeoAnswer values
    aeo_pattern = re.compile(r'aeoAnswer:\s*"((?:[^"\\]|\\.)*)"', re.DOTALL)
    # Find all content backtick blocks
    content_pattern = re.compile(r'(content:\s*`)([^`]*(?:`[^,}][^`]*)*)`(\s*,\s*\n\s*\})', re.DOTALL)

    aeo_answers = aeo_pattern.findall(text)
    content_matches = list(content_pattern.finditer(text))

    if len(aeo_answers) != len(content_matches):
        print(f"  WARNING: aeo={len(aeo_answers)} content={len(content_matches)} mismatch in {fname}")
        # Try to process anyway by index

    modified = text
    offset = 0
    changed = 0

    for i, match in enumerate(content_matches):
        aeo = aeo_answers[i] if i < len(aeo_answers) else ""
        aeo = aeo.replace('\\"', '"').replace('\\n', ' ')

        old_content = match.group(2)
        new_content = insert_sections(old_content, aeo)

        if new_content != old_content:
            start = match.start(2) + offset
            end = match.end(2) + offset
            modified = modified[:start] + new_content + modified[end:]
            offset += len(new_content) - len(old_content)
            changed += 1

    if changed > 0:
        with open(fname, 'w', encoding='utf-8') as f:
            f.write(modified)

    return changed


total = 0
for batch_num in range(15, 25):
    fname = f'lib/blog-posts-batch{batch_num}.ts'
    try:
        n = process_file(fname)
        if n > 0:
            print(f'  {n}개 처리: {fname}')
            total += n
    except FileNotFoundError:
        pass

print(f'\n총 {total}개 글에 섹션 추가')
