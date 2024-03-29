import {createContext, useContext, useState, useReducer } from 'react';

export const BookingData = {
    resName: '',
    date: '',
    time: '',
    numGuests: '',
    occasion: '',
};

export const BookingContext = createContext(BookingData);

const bookingReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_BOOKING_DATA':
            return {...state, ...action.payload};
        default :
            return state;
    }
}

const availabilityReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_AVAILABILITY':
        const { selectedTime } = action.payload;
        const index = state.findIndex(initialAvailability => initialAvailability.time === selectedTime);

        if (index !== -1) {
            const updatedAvailability = [...state];
            updatedAvailability[index] = {
                ...updatedAvailability[index],
                available: !updatedAvailability[index].available,
            };
        return updatedAvailability;
        }
        return state;
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


export const BookingProvider = ({
    children
}) => {
    const [bookingDataState, dispatchBooking]= useReducer(bookingReducer, BookingData);

    const initialAvailability = [
        { time: "5:00 pm", available: false },
        { time: "5:30 pm", available: true },
        { time: "6:00 pm", available: true },
        { time: "6:30 pm", available: true },
        { time: "7:00 pm", available: true },
        { time: "7:30 pm", available: true },
        { time: "8:30 pm", available: true },
      ];


const available = initialAvailability.available;
const availTime = initialAvailability.time;

      const [availability, dispatchAvailability] = useReducer(availabilityReducer, initialAvailability);

    const contextValue = {
        bookingData: bookingDataState,
        dispatchBooking,
        availability,
        initialAvailability,
        dispatchAvailability,
        available,
        availTime,
    };
    return (
        <BookingContext.Provider value={contextValue}>
            {children}
        </BookingContext.Provider>
    );
};