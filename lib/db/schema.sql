-- Cloudflare D1 데이터베이스 스키마
-- 이 파일을 사용하여 D1 데이터베이스를 초기화합니다

-- 도구 사용 통계 테이블
CREATE TABLE IF NOT EXISTS tool_usage (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  tool_id TEXT NOT NULL,
  tool_slug TEXT NOT NULL,
  user_session_id TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  user_agent TEXT,
  referrer TEXT
);

-- 인덱스 생성 (성능 최적화)
CREATE INDEX IF NOT EXISTS idx_tool_usage_tool_id ON tool_usage(tool_id);
CREATE INDEX IF NOT EXISTS idx_tool_usage_created_at ON tool_usage(created_at);
CREATE INDEX IF NOT EXISTS idx_tool_usage_session ON tool_usage(user_session_id);
-- 복합 인덱스: 날짜별 통계 조회 최적화
CREATE INDEX IF NOT EXISTS idx_tool_usage_date_tool ON tool_usage(DATE(created_at), tool_id);

-- 세션 테이블
CREATE TABLE IF NOT EXISTS sessions (
  id TEXT PRIMARY KEY,
  user_agent TEXT,
  referrer TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  last_accessed DATETIME DEFAULT CURRENT_TIMESTAMP,
  tool_count INTEGER DEFAULT 0
);

-- 인덱스 생성
CREATE INDEX IF NOT EXISTS idx_sessions_last_accessed ON sessions(last_accessed);

-- 일일 통계 집계 테이블 (크론 작업으로 업데이트)
CREATE TABLE IF NOT EXISTS daily_stats (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  date DATE UNIQUE NOT NULL,
  total_usage INTEGER DEFAULT 0,
  unique_sessions INTEGER DEFAULT 0,
  top_tools TEXT, -- JSON 형식으로 저장
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 인덱스 생성
CREATE INDEX IF NOT EXISTS idx_daily_stats_date ON daily_stats(date);

-- 피드백 테이블 (선택적)
CREATE TABLE IF NOT EXISTS feedback (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  tool_id TEXT,
  rating INTEGER, -- 1-5
  comment TEXT,
  user_session_id TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 인덱스 생성
CREATE INDEX IF NOT EXISTS idx_feedback_tool_id ON feedback(tool_id);
CREATE INDEX IF NOT EXISTS idx_feedback_created_at ON feedback(created_at);

