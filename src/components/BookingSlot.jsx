import { BookingContext } from './BookingContext';


const BookingSlot = ({ time, available, onSlotSelect }) => {

    const handleClick = () => {
        if (available && onSlotSelect) {
            onSlotSelect(time);
        }
    }

    return (
            <option value={time} onClick={handleClick} disabled={!available}>
                {initialAvailability.time} {initialAvailability.available === true ? '(Available)' : '(Not Available)'}
            </option>
    )
}
    export default BookingSlot;