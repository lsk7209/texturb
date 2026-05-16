import hashlib, json
from pathlib import Path
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

topics = json.loads(Path("D:/web/texturbcom/.cache/article-topics-300.json").read_text(encoding="utf-8"))
macro_r = json.loads(Path("D:/web/texturbcom/.cache/macro_distribution.json").read_text(encoding="utf-8"))["recent_10"]
lens_r = json.loads(Path("D:/web/texturbcom/.cache/lens_distribution.json").read_text(encoding="utf-8"))["recent_10"]
hook_r = json.loads(Path("D:/web/texturbcom/.cache/hook_distribution.json").read_text(encoding="utf-8"))["recent_10"]
outro_r = json.loads(Path("D:/web/texturbcom/.cache/outro_distribution.json").read_text(encoding="utf-8"))["recent_10"]

results = []
for i in range(159, 174):
    title = topics[i]
    slot = decide_slot(title, macro_r, lens_r, hook_r, outro_r)
    results.append({"n": i+1, "title": title, **slot})
    macro_r = (macro_r + [slot["macro"]])[-10:]
    lens_r = (lens_r + [slot["lens"]])[-10:]
    hook_r = (hook_r + [slot["hook"]])[-10:]
    outro_r = (outro_r + [slot["outro"]])[-10:]

for r in results:
    print(f"{r['n']:3}. [{r['macro']}/{r['lens']}/{r['hook']}/{r['outro']}] speakable={r['speakable']} schema={r['schema']}")
    print(f"     {r['title']}")

json_out = json.dumps(results, ensure_ascii=False, indent=2)
Path("D:/web/texturbcom/.cache/batch15-slots.json").write_text(json_out, encoding="utf-8")
print("Saved batch15-slots.json")
