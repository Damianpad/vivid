import { StyledNewClientModal } from "./NewClientModal.style";
import React, { useState } from "react";

import ClientCard from "../ClientCard/ClientCard";


export default function NewClientModal(){
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
        {submitted && <ClientCard 
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