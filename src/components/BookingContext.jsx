import {createContext, useContext, useState, useReducer } from 'react';

// This is the initial state for the booking data
export const BookingData = {
    resName: '',
    date: '',
    time: '',
    numGuests: '',
    occasion: '',
};

export const BookingContext = createContext(BookingData);

// This is the reducer function that handles actions related to booking data
const bookingReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_BOOKING_DATA':
            return {...state, ...action.payload};
        default :
            return state;
    }
}
// This is the reducer function that handles actions related to availability
const availabilityReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_AVAILABILITY':
        const { time } = action.payload;
       return state.map(slot =>
        slot.time ===time ? { ...slot, available : !slot.available } : slot
        );
       // Below this line is the previously existing code 
        // const index = state.findIndex(slot => slot.time === time);

       // if (index !== -1) {
           // const updatedAvailability = [...state];
            //updatedAvailability[index] = {
                //...updatedAvailability[index],
                //available: !updatedAvailability[index].available,
            //};
        //return updatedAvailability;
        //}
        //return state;
      default:
        return state;
    }
  };



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

    // This variable holds the initial value the available time slots
    const availableTimes = [
        { time: "5:00 pm", available: true },
        { time: "5:30 pm", available: true },
        { time: "6:00 pm", available: true },
        { time: "6:30 pm", available: true },
        { time: "7:00 pm", available: true },
        { time: "7:30 pm", available: true },
        { time: "8:30 pm", available: true },
      ];

    const [availability, dispatchAvailability] = useReducer(availabilityReducer, availableTimes);

    const contextValue = {
        bookingData: bookingDataState, // Current booking data state
        dispatchBooking, // Function to update booking data state
        availability: availabilityState, // Current availability state
        dispatchAvailability,// Function to update availability state

    };
    return (
        <BookingContext.Provider value={contextValue}>
            {children}
        </BookingContext.Provider>
    );
};