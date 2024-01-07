import { BookingContext } from './BookingContext';


const BookingSlot = ({ time, available, onSlotSelect }) => {

    const handleClick = () => {
        if (available && onSlotSelect) {
            onSlotSelect(time);
        }
    }

    return (
            <option value={initialAvailability.time} onClick={handleClick} disabled={!available}>
                {time} {available === true ? '(Available)' : '(Not Available)'}
            </option>
    )
}
    export default BookingSlot;