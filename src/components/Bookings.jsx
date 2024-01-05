import { Link } from "react-router-dom";
import { BookingProvider, useBookingContext } from "./BookingContext.jsx";



function Bookings() {
    const { bookingData } = useBookingContext();

    const resName = bookingData.resName;
    const time = bookingData.time;
    const date = bookingData.date;
    const numGuests = bookingData.numGuests;
    const occasion = bookingData.occasion

 //if (!bookingData) {
   //   return <p>loading...</p>
    //} else {


    return(
    <BookingProvider>
        <>
        <main id="availability">
            <header className="availabilityHeader">
                <h2 className="availH2">Your </h2>
                <h2 className="availH2">Reservation</h2>
            </header>
            <p>{resName}</p>
            <p>{date}</p>
            <p>{time}</p>
            <p>{numGuests}</p>
            <p>{occasion}</p>
        <Link to="/components/BookingsPage">Edit Reservation</Link>
        <Link to="/">Home</Link>

    </main>
    </>
    </BookingProvider>
   )
}

   export default Bookings;