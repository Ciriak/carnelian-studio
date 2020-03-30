import { calendarReducer } from './calendar/CalendarReducer'
import { combineReducers } from 'redux'
export const rootReducer = combineReducers({
    calendar: calendarReducer,
})

export type RootState = ReturnType<typeof rootReducer>
