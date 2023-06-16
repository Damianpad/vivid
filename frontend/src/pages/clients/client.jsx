import { StyledClient } from './client.style'
import ClientCard from '../../../components/ClientCard/ClientCard'
import SearchBar from '../../../components/SearchBar/SearchBar'
import FilterSelector from '../../../components/FilterSelector/FilterSelector'
import ClientInfo from '../../../components/ClientInfo/ClientInfo'
import NewClientModal from '../../../components/NewClientModal/NewClientModal'


import React, { useState } from 'react';

export default function Client() {
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

const [name, setName] = useState("Client Name")
const [email, setEmail] = useState("Client Email")
const [phone, setPhone] = useState("444-444-4444")
const [initial, setInitial] = useState("NA")
const [tag, setTag] = useState("Tag")


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
                    <NewClientModal />
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