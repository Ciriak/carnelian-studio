import IUser from '../../interfaces/user.interface'
import IEvent from '../../interfaces/event.interface'

/**
 * The the current view date
 */
export const SET_DATE = 'SET_DATE'
/**
 * Set the current calendar user
 */
export const SET_CALENDAR_USER = 'SET_CALENDAR_USER'
/**
 * Set the current calendar event that is beeing managed
 */
export const SET_CALENDAR_EVENT = 'SET_CALENDAR_EVENT'
/**
 * Close the event creation modal
 */
export const CLOSE_EVENT_CREATOR = 'CLOSE_EVENT_CREATOR'
/**
 * Update an event by it's id
 */
export const UPDATE_EVENT = 'UPDATE_EVENT'

/**
 * Update an event by it's id
 */
export const DELETE_EVENT = 'DELETE_EVENT'

export interface ICalendarState {
    date: Date
    currentUser: IUser
    usersList: IUser[]
    currentEvent: IEvent
    showNewEventCreator: boolean
}

interface SetDateAction {
    type: typeof SET_DATE
    payload: {
        date: Date
    }
}

interface SetCalendarEventAction {
    type: typeof SET_CALENDAR_EVENT
    payload: {
        event: IEvent
    }
}

interface SetCalendarUserAction {
    type: typeof SET_CALENDAR_USER
    payload: {
        user: IUser
    }
}

interface UpdateEventAction {
    type: typeof UPDATE_EVENT
    payload: {
        event: IEvent
    }
}

interface DeleteEvent {
    type: typeof DELETE_EVENT
    payload: {
        event: IEvent
    }
}

interface CloseEventCreator {
    type: typeof CLOSE_EVENT_CREATOR
}

export type calendarActionTypes =
    | SetDateAction
    | SetCalendarUserAction
    | SetCalendarEventAction
    | CloseEventCreator
    | UpdateEventAction
    | DeleteEvent
