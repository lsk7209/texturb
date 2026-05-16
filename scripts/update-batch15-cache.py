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

# batch15 articles generated: [E/L3/H4/O1], [B/L2/H1/O1], [C/L6/H2/O4], [B/L4/H1/O1], [F/L5/H3/O2]
batch15_slots = [
    {"macro": "E", "lens": "L3", "hook": "H4", "outro": "O1"},
    {"macro": "B", "lens": "L2", "hook": "H1", "outro": "O1"},
    {"macro": "C", "lens": "L6", "hook": "H2", "outro": "O4"},
    {"macro": "B", "lens": "L4", "hook": "H1", "outro": "O1"},
    {"macro": "F", "lens": "L5", "hook": "H3", "outro": "O2"},
]

cache_dir = Path("D:/web/texturbcom/.cache")

# Load current distributions
macro_r = json.loads((cache_dir / "macro_distribution.json").read_text(encoding="utf-8"))["recent_10"]
lens_r = json.loads((cache_dir / "lens_distribution.json").read_text(encoding="utf-8"))["recent_10"]
hook_r = json.loads((cache_dir / "hook_distribution.json").read_text(encoding="utf-8"))["recent_10"]
outro_r = json.loads((cache_dir / "outro_distribution.json").read_text(encoding="utf-8"))["recent_10"]

# Update distributions
for slot in batch15_slots:
    macro_r = (macro_r + [slot["macro"]])[-10:]
    lens_r = (lens_r + [slot["lens"]])[-10:]
    hook_r = (hook_r + [slot["hook"]])[-10:]
    outro_r = (outro_r + [slot["outro"]])[-10:]

(cache_dir / "macro_distribution.json").write_text(json.dumps({"recent_10": macro_r}, ensure_ascii=False, indent=2), encoding="utf-8")
(cache_dir / "lens_distribution.json").write_text(json.dumps({"recent_10": lens_r}, ensure_ascii=False, indent=2), encoding="utf-8")
(cache_dir / "hook_distribution.json").write_text(json.dumps({"recent_10": hook_r}, ensure_ascii=False, indent=2), encoding="utf-8")
(cache_dir / "outro_distribution.json").write_text(json.dumps({"recent_10": outro_r}, ensure_ascii=False, indent=2), encoding="utf-8")

print("Updated distributions:")
print(f"  macro: {macro_r}")
print(f"  lens: {lens_r}")
print(f"  hook: {hook_r}")
print(f"  outro: {outro_r}")

# Save h2 caches for batch15 articles
articles = [
    ("obituary-text-length-guide", ["플랫폼별 부고 메시지 글자수 비교", "SMS 부고: 45자의 제약과 실전 대응", "카카오톡 부고: 글자 제한보다 가독성이 관건", "SNS 공개 부고: 범위 설정이 먼저", "어떤 채널을 선택할까", "자주 묻는 질문"]),
    ("congratulatory-envelope-text-guide", ["앞면 문구: 3자가 표준인 이유", "한자 vs 한글 표기 비교", "금액 표기: 15~25자 이내", "발신인 표기: 10~20자 이내", "자주 묻는 질문"]),
    ("birthday-card-text-guide", ["왜 짧은 메시지가 더 기억에 남을까", "3문장 룰: 20~50자의 공식", "상황별 권장 글자수", "흔한 오해: 긴 메시지 = 더 큰 정성?", "자주 묻는 질문"]),
    ("content-certification-text-guide", ["내용증명 글자수 기준", "내용증명 필수 4항목과 분량", "작성 시 주의 사항", "자주 묻는 질문"]),
    ("consumer-complaint-text-guide", ["소비자 불만 접수, 왜 분량이 중요할까", "1단계. 사건 일시와 장소 기재", "2단계. 구체 피해 내용 기술", "3단계. 피해 금액과 증거 명시", "4단계. 요구 사항 명시", "5단계. 연락처 확인", "플랫폼별 입력 제한 비교", "자주 묻는 질문"]),
]

published_dir = cache_dir / "published"
published_dir.mkdir(exist_ok=True)

for slug, h2_list in articles:
    h2_path = published_dir / f"{slug}.h2.json"
    h2_path.write_text(json.dumps(h2_list, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"  Saved: {h2_path.name}")

print("Done!")
