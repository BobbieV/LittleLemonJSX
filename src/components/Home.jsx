import  Header  from './Header.jsx';

import Specials from './Specials.jsx';
import About from './About.jsx';
import Testimonials from './Testimonials.jsx';
import Footer from './Footer.jsx';


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