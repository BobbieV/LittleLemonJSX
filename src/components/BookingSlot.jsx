import { useBookingContext } from './BookingContext';


const BookingSlot = ({ time }) => {
    const { availability } = useBookingContext();
    const handleClick = (selectedTime) => {
        const selectedSlot = availability.find(slot => slot.time === selectedTime);

        if (selectedSlot && selectedSlot.available) {
            console.log('Selected time: ${selectedTime}');
        } else {
            console.log('Selected time ${selectedTime} is not available');
        }}

    return (
            <option value={time} onClick={handleClick} disabled={!available}>
                {time} {available ? '(Available)' : '(Not Available)'}
            </option>
    )
}
    export default BookingSlot;