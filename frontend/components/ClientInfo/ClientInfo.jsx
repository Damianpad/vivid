import React, { useState } from 'react';

import NewClientModal from '../NewClientModal/NewClientModal';
import { StyledClientInfo } from "./ClientInfo.style";
import { StyledClientCard } from "../ClientCard/ClientCard.styles";
import { StyledNewClientModal } from '../NewClientModal/NewClientModal.style';


export default function ClientInfo(props){

    function NewClient(){
        const [modal, setModal] = useState(false);
        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [phone, setPhone] = useState('');
        const [email, setEmail] = useState('');
        const [tag, setTag] = useState('');
        const [submitted, setSubmitted] = useState(false);
        
    
        const toggleModal = () => {
          setModal(!modal);
        };
      
        if(modal) {
          document.body.classList.add('active-modal')
        } else {
          document.body.classList.remove('active-modal')
        }
      
        function handleSubmit(event) {
          toggleModal();
          event.preventDefault();
          setSubmitted(true)
          alert(`Submitted ${firstName} ${lastName} ${phone} ${email}`)
        }
        return (
          <StyledNewClientModal>
            <button onClick={toggleModal} className="btn-modal">
              New Client +
            </button>
      
            {modal && (
              <div className="modal">
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-content">
                  <h2>Add a New Client</h2>
                  <form className="infoContainer" method="post" onSubmit={handleSubmit}>
                    <label name="nameInput">
                      <input className="input" 
                      placeholder="First Name" 
                      value={firstName} 
                      onChange={e => setFirstName(e.target.value)}/>
                    </label>
    
                    <label name="nameInput">
                      <input className="input" 
                      placeholder="Last Name" 
                      value={lastName} 
                      onChange={e => setLastName(e.target.value)}/>
                    </label>
    
                    <label name="nameInput">
                      <input className="input" 
                      placeholder="Phone" 
                      value={phone} 
                      onChange={e => setPhone(e.target.value)}/>
                    </label>
                    
                    <label name="nameInput">
                      <input className="input" placeholder="Email" value={email} 
                      onChange={e => setEmail(e.target.value)}/>
                    </label>
    
                    <label name="nameInput">
                      <input className="input" placeholder="Tag" value={tag} 
                      onChange={e => setTag(e.target.value)}/>
                    </label>
    
                    <button type="submit">Submit</button>
                    <button className="close-modal" onClick={toggleModal} type="button">
                    Cancel
                  </button>
                  </form>
    
                  {/* <section className="btnContainer">
                  <button className="close-modal" onClick={toggleModal}>
                    Done
                  </button>
                  <button className="close-modal" onClick={toggleModal} type="button">
                    Cancel
                  </button>
                  </section> */}
                
                </div>
                
              </div>
        )}
        {submitted && <Client 
        firstName={firstName}
        lastName={lastName}
        initial={firstName[0] + lastName[0]}
        phone={phone}
        email={email}
        tag = {tag}
        />}
          </StyledNewClientModal>
        );
      }


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
            firstName: 'Michael',
            lastName: 'Scott',
            phone: '444-555-4444',
            email: 'michaelscott@dundermifflin.com',
            tag: 'Client'
        },
        {
            id: 3,
            firstName: 'Bob',
            lastName: 'Vance',
            phone: '444-666-1150',
            email: 'Vance@refrigeration.com',
            tag: 'Client'
        },
        {
            id: 4,
            firstName: 'Dwight',
            lastName: 'Schrute',
            phone: '444-844-1110',
            email: 'Dschrute@dundermifflin.com',
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
    <StyledClientCard >
        <section className="clientContainer" onClick={handleClick}>

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
        <NewClient />
        
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