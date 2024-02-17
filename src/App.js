import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/home';
import Profile from './components/profile/profile';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Footer from './components/footer/footer';
function App() {
  return (
    <>
      <Home />
     <Profile/>
      <About/>
      <Projects/>
      <Footer/>
     </>
  );
}

export default App;
