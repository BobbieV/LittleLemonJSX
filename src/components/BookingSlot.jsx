import { useBookingContext } from './BookingContext';

const { availability, available, availTime } = useBookingContext();
const BookingSlot = ({ time, available }) => {
    const handleClick = (selectedTime) => {
        const selectedSlot = availableTimes.find(availableTimes.time === selectedTime);

        if (selectedSlot && selectedSlot.available) {
            console.log('Selected time: ${selectedTime}');
        } else {
            console.log('Selected time ${selectedTime} is not available');
        }}

    return (
            <option value={availTime} onClick={handleClick} disabled={!available}>
                {availTime} {available ? '(Available)' : '(Not Available)'}
            </option>
    )
}
    export default BookingSlot;