import { createContext, useContext, useReducer } from 'react';
import { availabilityReducer, initialAvailableTimes } from './AvailableTimesContext';
import { bookingReducer, initialBookingData } from './BookingContext';

// Combine initial states
const initialState = {
    bookingData: initialBookingData,
    availableTimes: initialAvailableTimes
};

// Combine reducers
const combinedReducer = (state, action) => ({
    bookingData: bookingReducer(state.bookingData, action),
    availableTimes: initialAvailableTimes(state.availableTimes, action)
})
;

// Create combined context
const CombinedContext = createContext();

// Custom hook to use the combined context
export const useCombinedContext = () => {
    const context = useContext(CombinedContext);
    if(!context) {
        throw new Error('useCombinedContext must be used within a CombinedProvider');
    }
    return context;
};

// Provider component
export const CombinedProvider = ({ children }) => {
    const [state, dispatch] = useReducer(combinedReducer, initialState);

    const contextValue = {
        bookingData: state.bookingData,
        availableTimes: state.availableTimes,
        dispatch,
    };

    return (
        <CombinedContext.Provider value={contextValue}>
            {children}
        </CombinedContext.Provider>
    );
};