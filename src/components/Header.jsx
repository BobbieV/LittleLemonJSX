import ReserveATableButton from './ReserveATableButton.jsx'


function Header() {


  return (
    <>
      <header id="header">
          <main className="headerBackground">
            <section className="textWrapper">
              <h1 className="title titleBlock">Little Lemon</h1>
              <h2 className="h2text titleBlock text">Chicago</h2>
              <p className="text ptext">We are a family-owned Mediterranean restaurant, focused on traditional recipes, served with a modern twist.</p>
              <div className="reserveATableWrapper">
                <ReserveATableButton />
              </div>
            </section>
            <section className="heroImageWrapper">
            <img src="https://github.com/BobbieV/littleLemon/blob/main/src/assets/images/Hero%20Image.png?raw=true" className="heroImage" alt="Four different varieties of bruschetta being held on a slate tray"></img>
        </section>
        </main>
        </header>
    </>
  )
}

export default Header;