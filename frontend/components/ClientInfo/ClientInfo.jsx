import { StyledClientInfo } from "./ClientInfo.style";


export default function ClientInfo(){
    return(
        <StyledClientInfo>
            <section className="tagContainer">
                <span>Lead</span>
                <span>Client</span>
                <span>Other</span>
            </section>

            
            <section className="infoContainer">
                <span className="clientPhoto">BV</span>
                <span>Client Name</span>
                <span>Client Email</span>
            </section>

            <section className="actionContainer">
                {/* Client Action Container */}
            </section>
            <section className="activityContainer">
                <span>Client Activity</span>
                {/* Task Component */}
            </section>

        </StyledClientInfo>
    )
}