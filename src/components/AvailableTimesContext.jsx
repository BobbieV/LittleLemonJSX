import { createContext, useContext, useReducer } from 'react';
import { availableTimes } from './components/AvailableTimes.jsx';



export const AvailableTimesContext = createContext(availableTimes)

// This is the reducer function that handles actions related to availability
const availabilityReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_AVAILABILITY':
        const { time } = action.payload;
        console.log('availabilityReducer ', time )
       return state.map(slot =>
        slot.time === time ? { ...slot, available : !slot.available } : slot
        );
        default:
            return state;
        }
      };

      export const AvailableTimesContext = createContext(initialAvailableTimes);

      export const useAvailableTimesContext = () => {
        const context = useContext(AvailableTimesContext);

        if (!context) {
            throw new Error('useAvailableTimesContext must be used within an AvailableTimesProvider');
        }
        return context;
    }
      export const AvailableTimesProvider = ({ children }) => {
        const [availableTimesState, dispatchAvailability] = useReducer(availabilityReducer, initialAvailableTimes);

        const contextValue = {
            availableTimes: availableTimesState, // Current availability state
            dispatchAvailability,// Function to update availability state
        };

        return (
            <AvailableTimesContext.Provider value={contextValue}>
                {children}
            </AvailableTimesContext.Provider>
        );
    };