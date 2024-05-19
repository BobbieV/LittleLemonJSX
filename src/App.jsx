import  Home from './components/Home.jsx';
import './index.css';
import {
  NavLink,
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom';
import BookingsPage from './components/BookingsPage.jsx';
import ErrorPage from './components/Error-page.jsx';
import Specials from './components/Specials.jsx';
import About from './components/About.jsx';
import  CombinedProvider  from "./components/CombinedContext";
import ContactForm from './components/ContactForm.jsx';
import Bookings from './components/Bookings.jsx';


function App() {

  return (
    <CombinedProvider>
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
              to="/components/BookingsPage"
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
          <Route path="/components/BookingsPage" element={<BookingsPage />}/>
          <Route path="/Specials" element={<Specials />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/OrderOnline" element={<ErrorPage />}/>
          <Route path="/Login" element={<ErrorPage />}/>

          <Route path="/ContactForm" element={<ContactForm />}/>
          <Route path="/components/Bookings" element={<Bookings />}/>
        </Routes>
      </BrowserRouter>
    </CombinedProvider>
  )
}

export default App;
