import re, sys
sys.stdout.reconfigure(encoding='utf-8')

cp = re.compile(r'content:\s*`((?:[^`\\]|\\.)*)`', re.DOTALL)
tp = re.compile(r'title:\s*"([^"]+)"')

batches = [int(a) for a in sys.argv[1:]] if len(sys.argv) > 1 else list(range(3, 25))

all_ok = True
for bn in batches:
    fname = f'lib/blog-posts-batch{bn}.ts'
    try:
        with open(fname, 'r', encoding='utf-8') as f:
            text = f.read()
        ts = tp.findall(text)
        cs = cp.findall(text)
        lengths = [len(c) for c in cs]
        short = [(i+1, lengths[i], ts[i][:45]) for i in range(len(lengths)) if lengths[i] < 1800]
        avg = sum(lengths)//len(lengths) if lengths else 0
        status = 'OK' if not short else 'FAIL'
        if status == 'FAIL':
            all_ok = False
        print(f'{status} batch{bn:02d}: {len(ts)}개 avg={avg}자 short={len(short)}')
        for idx, l, t in short:
            print(f'    SHORT [{idx}] {l}자: {t}')
    except FileNotFoundError:
        pass

print(f'\n{"모든 배치 OK" if all_ok else "일부 배치 미완료"}')
