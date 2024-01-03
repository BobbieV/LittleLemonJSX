function Testimonials() {


    return (
      <>
          <header id="testimonials">
            <h1 className="h1Testimonials">Testimonials</h1>
            <section className="testimonialContainersWrapper">
              <section className="testimonialContainer testimonial1">
                <img
                  className="testimonialUserImage"
                  alt="a round profile image icon with a blonde woman and a small white dog"
                  src="https://github.com/BobbieV/littleLemon/blob/88e414dfd6b3636026a90dc465f15aaafc032289/src/assets/images/'Joan'%20Female%20Profile%20Pic%2075%20x%2075px.png?raw=true">
                  </img>
                <hgroup className="h2TestimonialText">
                  <h2 className="rating">9/10</h2>
                  <h2 className="name">Joan</h2>
                </hgroup>
                <p className="userFeedback">The food was outstanding and the atmosphere was lovely. The service was great too, but it was a little pricey. Overall, a fantastic experience.</p>
               </section>
              <section className="testimonialContainer">
              <img className="testimonialUserImage"
              alt="a round profile image icon with a brunette woman in front of a greenery background"
              src="https://github.com/BobbieV/littleLemon/blob/88e414dfd6b3636026a90dc465f15aaafc032289/src/assets/images/'Diane'%20Female%20Profile%20Pic%2075%20x%2075px.png?raw=true"></img>
                <hgroup className="h2TestimonialText">
                  <h2 className="rating">10/10</h2>
                  <h2 className="name">Diane</h2>
                </hgroup>
                <p className="userFeedback">Everything was perfect! The food was absolutely delicious, the service was top-notch, and the atmosphere was wonderful. Highly recommend this restaurant.</p>
              </section>
              <section className="testimonialContainer">
              <img
                className="testimonialUserImage"
                alt="a round profile image icon with a man and a small white dog"
                src="https://github.com/BobbieV/littleLemon/blob/88e414dfd6b3636026a90dc465f15aaafc032289/src/assets/images/'David'%20Male%20Profile%20Pic%2075%20x%2075px.png?raw=true">
              </img>
                <hgroup className="h2TestimonialText">
                  <h2 className="rating">9/10</h2>
                  <h2 className="name">David</h2>
                </hgroup>
                <p className="userFeedback">The food was great, but the service was a bit slow. The atmosphere was nice, but a little noisy. Still, a solid choice for a night out.</p>
              </section>
              <section className="testimonialContainer">
              <img className="testimonialUserImage"
                alt="a round profile image icon with a brunette woman wearing a grey hat"
                src="https://github.com/BobbieV/littleLemon/blob/88e414dfd6b3636026a90dc465f15aaafc032289/src/assets/images/'Jenna'%20Female%20Profile%20Pic%2075%20x%2075px.png?raw=true">
              </img>
                <hgroup className="h2TestimonialText">
                  <h2 className="rating">8/10</h2>
                  <h2 className="name">Jenna</h2>
                </hgroup>
                <p className="userFeedback">The food was good, but nothing stood out as exceptional. The service was okay, but a little inattentive. The atmosphere was cozy, but a bit cramped.</p>
              </section>
              </section>
            </header>
      </>
    )
  }
  
  export default Testimonials;