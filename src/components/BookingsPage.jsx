import { BookingProvider } from "./BookingContext.jsx";
import BookingForm from "./BookingForm.jsx";
import ContactForm from "./ContactForm.jsx";


function BookingsPage() {




  return (
  <BookingProvider>
    <div>
    <ContactForm />
<BookingForm />

    </div>
   </BookingProvider>
  );
 }

export default BookingsPage;