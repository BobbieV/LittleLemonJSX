import { Link } from "react-router-dom";
import { useBookingContext } from "./BookingContext.jsx";


function Bookings() {
    const { bookingData } = useBookingContext();
    const { resName, selectedTime, date, numGuests, occasion } = bookingData;

 if (!bookingData) {
        return <p>loading...</p>

    } else {

        return(
            <>
                <main id="availability">
                    <header className="availabilityHeader">
                        <h2 className="availH2">Your </h2>
                        <h2 className="availH2">Reservation</h2>
                    </header>
                    <p>Your Name: { resName }</p>
                    <p>Date of Reservation: { date }</p>
                    <p>Time of Reservation: { selectedTime }</p>
                    <p>Number of Guests: { numGuests }</p>
                    <p>Occasion: { occasion }</p>
                    <Link to="/components/BookingsPage">Edit Reservation</Link>
                    <Link to="/">Home</Link>

                </main>
            </>

        )
    }
}
   export default Bookings;