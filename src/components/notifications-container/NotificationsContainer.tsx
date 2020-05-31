import React, { useState } from "react";
import { Toast } from "react-bootstrap";

import "./notifications-container.scss"
import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { INotificationsState } from "../../store/notifications/notifications.reducer";
import { closeNotification } from "../../store/notifications/notifications.action";

const NotificationsContainer = () => {

    const selectNotifications = (state: RootState) => state.notifications;
    const notificationsManager: INotificationsState = useSelector(selectNotifications);
    const dispatch = useDispatch();
    return (

        <div className="notifications-container">
            {notificationsManager.notifications.map((notification) => {
                return (
                    <Toast key={notification.id} onClose={() => { dispatch(closeNotification(notification.id)) }} autohide delay={3000} animation={true} >
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                            <strong className="mr-auto">{notification.title}</strong>
                            <small>just now</small>
                        </Toast.Header>
                        {/* Conditionally show body */}
                        {notification.body && (
                            <Toast.Body>{notification.body}</Toast.Body>
                        )}

                    </Toast>
                )
            })}


        </div>


    )
}

export default NotificationsContainer;