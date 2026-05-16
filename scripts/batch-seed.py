#!/usr/bin/env python3
"""첫 N개 주제 슬롯 일괄 결정"""
import sys, json
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent.parent / "C:/Users/dlatj/.claude/skills/article-writer/scripts"))
# seed.py를 직접 import
import hashlib
from collections import Counter

MACROS = ["A", "B", "C", "E", "F"]
LENSES = ["L1", "L2", "L3", "L4", "L5", "L6"]
HOOKS = ["H1", "H2", "H3", "H4", "H5"]
OUTROS = ["O1", "O2", "O3", "O4"]

LENS_COMPAT = {
    "L1": {"A": True, "B": False, "C": True, "E": True, "F": False},
    "L2": {"A": True, "B": True, "C": True, "E": True, "F": False},
    "L3": {"A": True, "B": True, "C": True, "E": True, "F": False},
    "L4": {"A": True, "B": True, "C": False, "E": True, "F": True},
    "L5": {"A": True, "B": True, "C": False, "E": True, "F": True},
    "L6": {"A": True, "B": True, "C": True, "E": True, "F": False},
}
HOOK_BY_MACRO = {"A": HOOKS, "B": ["H1"], "C": ["H2"], "E": ["H4", "H1"], "F": ["H3", "H1"]}
OUTRO_BY_MACRO = {"A": OUTROS, "B": ["O1"], "C": ["O4", "O1"], "E": ["O1", "O2"], "F": ["O2", "O1"]}

def derive_seed(title, bump=0):
    h = hashlib.sha256(title.encode("utf-8")).hexdigest()
    return int(h[:12], 16) + bump

def pick(candidates, seed):
    return candidates[seed % len(candidates)]

def filter_overused(candidates, recent, threshold):
    if not recent: return candidates
    counts = Counter(recent)
    filtered = [c for c in candidates if counts.get(c, 0) < threshold]
    return filtered or candidates

def decide_slot(title, macro_recent, lens_recent, hook_recent, outro_recent, bump=0):
    seed = derive_seed(title, bump)
    macro_candidates = filter_overused(MACROS, macro_recent, threshold=4)
    macro = pick(macro_candidates, seed)

    lens_candidates = [l for l in LENSES if LENS_COMPAT[l].get(macro, False)]
    if len(lens_recent) >= 4 and len(set(lens_recent[-4:])) == 1:
        blocked = lens_recent[-1]
        lens_candidates = [l for l in lens_candidates if l != blocked] or lens_candidates
    lens = pick(lens_candidates, seed >> 4)

    hook_candidates = HOOK_BY_MACRO[macro][:]
    if len(hook_candidates) > 1:
        hook_candidates = filter_overused(hook_candidates, hook_recent[-5:], threshold=2)
    hook = pick(hook_candidates, seed >> 8)

    outro_candidates = OUTRO_BY_MACRO[macro][:]
    if len(outro_candidates) > 1 and len(outro_recent) >= 5 and len(set(outro_recent[-5:])) == 1:
        blocked = outro_recent[-1]
        outro_candidates = [o for o in outro_candidates if o != blocked] or outro_candidates
    outro = pick(outro_candidates, seed >> 12)

    return {"macro": macro, "lens": lens, "hook": hook, "outro": outro,
            "schema": "HowTo" if macro == "F" else "Article",
            "speakable": macro == "B"}

topics_file = Path("D:/web/texturbcom/.cache/article-topics-300.json")
topics = json.loads(topics_file.read_text(encoding="utf-8"))

macro_r, lens_r, hook_r, outro_r = [], [], [], []
results = []
for i, title in enumerate(topics[:25]):
    slot = decide_slot(title, macro_r, lens_r, hook_r, outro_r)
    results.append({"n": i+1, "title": title, **slot})
    macro_r.append(slot["macro"]); lens_r.append(slot["lens"])
    hook_r.append(slot["hook"]); outro_r.append(slot["outro"])

out = Path("D:/web/texturbcom/.cache/batch1-slots.json")
out.write_text(json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"✅ {len(results)}개 슬롯 결정 완료 → {out}")
for r in results:
    print(f"  {r['n']:3}. [{r['macro']}/{r['lens']}/{r['hook']}/{r['outro']}] {r['title'][:40]}")
