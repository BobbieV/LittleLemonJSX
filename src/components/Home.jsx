import  Header  from './components/Header.tsx';

import Specials from './components/Specials.tsx';
import About from './components/About.tsx';
import Testimonials from './components/Testimonials.tsx';
import Footer from './components/Footer.tsx';
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