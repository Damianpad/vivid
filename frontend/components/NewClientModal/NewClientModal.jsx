import { StyledNewClientModal } from "./NewClientModal.style";
import React, { useState } from "react";


export default function NewClientModal(){
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
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
              <section className="infoContainer">
              <label name="nameInput">
                  <input className="input" placeholder="First Name"/>
                </label>

                <label name="nameInput">
                  <input className="input" placeholder="Last Name"/>
                </label>

                <label name="nameInput">
                  <input className="input" placeholder="Phone"/>
                </label>
                
                <label name="nameInput">
                  <input className="input" placeholder="Email"/>
                </label>
              </section>

              <section className="btnContainer">
              <button className="close-modal" onClick={toggleModal}>
                Done
              </button>
              <button className="close-modal" onClick={toggleModal}>
                Cancel
              </button>
              </section>

            </div>
          </div>
        )}
      </StyledNewClientModal>
    );
  }