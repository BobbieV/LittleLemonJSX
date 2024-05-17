import React from 'react';


const BookingSlot = ({ time, available }) => {
    return (
            <option value={time} disabled={!available}>
                {time} {available ? '(Available)' : '(Not Available)'}
            </option>
    )
}
    export default BookingSlot;