import { StyledClient } from './client.style'
import { StyledNewClientModal } from '../../../components/NewClientModal/NewClientModal.style'
import ClientCard from '../../../components/ClientCard/ClientCard'
import SearchBar from '../../../components/SearchBar/SearchBar'
import FilterSelector from '../../../components/FilterSelector/FilterSelector'
import ClientInfo from '../../../components/ClientInfo/ClientInfo'
import NewClientModal from '../../../components/NewClientModal/NewClientModal'


import React, { useState } from 'react';


export default function Client() {

const [name, setName] = useState("Client Name")
const [email, setEmail] = useState("Client Email")
const [phone, setPhone] = useState("444-444-4444")
const [initial, setInitial] = useState("NA")
const [tag, setTag] = useState("Tag")
const [submitted, setSubmitted] = useState(false);


const handleComponentSelection = () => {
    console.log('Rendered component clicked!');
    setName((clients[0].firstName + " " + clients[0].lastName))
    setPhone(clients[0].phone)
    setEmail(clients[0].email)
    setInitial((clients[0].firstName[0]) + (clients[0].lastName[0]))
    setTag(clients[0].tag)
  };


    return(
        <StyledClient>
            <section className='clientHeader'>
                    <h1 className='clientTitle'>Clients</h1> 
                    
                <section className='subContainer'>
                    <h2 className='clientSubtitle'>Manage Clients Here</h2>
                    <SearchBar />
                </section>
                    <hr className="customLine"/>
            </section>

            <section className='action-container'>

                <section className='new-client-container'>
                    <FilterSelector />
                </section>
            </section>

        <section className='clientBody'>

                <section className='clientInfoContainer'>
                    <ClientInfo 
                        clientTag={tag}
                        clientName={name}
                        clientPhone={phone}
                        clientEmail={email} 
                        initial={initial}                      
                    />
                </section>
            </section> 

        </StyledClient>

    )
}