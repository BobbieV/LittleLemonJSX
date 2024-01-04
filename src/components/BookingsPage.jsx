import { BookingProvider } from "./BookingContext.jsx";
import BookingForm from "./BookingForm.jsx"


function BookingsPage() {




  return (
  <Booking.Provider value="bookingData">
    <div>
<BookingForm />
<ContactForm />

    </div>
   </Booking.Provider>
  );
 }

export default BookingsPage;