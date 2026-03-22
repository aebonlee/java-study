import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

export const supabase = supabaseUrl && supabaseKey
  ? createClient(supabaseUrl, supabaseKey)
  : null

export const isSupabaseEnabled = () => !!supabase

export const TABLES = {
  USERS: 'javamaster_users',
  PROGRESS: 'javamaster_progress',
  BADGES: 'javamaster_badges',
  QUIZ_SCORES: 'javamaster_quiz_scores',
  COMMUNITY_POSTS: 'javamaster_community_posts',
  COMMUNITY_COMMENTS: 'javamaster_community_comments',
}
