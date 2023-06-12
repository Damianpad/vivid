import { StyledClient } from './client.style'
import ClientCard from '../../../components/ClientCard/ClientCard'
import SearchBar from '../../../components/SearchBar/SearchBar'
import FilterSelector from '../../../components/FilterSelector/FilterSelector'
import ClientInfo from '../../../components/ClientInfo/ClientInfo'
import NewClientModal from '../../../components/NewClientModal/NewClientModal'

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
            <section className='client-card-container'>
                <ClientCard 
                    firstName={clients[0].firstName} 
                    lastName={clients[0].lastName} 
                    initial={(clients[0].firstName[0]) + (clients[0].lastName[0])}
                    phone={clients[0].phone} 
                    email={clients[0].email}
                    tag={clients[0].tag} />

                <ClientCard 
                    firstName={clients[1].firstName} 
                    lastName={clients[1].lastName} 
                    initial={(clients[1].firstName[0]) + (clients[1].lastName[0])}
                    phone={clients[1].phone} 
                    email={clients[1].email}
                    tag={clients[1].tag} />
                
                <ClientCard 
                    firstName={clients[2].firstName} 
                    lastName={clients[2].lastName} 
                    initial={(clients[2].firstName[0]) + (clients[2].lastName[0])}
                    phone={clients[2].phone} 
                    email={clients[2].email}
                    tag={clients[2].tag} />

                <ClientCard 
                    firstName={clients[3].firstName} 
                    lastName={clients[3].lastName} 
                    initial={(clients[3].firstName[0]) + (clients[3].lastName[0])}
                    phone={clients[3].phone} 
                    email={clients[3].email}
                    tag={clients[3].tag} />
   
            </section>
            <section className='clientInfoContainer'>
                <ClientInfo />
            </section>

        </section>


            
        </StyledClient>

    )
}