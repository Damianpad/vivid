import { StyledClientCard } from "./ClientCard.styles"
import ClientInfo from "../ClientInfo/ClientInfo";
import React, { useState } from 'react';


const ClientCard = (props) => {

    return(
        <StyledClientCard className="hello">
                <section className="clientContainer" >

                    <section className="clientPhoto">
                        <span>{props.initial}</span>
                    </section>
                    
                    <div className="clientInfo">
                    <span>{props.firstName} {props.lastName}</span>
                    <span>{props.phone}</span>
                    <span>{props.email}</span>
                    </div>


                    <div className="clientTag">
                        <button className="tag">{props.tag}</button>
                    </div>
                </section>

        </StyledClientCard>
    )
}

export default ClientCard