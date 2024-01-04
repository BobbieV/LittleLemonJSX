import { BookingProvider } from "./BookingContext.jsx";
import BookingForm from "./BookingForm.jsx";
import ContactForm from "./ContactForm.jsx";


function BookingsPage() {




  return (
  <BookingProvider value="bookingData">
    <div>
<BookingForm />
<ContactForm />

    </div>
   </BookingProvider>
  );
 }

export default BookingsPage;