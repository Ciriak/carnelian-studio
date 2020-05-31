
import {
    ADD_NOTIFICATION, INotification, CLOSE_NOTIFICATION
} from './notifications.types'

import { notificationsActionsTypes } from "./notifications.types";

import { findIndex } from "lodash";

export interface INotificationsState {
    notifications: INotification[];
}

const initialState: INotificationsState = {
    notifications: []
};

export default function configReducer(
    state = initialState,
    action: notificationsActionsTypes
) {
    switch (action.type) {
        case ADD_NOTIFICATION:
            state.notifications.push(action.payload.notification);

            return {
                ...state
            }

        case CLOSE_NOTIFICATION:

            // remove the notification from the notifications array based on it's id
            const notifIndex = findIndex(state.notifications, { id: action.payload.id });
            if (notifIndex > -1) {
                state.notifications.splice(notifIndex, 1);
            }

            return {
                ...state
            }

        default:
            return state
    }
}