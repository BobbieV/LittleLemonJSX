import { BookingProvider } from "./BookingContext.jsx";
import BookingForm from "./BookingForm.jsx";
import ContactForm from "./ContactForm.jsx";


function BookingsPage() {




  return (
  <Booking.Provider value={bookingData}>
    <div>
    <ContactForm />
<BookingForm />

    </div>
   </Booking.Provider>
  );
 }

export default BookingsPage;