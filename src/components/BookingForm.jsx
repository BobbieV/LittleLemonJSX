import { useState, ChangeEvent, FormEvent } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { useBookingContext, BookingProvider } from './components/BookingContext.jsx'


const BookingForm = () => {

    const [newBooking, setNewBooking] = useState([])
    const { bookingData, setBookingData} =useBookingContext();

    const [resName, setResName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState<string>("");
    const [numGuests, setNumGuests] = useState("")
    const [occasion, setOccasion] = useState("");

    const handleResNameChange = (e) => {
        setResName(e.target.value);
    }
    const handleDateChange = (e) => {
        setDate(e.target.value);
    }
    const handleTimeChange = (e) => {
        setTime(e.target.value);
    }
    const handleNumGuestsChange = (e) => {
        setNumGuests(e.target.value);
    }
    const handleOccasionChange = (e) => {
        setOccasion(e.target.value);
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log("Form Submitted!");
        alert("Your reservation is Confirmed")
        setResName("");
        setDate("");
        setTime("");
        setNumGuests("");
        setOccasion("");
        setNewBooking(newBookingArray);
        setBookingData({...bookingData, resName, date, time, numGuests, occasion});
        console.log({newBooking: newBookingArray});
        console.log('Updated Booking Data', bookingData, resName);


    }
    const [availableTimes] = useState([
        "5:00 pm", "5:30 pm", "6:00 pm", "6:30 pm", "7:00 pm", "7:30 pm", "8:30 pm"
    ]);

    {/*const { bookingData, setBookingData } = useBooking();*/}


    const newBookingArray = [bookingData.resName, bookingData.date, bookingData.time, bookingData.numGuests, bookingData.occasion];
    console.log(bookingData)
    console.log(newBooking);
    return(
        <BookingProvider>
            <div className="BookingForm">
                <form onSubmit={handleSubmit}>
                    <fieldset>
                    <div className="field">
                            <label
                                htmlFor="resName">
                                    Name:
                            </label>
                            <input
                                id="resName"
                                type="text"
                                placeholder="Name"
                                value={resName}
                                onChange={handleResNameChange}
                                required
                            />
                    </div>
                    <div className="field">
                        <label
                            htmlFor="res-date">
                                Choose Date:
                        </label>
                        <input
                            id="res-date"
                            type="date"
                            placeholder="Date"
                            value={date}
                            onChange={handleDateChange}
                            required
                            />
                    </div>
                    <div className="field">
                        <label
                            htmlFor="res-time">
                                Choose Time:
                        </label>
                        <select
                            required
                            id="res-time"
                            value={time}
                            onChange={handleTimeChange}
                            >
                                {availableTimes.map((availableTime, index) => (
                                    <option key={index} value={availableTime}>
                                        {availableTime}
                                    </option>
                                ))}
                           </select>
                    </div>
                    <div className="field">
                        <label
                            htmlFor="numGuests">
                                Number of Guests:
                        </label>
                        <input
                            id="numGuests"
                            type="number"
                            min="1"
                            max="8"
                            value={numGuests}
                            onChange={handleNumGuestsChange}
                            required
                            />
                            <FontAwesomeIcon
                            icon={ faQuestion }
                            className="fa icon"
                            aria-hidden="true"
                            onClick={() =>
                                alert('For Parties of more than 8 people, please call the restaurant directly to make reservations.')}/>
                    </div>
                    <div className="field">
                        <label
                            htmlFor="occasion">
                                Occasion (Birthday, Anniversary, etc):
                        </label>
                        <select
                            id="occasion"
                            required
                            placeholder="Special Occasion"
                            value={occasion}
                            onChange={handleOccasionChange}
                            >
                            <option value="None">None</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                            <option value="Other">Other</option>
                        </select>
                        <input type="submit" className="button" value="Make Your Reservation"/>
                        <p>{newBooking}</p>
                    <Link
                        to="/"
                        className="button">
                            Home
                    </Link>
                    <Link
                        to="/Bookings"
                        className="button">
                            View Reservation
                    </Link>
                    </div>
                </fieldset>
            </form>
           <p>New Booking {newBooking} </p>
           <p>Name: {bookingData.resName}</p>
           <p>Number of Guests:{bookingData.numGuests}</p>
        </div>
        </BookingProvider>
    )
}
export default BookingForm;