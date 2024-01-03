import { Link } from 'react-router-dom';



function Footer() {


  return (
    <>
        <footer id="footer">
          <img
            className="footerLogo"
            src="https://github.com/BobbieV/littleLemon/blob/83cc181e5814ff2107709d62e23e2ad9f0119ef0/src/assets/images/logo.png?raw=true"
            alt="A lemon icon next to the words 'Little Lemon'">
            </img>
          <div className="footerTextGroup">
            <ul className="footer">
              <li>Doormat</li>
              <li>Navigation</li>
              <li>
              <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/specials">Menu</Link>
              </li>
              <li>
                <Link to="/Bookings">Reservations</Link>
              </li>
              <li>
                <Link to="/orderOnline">Order Online</Link></li>
              <li>
                <Link to="/login">Login</Link></li>
  </ul>
              <ul className="footer">
                <Link to="/contactForm">Contact</Link>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
            <ul className="footer">Social Media
              <li>
                <a href="https://www.facebook.com">Facebook</a>
              </li>
              <li>
                <a href="https://www.instagram.com">Instagram</a>
              </li>
              <li>
                <a href="https://www.tiktok.com/explore">TikTok</a>
              </li>
            </ul>
            </div>
            </footer>
    </>
  )
}

export default Footer;