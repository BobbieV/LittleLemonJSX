

function Specials() {


    return (
      <>
          <header id="specials">
            <section className="topWrapper">
              <h1 className="h1Specials">This week's specials!</h1>
              <button className="buttonOM button" onClick={() => alert('This feature is coming soon!')}>Online Menu</button>
              </section>
              <section className="bottomWrapper">
                <article className="menuItem greekSalad">
                  <img className="menuItemImage imgGreekSalad" src="https://github.com/BobbieV/littleLemon/blob/90e6980f8559c03500120c4b290dd6482b8a16c9/src/assets/images/greek salad.jpg?raw=true" alt="a fork in a greek salad"></img>
                  <hgroup className="labelGroup">
                    <h2 className="label labelGreekSalad">Greek Salad</h2>
                    <h2 className="price priceGreekSalad">$12.95</h2>
                    </hgroup>
                  <p className="description descriptionGreekSalad">Our classic Greek salad features fresh romaine lettuce, juicy tomatoes, crisp cucumbers, tangy feta cheese, and kalamata olives, all drizzled with a zesty lemon vinaigrette.</p>
                  </article>
              <article className="menuItem bruschetta">
                  <img className="menuItemImage imgBruschetta" src="https://github.com/BobbieV/littleLemon/blob/90e6980f8559c03500120c4b290dd6482b8a16c9/src/assets/images/bruschetta.png?raw=true" alt="a close-up of a tray of bruschetta"></img>
                  <hgroup className="labelGroup">
                    <h2 className="label labelBruschetta">Bruschetta</h2>
                    <h2 className="price priceBruschetta">$5.99</h2>
                  </hgroup>
                  <p className="description descriptionBruschetta">Our version of the classic Italian appetizer consisting of grilled bread rubbed with garlic and topped with fresh tomatoes, basil, and olive oil.</p>
                  </article>
              <article className="menuItem lemonDessert">
                  <img className="menuItemImage imageLemonDessert" src="https://github.com/BobbieV/littleLemon/blob/d67b21bdb5846d15787b2748880ac05f01440d19/src/assets/images/lemon%20dessert.jpg?raw=true" alt="a fork lying in front of a lemon dessert with lemons in the distance"></img>
                  <hgroup className="labelGroup">
                    <h2 className="label labelLemonDessert">Lemon Dessert</h2>
                    <h2 className="price priceLemonDessert">$5.00</h2>
                  </hgroup>
                  <p className="description descriptionLemonDessert">This zesty and refreshing dessert will awaken your taste buds with its tangy lemon flavor and smooth, creamy texture. Perfect for any sweet tooth!</p>
                  </article>
              </section>
          </header>
      </>
    )
  }

  export default Specials;