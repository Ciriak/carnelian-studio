import React from 'react'
import RCalendar from './components/calendar/Calendar'
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from './store';
// import { setDate } from './store/calendar/CalendarActions';
import Header from './components/header/Header'
import Overview from './components/overview/Overview'
import './app.scss'
import CalendarEvent from './components/calendar-event/CalendarEvent'

function App() {
    // const date = useSelector<RootState>(state => state.calendar.date);

    return (
        <div className="app">
            <CalendarEvent />
            <Header />
            <div className="main-frame">
                <Overview />
                <RCalendar />
            </div>
        </div>
    )
}

export default App
