import {createContext, useContext, useState, useReducer } from 'react';
import { bookingData } from './components/BookingData.jsx';

initialBookingData = { bookingData }

export const bookingContext = createContext(bookingData);


// This is the reducer function that handles actions related to booking data
const bookingReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_BOOKING_DATA':
        console.log('bookingReducer UPDATE BOOKING DATA ', time, state )
        return {...state, ...action.payload};

        default :
        console.log('bookingReducer UPDATE BOOKING DATA ', time, state )
        return state;
    }
}



export const useBookingContext = () => {
    const context = useContext(BookingContext);
    if (!context) {
        throw new Error('useBooking must be used within a BookingProvider');
    } else {
  return context;
};
};


export const BookingProvider = ({ children }) => {
    const [bookingDataState, dispatchBooking]= useReducer(bookingReducer, BookingData);

    const [availableTimesState, dispatchAvailability] = useReducer(availabilityReducer, availableTimes);

    const contextValue = {
        bookingData: bookingDataState, // Current booking data state
        dispatchBooking, // Function to update booking data state
    };
    return (
        <BookingContext.Provider value={contextValue}>
            {children}
        </BookingContext.Provider>
    );
};