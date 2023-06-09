import { useState } from "react";
import { StyledProjectModal } from "./NewProjectModal.style";

export default function NewProjectModal(){
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
      <StyledProjectModal>
        <button onClick={toggleModal} className="btn-modal">
          New Project
        </button>
  
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <h2>Start a New Project</h2>

              
              <section className="infoContainer">
              <h3>Project Info</h3>
              <section className="projectInfoContainer">
                    <label name="nameInput">
                    <input className="input" placeholder="Project Name"/>
                    </label>
                    <label name="nameInput">
                    <input className="input" placeholder="Date"/>
                    </label>
                    <label name="nameInput">
                    <input className="input" placeholder="Location Name"/>
                    </label>
                    <label name="nameInput">
                    <input className="input" placeholder="Address"/>
                    </label>
                    <hr class="containerLine"/>
              </section>


                <h3>Services</h3>
                <label name="nameInput">
                  <input className="input" placeholder="Add Service"/>
                </label>
                <hr class="containerLine"/>


            <h3>Client Info</h3>
            <section className="clientInfoContainer">
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
            <hr class="containerLine"/>

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
              </StyledProjectModal>
    );
  }
