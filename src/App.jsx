import '@/App.css'
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'


import Navbar from '@components/Navbar'
import Studio from '@views/Studio'
import KnowledgeBase from '@views/KnowledgeBase'
import PracticeProjects from '@views/PracticeProjects'
import Planning from '@views/Planning'
import AboutMe from '@views/about/AboutMe'
import Index from '@views/index'
import ProjectDetail from './views/PracticeProjects/ProjectDetail'


function App() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('light-theme', !isDark);
  }, [isDark]);


  return (

    <Router>
      <AnimatePresence mode='wait'>
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
              <Route path="/practice-projects" element={<PracticeProjects />} />
              <Route path="/practice-projects/:projectId" element={<ProjectDetail />} />
              <Route path="/studio" element={<Studio />} />
              <Route path="/planning" element={<Planning />} />
              <Route path="/index" element={<Index isDark={isDark} />} />
              <Route path="/about" element={<AboutMe isDark={isDark} />} />
              <Route path='/' element={<Navigate to="/index" />} />
              <Route path="*" element={<Navigate to="/index" />} />
            </Routes>
          </div>
        </motion.div>
      </AnimatePresence>
    </Router>
  )
}

export default App
