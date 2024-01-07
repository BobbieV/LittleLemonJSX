import { useBookingContext } from './BookingContext';


const BookingSlot = () => {
    const { availability, available, availTime } = useBookingContext();
    const handleClick = (selectedTime) => {
        const selectedSlot = availability.find(slot => slot.time === selectedTime);

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