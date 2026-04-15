import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import { ProgressProvider } from './contexts/ProgressContext'
import { BadgeProvider } from './contexts/BadgeContext'
import { AuthProvider } from './contexts/AuthContext'
import AdminGuard from './components/AdminGuard'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ErrorBoundary from './components/ErrorBoundary'
import CodeBlockCopy from './components/CodeBlockCopy'

const Home = lazy(() => import('./pages/Home'))
const JavaLearning = lazy(() => import('./pages/JavaLearning'))
const ServletLearning = lazy(() => import('./pages/ServletLearning'))
const SpringLearning = lazy(() => import('./pages/SpringLearning'))
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
const ServletLesson01 = lazy(() => import('./pages/servlet/ServletLesson01'))
const ServletLesson02 = lazy(() => import('./pages/servlet/ServletLesson02'))
const ServletLesson03 = lazy(() => import('./pages/servlet/ServletLesson03'))
const ServletLesson04 = lazy(() => import('./pages/servlet/ServletLesson04'))
const ServletLesson05 = lazy(() => import('./pages/servlet/ServletLesson05'))
const ServletLesson06 = lazy(() => import('./pages/servlet/ServletLesson06'))
const ServletLesson07 = lazy(() => import('./pages/servlet/ServletLesson07'))
const ServletLesson08 = lazy(() => import('./pages/servlet/ServletLesson08'))
const ServletLesson09 = lazy(() => import('./pages/servlet/ServletLesson09'))
const ServletLesson10 = lazy(() => import('./pages/servlet/ServletLesson10'))
const SpringLesson01 = lazy(() => import('./pages/spring/SpringLesson01'))
const SpringLesson02 = lazy(() => import('./pages/spring/SpringLesson02'))
const SpringLesson03 = lazy(() => import('./pages/spring/SpringLesson03'))
const SpringLesson04 = lazy(() => import('./pages/spring/SpringLesson04'))
const SpringLesson05 = lazy(() => import('./pages/spring/SpringLesson05'))
const SpringLesson06 = lazy(() => import('./pages/spring/SpringLesson06'))
const SpringLesson07 = lazy(() => import('./pages/spring/SpringLesson07'))
const SpringLesson08 = lazy(() => import('./pages/spring/SpringLesson08'))
const SpringLesson09 = lazy(() => import('./pages/spring/SpringLesson09'))
const SpringLesson10 = lazy(() => import('./pages/spring/SpringLesson10'))
const SpringLesson11 = lazy(() => import('./pages/spring/SpringLesson11'))
const SpringLesson12 = lazy(() => import('./pages/spring/SpringLesson12'))
const SpringLesson13 = lazy(() => import('./pages/spring/SpringLesson13'))
const SpringLesson14 = lazy(() => import('./pages/spring/SpringLesson14'))
const SpringLesson15 = lazy(() => import('./pages/spring/SpringLesson15'))
const SpringLesson16 = lazy(() => import('./pages/spring/SpringLesson16'))
const PracticalLearning = lazy(() => import('./pages/PracticalLearning'))
const ProjectHub = lazy(() => import('./pages/ProjectHub'))
const ProjectLesson01 = lazy(() => import('./pages/projects/ProjectLesson01'))
const ProjectLesson02 = lazy(() => import('./pages/projects/ProjectLesson02'))
const ProjectLesson03 = lazy(() => import('./pages/projects/ProjectLesson03'))
const ProjectLesson04 = lazy(() => import('./pages/projects/ProjectLesson04'))
const ProjectLesson05 = lazy(() => import('./pages/projects/ProjectLesson05'))
const ProjectLesson06 = lazy(() => import('./pages/projects/ProjectLesson06'))
const ProjectLesson07 = lazy(() => import('./pages/projects/ProjectLesson07'))
const ProjectLesson08 = lazy(() => import('./pages/projects/ProjectLesson08'))
const PracticalLesson01 = lazy(() => import('./pages/practical/PracticalLesson01'))
const PracticalLesson02 = lazy(() => import('./pages/practical/PracticalLesson02'))
const PracticalLesson03 = lazy(() => import('./pages/practical/PracticalLesson03'))
const PracticalLesson04 = lazy(() => import('./pages/practical/PracticalLesson04'))
const PracticalLesson05 = lazy(() => import('./pages/practical/PracticalLesson05'))
const PracticalLesson06 = lazy(() => import('./pages/practical/PracticalLesson06'))
const PracticalLesson07 = lazy(() => import('./pages/practical/PracticalLesson07'))
const PracticalLesson08 = lazy(() => import('./pages/practical/PracticalLesson08'))
const PracticalLesson09 = lazy(() => import('./pages/practical/PracticalLesson09'))
const PracticalLesson10 = lazy(() => import('./pages/practical/PracticalLesson10'))
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'))

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
      <AuthProvider>
        <ProgressProvider>
          <BadgeProvider>
          <BrowserRouter>
            <ErrorBoundary>
              <Navbar />
              <CodeBlockCopy />
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/java-learning" element={<JavaLearning />} />
                  <Route path="/servlet" element={<ServletLearning />} />
                  <Route path="/spring" element={<SpringLearning />} />
                  <Route path="/practical" element={<PracticalLearning />} />
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
                  <Route path="/servlet/01" element={<ServletLesson01 />} />
                  <Route path="/servlet/02" element={<ServletLesson02 />} />
                  <Route path="/servlet/03" element={<ServletLesson03 />} />
                  <Route path="/servlet/04" element={<ServletLesson04 />} />
                  <Route path="/servlet/05" element={<ServletLesson05 />} />
                  <Route path="/servlet/06" element={<ServletLesson06 />} />
                  <Route path="/servlet/07" element={<ServletLesson07 />} />
                  <Route path="/servlet/08" element={<ServletLesson08 />} />
                  <Route path="/servlet/09" element={<ServletLesson09 />} />
                  <Route path="/servlet/10" element={<ServletLesson10 />} />
                  <Route path="/spring/01" element={<SpringLesson01 />} />
                  <Route path="/spring/02" element={<SpringLesson02 />} />
                  <Route path="/spring/03" element={<SpringLesson03 />} />
                  <Route path="/spring/04" element={<SpringLesson04 />} />
                  <Route path="/spring/05" element={<SpringLesson05 />} />
                  <Route path="/spring/06" element={<SpringLesson06 />} />
                  <Route path="/spring/07" element={<SpringLesson07 />} />
                  <Route path="/spring/08" element={<SpringLesson08 />} />
                  <Route path="/spring/09" element={<SpringLesson09 />} />
                  <Route path="/spring/10" element={<SpringLesson10 />} />
                  <Route path="/spring/11" element={<SpringLesson11 />} />
                  <Route path="/spring/12" element={<SpringLesson12 />} />
                  <Route path="/spring/13" element={<SpringLesson13 />} />
                  <Route path="/spring/14" element={<SpringLesson14 />} />
                  <Route path="/spring/15" element={<SpringLesson15 />} />
                  <Route path="/spring/16" element={<SpringLesson16 />} />
                  <Route path="/practical/01" element={<PracticalLesson01 />} />
                  <Route path="/practical/02" element={<PracticalLesson02 />} />
                  <Route path="/practical/03" element={<PracticalLesson03 />} />
                  <Route path="/practical/04" element={<PracticalLesson04 />} />
                  <Route path="/practical/05" element={<PracticalLesson05 />} />
                  <Route path="/practical/06" element={<PracticalLesson06 />} />
                  <Route path="/practical/07" element={<PracticalLesson07 />} />
                  <Route path="/practical/08" element={<PracticalLesson08 />} />
                  <Route path="/practical/09" element={<PracticalLesson09 />} />
                  <Route path="/practical/10" element={<PracticalLesson10 />} />
                  <Route path="/projects" element={<ProjectHub />} />
                  <Route path="/projects/01" element={<ProjectLesson01 />} />
                  <Route path="/projects/02" element={<ProjectLesson02 />} />
                  <Route path="/projects/03" element={<ProjectLesson03 />} />
                  <Route path="/projects/04" element={<ProjectLesson04 />} />
                  <Route path="/projects/05" element={<ProjectLesson05 />} />
                  <Route path="/projects/06" element={<ProjectLesson06 />} />
                  <Route path="/projects/07" element={<ProjectLesson07 />} />
                  <Route path="/projects/08" element={<ProjectLesson08 />} />
                  <Route path="/admin/dashboard/*" element={<AdminGuard><AdminDashboard /></AdminGuard>} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
              <Footer />
            </ErrorBoundary>
          </BrowserRouter>
          </BadgeProvider>
        </ProgressProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
