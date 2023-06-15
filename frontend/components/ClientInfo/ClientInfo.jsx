import { StyledClientInfo } from "./ClientInfo.style";
import React from 'react';


export default function ClientInfo(props){

    return(
        <StyledClientInfo >
            
            <section className="tagContainer" >
                <span>{props.clientTag}</span>
                {/* <span>Lead</span>
                <span>Client</span>
                <span>Other</span> */}
            </section>

            
            <section className="infoContainer">
                <span className="clientPhoto">{props.initial}</span>
                <span>{props.clientName}</span>
                <span>{props.clientPhone}</span>
                <span>{props.clientEmail}</span>
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