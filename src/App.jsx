import { useSelector } from 'react-redux'
import './App.css'
import Home from './components/Home'
import Services from './components/Services';
import ResumeSec from './components/ResumeSec';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App = () => {
  const { toggles } = useSelector((state) => state.toggle);
  console.log(toggles)
  return (

    <div>

      {/* -- ------------------------home section ---------------- */}
      {toggles === 'home' ?
        <Home /> : toggles === 'services' ?
          <Services /> : toggles === 'resume' ?
            <ResumeSec /> : toggles === 'portfolio' ?
              <Portfolio /> : toggles === 'contact' ?
                <Contact /> : <Home />
      }

    </div>
  )
}

export default App
