import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import { ProgressProvider } from './contexts/ProgressContext'
import { BadgeProvider } from './contexts/BadgeContext'
import { AuthProvider } from './contexts/AuthContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ErrorBoundary from './components/ErrorBoundary'

const Home = lazy(() => import('./pages/Home'))
const JavaLearning = lazy(() => import('./pages/JavaLearning'))
const QuizCenter = lazy(() => import('./pages/QuizCenter'))
const BadgeCollection = lazy(() => import('./pages/BadgeCollection'))
const MyPage = lazy(() => import('./pages/MyPage'))
const Guide = lazy(() => import('./pages/Guide'))
const Login = lazy(() => import('./pages/Login'))
const JavaLesson01 = lazy(() => import('./pages/java-learning/JavaLesson01'))
const JavaLesson02 = lazy(() => import('./pages/java-learning/JavaLesson02'))
const JavaLesson03 = lazy(() => import('./pages/java-learning/JavaLesson03'))
const JavaLesson04 = lazy(() => import('./pages/java-learning/JavaLesson04'))
const JavaLesson05 = lazy(() => import('./pages/java-learning/JavaLesson05'))
const JavaLesson06 = lazy(() => import('./pages/java-learning/JavaLesson06'))
const JavaLesson07 = lazy(() => import('./pages/java-learning/JavaLesson07'))
const JavaLesson08 = lazy(() => import('./pages/java-learning/JavaLesson08'))
const JavaLesson09 = lazy(() => import('./pages/java-learning/JavaLesson09'))
const JavaLesson10 = lazy(() => import('./pages/java-learning/JavaLesson10'))
const JavaLesson11 = lazy(() => import('./pages/java-learning/JavaLesson11'))
const JavaLesson12 = lazy(() => import('./pages/java-learning/JavaLesson12'))
const JavaLesson13 = lazy(() => import('./pages/java-learning/JavaLesson13'))
const JavaLesson14 = lazy(() => import('./pages/java-learning/JavaLesson14'))
const JavaLesson15 = lazy(() => import('./pages/java-learning/JavaLesson15'))
const JavaLesson16 = lazy(() => import('./pages/java-learning/JavaLesson16'))
const JavaLesson17 = lazy(() => import('./pages/java-learning/JavaLesson17'))

function PageLoader() {
  return (
    <div className="page-loader">
      <div className="spinner"></div>
    </div>
  )
}

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '120px 20px' }}>
      <h1 style={{ fontSize: '4rem', fontWeight: 900, color: '#5382A1' }}>404</h1>
      <p style={{ fontSize: '1.125rem', color: '#666', marginTop: '12px' }}>페이지를 찾을 수 없습니다</p>
      <a href="/" className="btn btn-primary" style={{ marginTop: '24px' }}>홈으로 돌아가기</a>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <ProgressProvider>
        <BadgeProvider>
          <AuthProvider>
          <BrowserRouter>
            <ErrorBoundary>
              <Navbar />
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/java-learning" element={<JavaLearning />} />
                  <Route path="/quiz" element={<QuizCenter />} />
                  <Route path="/badges" element={<BadgeCollection />} />
                  <Route path="/my" element={<MyPage />} />
                  <Route path="/guide" element={<Guide />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/java-learning/01" element={<JavaLesson01 />} />
                  <Route path="/java-learning/02" element={<JavaLesson02 />} />
                  <Route path="/java-learning/03" element={<JavaLesson03 />} />
                  <Route path="/java-learning/04" element={<JavaLesson04 />} />
                  <Route path="/java-learning/05" element={<JavaLesson05 />} />
                  <Route path="/java-learning/06" element={<JavaLesson06 />} />
                  <Route path="/java-learning/07" element={<JavaLesson07 />} />
                  <Route path="/java-learning/08" element={<JavaLesson08 />} />
                  <Route path="/java-learning/09" element={<JavaLesson09 />} />
                  <Route path="/java-learning/10" element={<JavaLesson10 />} />
                  <Route path="/java-learning/11" element={<JavaLesson11 />} />
                  <Route path="/java-learning/12" element={<JavaLesson12 />} />
                  <Route path="/java-learning/13" element={<JavaLesson13 />} />
                  <Route path="/java-learning/14" element={<JavaLesson14 />} />
                  <Route path="/java-learning/15" element={<JavaLesson15 />} />
                  <Route path="/java-learning/16" element={<JavaLesson16 />} />
                  <Route path="/java-learning/17" element={<JavaLesson17 />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
              <Footer />
            </ErrorBoundary>
          </BrowserRouter>
          </AuthProvider>
        </BadgeProvider>
      </ProgressProvider>
    </ThemeProvider>
  )
}
