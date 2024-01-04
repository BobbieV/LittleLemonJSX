import { BookingProvider } from "./BookingContext.jsx";
import BookingForm from "./BookingForm.jsx";
import ContactForm from "./ContactForm.jsx";


function BookingsPage() {




  return (
 <BookingProvider>
    <div>
    <ContactForm />
<BookingForm />
test
    </div>
 </BookingProvider>
  );
 }

export default BookingsPage;