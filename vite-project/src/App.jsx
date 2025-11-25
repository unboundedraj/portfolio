import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import ContactMe from './pages/ContactMe'
import MyWorks from './pages/MyWorks'
import Skills from './pages/Skills'
import NotFound from './pages/NotFound'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/works" element={<MyWorks />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App