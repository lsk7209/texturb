"""
Find and fix articles where aeoAnswer text was inserted into template literal
content without escaping backticks. Unescaped backticks inside ` ... ` break TS.
"""
import re, sys
sys.stdout.reconfigure(encoding='utf-8')

# Pattern: find ## 핵심 답변 section that was inserted and has bare backticks
# We look for the answer text between ## 핵심 답변\n\n and the next ##
answer_section_pat = re.compile(
    r'(## 핵심 답변\n\n)(.*?)(\n\n##)',
    re.DOTALL
)

def fix_file(fname):
    with open(fname, 'r', encoding='utf-8') as f:
        text = f.read()

    fixed = text
    count = 0
    # Find all 핵심 답변 sections within content (template literal context)
    # We look for bare backtick inside ## 핵심 답변 answer text
    for m in answer_section_pat.finditer(text):
        answer_text = m.group(2)
        if '`' in answer_text and '\\`' not in answer_text:
            # Has unescaped backtick — fix it
            fixed_answer = answer_text.replace('`', '\\`')
            fixed = fixed.replace(m.group(0), m.group(1) + fixed_answer + m.group(3), 1)
            count += 1

    if count > 0:
        with open(fname, 'w', encoding='utf-8') as f:
            f.write(fixed)
    return count


total = 0
for batch_num in range(3, 25):
    fname = f'lib/blog-posts-batch{batch_num}.ts'
    try:
        n = fix_file(fname)
        if n > 0:
            print(f'  {n}개 수정: {fname}')
        total += n
    except FileNotFoundError:
        pass

print(f'\n총 {total}개 수정 완료')
