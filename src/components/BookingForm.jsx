import { useState, ChangeEvent, FormEvent } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { useBookingContext } from './BookingContext.jsx';
import BookingSlot from './BookingSlot.jsx';


const BookingForm = () => {

const Booking = () => {
    const handleSlotSelect = (selectedTime) => {
        console.log('Selected time slot: ${selectedTime');
    }
}

    const [newBooking, setNewBooking] = useState([])
    const { bookingData, setBookingData, availableTimes} = useBookingContext();

    const [resName, setResName] = useState("");
    const [date, setDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [numGuests, setNumGuests] = useState("")
    const [occasion, setOccasion] = useState("");

    const handleResNameChange = (e) => {
        setResName(e.target.value);
    }
    const handleDateChange = (e) => {
        setDate(e.target.value);
    }
    const handleTimeChange = (e) => {
        setSelectedTime(e.target.value);
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
    }


    const newBookingArray = [bookingData.resName, bookingData.date, bookingData.time, bookingData.numGuests, bookingData.occasion];
    console.log(bookingData)
    console.log(newBooking);
    return(
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
                        <label htmlFor="res-time"> Choose Time: </label>
                        <select
                            required
                            id="res-time"
                            value={selectedTime}
                            onChange={handleTimeChange}
                            >
                                {availableTimes.map((timeSlot, index) => (
                                 <BookingSlot
                                    key={index}
                                    value={timeSlot.time}
                                    disabled={!timeSlot.available}
                                    onSlotSelect={handleTimeChange}
                                    />
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
                        to="/components/Bookings"
                        className="button">
                            View Reservation
                    </Link>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}
export default BookingForm;