import { Link } from "react-router-dom";
import { BookingProvider, useBookingContext } from "./BookingContext.jsx";



function Bookings() {

    const { bookingData } = useBookingContext();

 if (!bookingData) {
      return <p>loading...</p>
    } else {


    return(
    <BookingProvider>
        <>
        <main id="availability">
            <header className="availabilityHeader">
                <h2 className="availH2">Your </h2>
                <h2 className="availH2">Reservation</h2>
            </header>
            <p>{bookingData.resName}</p>
            <p>{bookingData.date}</p>
            <p>{bookingData.time}</p>
            <p>{bookingData.numGuests}</p>
            <p>{bookingData.occasion}</p>
        <Link to="/components/BookingsPage">Edit Reservation</Link>
        <Link to="/">Home</Link>

    </main>
    </>
    </BookingProvider>
   )
}
}
   export default Bookings;