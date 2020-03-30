import React from 'react'
import { Card, Dropdown } from 'react-bootstrap'
import './overview.scss'
import { RootState } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { setCalendarUser, setDate } from '../../store/calendar/CalendarActions'
import IUser from '../../interfaces/user.interface'
import ReactDatePicker from 'react-datepicker'
function Overview() {
    const selectUsers = (state: RootState) => state.calendar.usersList
    const selectCurrentCalendarUser = (state: RootState) =>
        state.calendar.currentUser
    const selectDate = (state: RootState) => state.calendar.date
    const date = useSelector(selectDate)
    const usersList = useSelector(selectUsers)
    const calendarUser = useSelector(selectCurrentCalendarUser)
    const dispatch = useDispatch()
    const usersComponents = []

    const handleNavigate = (newDate: Date) => {
        dispatch(setDate(newDate))
    }

    for (const user of usersList) {
        usersComponents.push(
            <Dropdown.Item
                key={`user-${user.name}`}
                href="#"
                onClick={() => {
                    handleUserChange(user)
                }}
            >
                <img
                    src={user.avatarUrl}
                    className="person-avatar"
                    alt={user.name}
                />{' '}
                {user.name}
            </Dropdown.Item>
        )
    }

    function handleUserChange(user: IUser) {
        dispatch(setCalendarUser(user))
    }

    function getCurrentUserLabel() {
        let label = calendarUser.name
        if (calendarUser.name === 'John Doe') {
            /* <= lol yeah */ label += ' (you)'
        }

        return label
    }

    return (
        <div className="overview">
            <Card>
                <Card.Header>
                    <Dropdown>
                        <strong>Viewing the calendar of </strong>
                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                            <img
                                src={calendarUser.avatarUrl}
                                className="person-avatar"
                                alt={calendarUser.name}
                            />{' '}
                            {getCurrentUserLabel()}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>{usersComponents}</Dropdown.Menu>
                    </Dropdown>
                </Card.Header>
                <Card.Body>
                    <ReactDatePicker
                        selected={date}
                        onChange={(date: Date) => handleNavigate(date)}
                        inline
                    />
                </Card.Body>
            </Card>
        </div>
    )
}

export default Overview
