import { StyledCalendar } from "./calendar.style"
import EventCalendar from "../../../components/Calendar/Calendar"

export default function Calendar() {

    return(
        <StyledCalendar>
            <section className="headerContainer">
                <h1 className="calendarTitle">Calendar</h1>
                <h2 className='calendarSubtitle'>Manage Calendar Here</h2>
                <hr class="customLine"/>
            </section>

            <section className="calendarContainer">
                <EventCalendar />
            </section>
            
        </StyledCalendar>

    )
}