import './App.css'
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import LoadingScreen from './components/LoadingScreen'
import SiteSection from './components/SiteSection/index'
import Navbar from './components/Navbar'
import Studio from './views/Studio'
import KnowledgeBase from './views/KnowledgeBase'
import PracticeProjects from './views/PracticeProjects'
import Planning from './views/Planning'
import AboutMe from './views/about/AboutMe'
import PageLayout from './components/knowledge-Layout'

function App() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('light-theme', !isDark);
  }, [isDark]);

  useEffect(() => {
    // 模拟加载过程
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence mode='wait'>
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
          >
            <Navbar isDark={isDark} setIsDark={setIsDark} />
            <div className="container" style={{ flex: 1 }}>
              <Routes>
                <Route path="/knowledge-base" element={<KnowledgeBase isDark={isDark} />} />
                <Route path="/practice-projects" element={<PracticeProjects isDark={isDark} />} />
                <Route path="/studio" element={<Studio />} />
                <Route path="/planning" element={<Planning />} />
                <Route path="/index" element={<SiteSection isDark={isDark} />} />
                <Route path="/about" element={<AboutMe isDark={isDark} />} />
                <Route path='/' element={<Navigate to="/index" />} />
                <Route path="*" element={<Navigate to="/index" />} />
              </Routes>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Router>
  )
}

export default App
