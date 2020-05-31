export interface INotification {
    id: string;
    title: string;
    type: "info" | "warning" | "error" | "success",
    body?: string;
}

/**
 * The the current config
 */
export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const CLOSE_NOTIFICATION = 'CLOSE_NOTIFICATION';

interface AddNotificationsAction {
    type: typeof ADD_NOTIFICATION
    payload: {
        notification: INotification
    }
}

interface CloseNotificationsAction {
    type: typeof CLOSE_NOTIFICATION
    payload: {
        id: string
    }
}
export type notificationsActionsTypes = AddNotificationsAction | CloseNotificationsAction;