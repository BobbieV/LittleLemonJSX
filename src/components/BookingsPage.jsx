import { BookingProvider } from "./BookingContext.jsx";
import BookingForm from "./components/BookingForm.jsx"


function BookingsPage() {




  return (
    <BookingProvider>
    <div>

            <BookingForm />

    </div>
    </BookingProvider>
  );
        }

export default BookingsPage;