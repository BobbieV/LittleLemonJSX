import React from 'react';

// Renders an option element for time slots within BookingForm.jsx
const BookingSlot = ({ time, available }) => {
    return (
        // Display the available time, but disable if unavailble
            <option value={time} disabled={!available}> 
                {time} {available ? '(Available)' : '(Not Available)'}
            </option>
    )
}
    export default BookingSlot;