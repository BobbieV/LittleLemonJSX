import  Header  from './Header.tsx';

import Specials from './Specials.tsx';
import About from './About.tsx';
import Testimonials from './Testimonials.tsx';
import Footer from './Footer.tsx';
import './ndex.css';

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