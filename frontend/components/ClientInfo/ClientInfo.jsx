import { StyledClientInfo } from "./ClientInfo.style";
import { StyledClientCard } from "../ClientCard/ClientCard.styles";
import React, { useState } from 'react';

export default function ClientInfo(props){
        // Dummy Data
        const clients = [
        {
            id: 1,
            firstName: 'Damian',
            lastName: 'Padilla',
            phone: '469-686-5634',
            email: 'damipad4@gmail.com',
            tag: 'Lead'

        },
        {
            id: 2,
            firstName: 'Juan',
            lastName: 'Ruiz',
            phone: '469-555-4450',
            email: 'juanruiz@gmail.com',
            tag: 'Client'
        },
        {
            id: 3,
            firstName: 'Bob',
            lastName: 'Vance',
            phone: '469-551-1150',
            email: 'Vance@refrigeration.com',
            tag: 'Client'
        },
        {
            id: 4,
            firstName: 'Ana',
            lastName: 'Urquia',
            phone: '469-844-4990',
            email: 'anacurquia@gmail.com',
            tag: 'Other'
        }
]

// State for Client Info
const [name, setName] = useState("Client Name")
const [email, setEmail] = useState("Client Email")
const [phone, setPhone] = useState("444-444-4444")
const [initial, setInitial] = useState("NA")
const [tag, setTag] = useState("Tag")

// Client Card Component
function Client(props) {
    const handleClick = () => {
    console.log('Rendered component clicked!');

    setName(props.firstName)
    setPhone(props.phone)
    setEmail(props.email)
    setInitial((props.firstName[0]) + (props.lastName[0]))
    setTag(props.tag)
  };
  return (
    <StyledClientCard className="hello" onClick={handleClick}>
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

    return(
        <>
        {/* Client Cards */}
        <section className='client-card-container' >
                <Client 
                    firstName={clients[0].firstName}
                    lastName={clients[0].lastName} 
                    initial={(clients[0].firstName[0]) + (clients[0].lastName[0])}
                    phone={clients[0].phone} 
                    email={clients[0].email}
                    tag={clients[0].tag} 
                />
                <Client 
                    firstName={clients[1].firstName}
                    lastName={clients[1].lastName} 
                    initial={(clients[1].firstName[0]) + (clients[1].lastName[0])}
                    phone={clients[1].phone} 
                    email={clients[1].email}
                    tag={clients[1].tag} 
                />
                <Client 
                    firstName={clients[2].firstName}
                    lastName={clients[2].lastName} 
                    initial={(clients[2].firstName[0]) + (clients[2].lastName[0])}
                    phone={clients[2].phone} 
                    email={clients[2].email}
                    tag={clients[2].tag} 
                />
                <Client 
                    firstName={clients[3].firstName}
                    lastName={clients[3].lastName} 
                    initial={(clients[3].firstName[0]) + (clients[3].lastName[0])}
                    phone={clients[3].phone} 
                    email={clients[3].email}
                    tag={clients[3].tag} 
                />
            </section>

            {/* Client Info Container */}
            <StyledClientInfo >
                
                <section className="tagContainer" >
                    <span>{tag}</span>
                    {/* <span>Lead</span>
                    <span>Client</span>
                    <span>Other</span> */}
                </section>
                
                <section className="infoContainer">
                    <span className="clientPhoto">{initial}</span>
                    <span>{name}</span>
                    <span>{phone}</span>
                    <span>{email}</span>
                </section>

                <section className="actionContainer">
                    {/* Client Action Container */}
                </section>
                <section className="activityContainer">
                    <span>Client Activity</span>
                    {/* Task Component */}
                </section>
                
            </StyledClientInfo>


         </>

    )
}