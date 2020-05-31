import { INotification, notificationsActionsTypes, ADD_NOTIFICATION, CLOSE_NOTIFICATION } from "./notifications.types"


/**
 * Add a notification
 * @param notification 
 */
export function addNotification(notification: INotification): notificationsActionsTypes {
    return {
        type: ADD_NOTIFICATION,
        payload: {
            notification
        }
    }
}

/**
 * Close a notification and remove it from the list
 * @param id notification id 
 */
export function closeNotification(id: string): notificationsActionsTypes {
    return {
        type: CLOSE_NOTIFICATION,
        payload: {
            id
        }
    }
}