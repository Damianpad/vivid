import { StyledEventCalendar } from "./Calendar.styles"
import { Calendar, dateFnsLocalizer } from "react-big-calendar"
import format from "date-fns/format"
import parse from "date-fns/parse"
import startOfWeek from "date-fns/startOfWeek"
import getDay from "date-fns/getDay"
import enUS from 'date-fns/locale/en-US'
import "react-big-calendar/lib/css/react-big-calendar.css"
import React, { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"


const locales = {
    "en-US": enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const events = [
    {
        title: "Client Meeting",
        allDay: true,
        start: new Date(2023,3,29),
        end: new Date(2023,3,29)
    },
    {
        title: "Client Meeting",
        allDay: true,
        start: new Date(2023,3,30),
        end: new Date(2023,3,30)
    }
]

const EventCalendar = () => {
    const [newEvent, setNewEvent] = useState({
        title: '',
        start: '',
        end: ''
    })
    const [allEvents, setAllEvents] = useState(events)

    const handleAddEvent = () => {
        setAllEvents([...allEvents, newEvent])
    }

    return (
        <StyledEventCalendar>
        <div className="calendarContainer">
        <h2 className="calendarTitle">Calendar</h2>
        <div className="addEventContainer">
        <h3>Add New Event</h3>
        <div className="eventInputContainer">
            <input type="text" placeholder="Add Title"
            value={newEvent.title}
            onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
            />
            <DatePicker placeholderText="Start Date"
            selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})}
            />
            <DatePicker placeholderText="End Date"
            selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent, end})}
            />
            </div>
            <button onClick={handleAddEvent}>Add Event</button>

        </div>

        <Calendar 
        className="eventCalendar"
        localizer={localizer} 
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }} />
        </div>
        </StyledEventCalendar>
    )
}

export default EventCalendar;