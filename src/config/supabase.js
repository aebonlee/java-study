import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// 테이블 접두사 - 다른 프로젝트와 DB 공유 시 충돌 방지
export const TABLE_PREFIX = 'javamaster_'

// 테이블 이름 헬퍼
export const TABLES = {
  USERS: `${TABLE_PREFIX}users`,
  PROGRESS: `${TABLE_PREFIX}progress`,
  BADGES: `${TABLE_PREFIX}badges`,
  QUIZ_SCORES: `${TABLE_PREFIX}quiz_scores`,
  COMMUNITY_POSTS: `${TABLE_PREFIX}community_posts`,
  COMMUNITY_COMMENTS: `${TABLE_PREFIX}community_comments`,
}

// Supabase 클라이언트 (URL/KEY 없으면 null - localStorage만 사용)
export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
      },
    })
  : null

// Supabase 연결 여부 확인
export const isSupabaseEnabled = () => supabase !== null
