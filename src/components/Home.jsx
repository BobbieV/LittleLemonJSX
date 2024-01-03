import  Header  from './Header.jsx';

import Specials from './components/Specials.jsx';
import About from './components/About.jsx';
import Testimonials from './components/Testimonials.jsx';
import Footer from './components/Footer.jsx';
import './index.css';

export default function Home() {
    return (
        <>
            <Header/>
            <Specials/>
            <Testimonials/>
            <About/>
            <Footer/>
      </>
    )
}