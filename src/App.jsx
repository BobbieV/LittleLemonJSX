import  Home from './home.tsx';
import './index.css';
import {
  NavLink,
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom';
import BookingsPage from './BookingsPage.tsx';
import ErrorPage from './Error-page.tsx';
import Specials from './Specials.tsx';
import About from './components/About.jsx';
import Details from './Details.tsx';
import Review from './Review.tsx';
import ContactForm from './ContactForm.tsx';
import Bookings from './Bookings.tsx'


function App() {

  return (
    <>
  <BrowserRouter >
  <div className="navLinksWrapper">
    <nav id="nav">
          <img
            src="https://github.com/BobbieV/littleLemon/blob/main/src/assets/images/logo.png?raw=true"
            className="AppLogo"
            alt="A lemon icon followed by the words 'Little Lemon'">
          </img>

            <NavLink
              to="/"
              className="navbar navtextHome"
              style={({ isActive }) => ({
                color: isActive ? '#495E57' : '#333333'
              })}
              >Home
            </NavLink>
            <NavLink
              to="/about"
              className="navbar navtextAbout"
              style={({ isActive }) => ({
                color: isActive ? '#495E57' : '#333333'
              })}
              >About
            </NavLink>
            <NavLink
              to="/specials"
              className="navbar navtextMenu"
              style={({ isActive }) => ({
                color: isActive ? '#495E57' : '#333333'
              })}
              >Menu
            </NavLink>
            <NavLink
              to="/BookingsPage"
              className="navbar navtextReservations"
              style={({ isActive }) => ({
                color: isActive ? '#495E57' : '#333333'
              })}
              >Reservations
            </NavLink>
            <NavLink
              to="/orderOnline"
              className="navbar navtextOrderonline"
              style={({ isActive }) => ({
                color: isActive ? '#495E57' : '#333333'
              })}
              >Order Online
            </NavLink>
            <NavLink
              to="/login"
              className="navbar navtextLogin"
              style={({ isActive }) => ({
                color: isActive ? '#495E57' : '#333333'
              })}
              >Login
            </NavLink>

    </nav>
    </div>

    <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/BookingsPage" element={<BookingsPage />}/>
          <Route path="/Specials" element={<Specials />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/OrderOnline" element={<ErrorPage />}/>
          <Route path="/Login" element={<ErrorPage />}/>
          <Route path="/Details" element={<Details />}/>
          <Route path="/Review" element={<Review />}/>
          <Route path="/ContactForm" element={<ContactForm />}/>
          <Route path="/Bookings" element={<Bookings />}/>
        </Routes>
  </BrowserRouter>
    </>
  )
}

export default App;
