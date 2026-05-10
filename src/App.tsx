import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import ThemePage from './pages/ThemePage'
import BlogListPage from './pages/BlogListPage'
import BlogDetailPage from './pages/BlogDetailPage'

export default function App() {
  return (
    <div
      className="h-full flex flex-col bg-bg-base text-text-primary font-body text-base leading-relaxed"
      style={{ WebkitFontSmoothing: 'antialiased' }}
    >
      <Navbar />
      <div className="flex-1 min-h-0">
        <Routes>
          <Route path="/" element={<div className="h-full overflow-y-auto"><HomePage /><Footer /></div>} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/theme" element={<div className="h-full overflow-y-auto"><ThemePage /></div>} />
          <Route path="/blog" element={<div className="h-full overflow-y-auto"><BlogListPage /></div>} />
          <Route path="/blog/:slug" element={<div className="h-full overflow-y-auto"><BlogDetailPage /></div>} />
        </Routes>
      </div>
    </div>
  )
}
