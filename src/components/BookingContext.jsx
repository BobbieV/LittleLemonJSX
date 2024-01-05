import {createContext, useContext, useState } from 'react';

export const BookingData = {
    resName: '',
    date: '',
    time: '',
    numGuests: '',
    occasion: '',
}


export const BookingContext = createContext(BookingData);

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
    const [bookingData, setBookingData]= useState({
        resName: e.target.value,
        date: "",
        time: "",
        numGuests: "",
        occasion: "",
    });

    const contextValue = {
        bookingData,
        setBookingData
    };
    return (
        <BookingContext.Provider value={contextValue}>
            {children}
        </BookingContext.Provider>
    );
};