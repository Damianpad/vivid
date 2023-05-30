import { StyledCalendar } from "./calendar.style"
import EventCalendar from "../../../components/Calendar/Calendar"

export default function Calendar() {

    return(
        <StyledCalendar>
            <section className="headerContainer">
                <h1>Calendar</h1>
            </section>

            <section className="calendarContainer">
                <EventCalendar />
            </section>
            
        </StyledCalendar>

    )
}