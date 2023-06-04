import { StyledCalendar } from "./calendar.style"
import EventCalendar from "../../../components/Calendar/Calendar"
import SearchBar from "../../../components/SearchBar/SearchBar"

export default function Calendar() {

    return(
        <StyledCalendar>
            <section className="headerContainer">
                <h1 className="calendarTitle">Calendar</h1>
                
                <section className='subContainer'>
                    <h2 className='calendarSubtitle'>Manage Calendar Here</h2>
                    <SearchBar />
                </section>
                <hr class="customLine"/>
            </section>

            <section className="calendarContainer">
                <EventCalendar />
            </section>
            
        </StyledCalendar>

    )
}