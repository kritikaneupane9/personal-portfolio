import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ContactForm from './pages/ContactForm';
import Footer from './pages/Footer';
import './App.css';
function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
      <ContactForm /> 
      <Footer/>
    </div>
  );
}

export default App;



