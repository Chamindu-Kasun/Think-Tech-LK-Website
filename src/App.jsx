import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact';
import Videos from './components/Videos'
import Articles from './components/Articles';
import Education from './components/Education';
import Experience from './components/Experience';
import './components/Navbar.css'
import './components/About.css'
import './components/Contact.css'
import './components/Videos.css'
import './components/Articles.css'
import './components/Education.css'
import './components/Experience.css'
import Publications from './components/Publications';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <About />

        <Experience />

        <Education />

        <Publications />

        <Videos />

        <Articles />

        <Contact />
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Chamindu Kasun. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
