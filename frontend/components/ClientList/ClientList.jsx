import { StyledClientList } from "./ClientList.styles"
import ClientCard from "../ClientCard/ClientCard"

const ClientList = () => {
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
        }
    ]
    return(
        <StyledClientList>
            <div className="clientContainer">
                <h2>Client List</h2>
                <div className="clientCardContainer">
                    <ul className="clientList">
                        <ClientCard 
                                            firstName={clients[0].firstName}
                                            lastName={clients[0].lastName} 
                                            initial={(clients[0].firstName[0]) + (clients[0].lastName[0])}
                                            phone={clients[0].phone} 
                                            email={clients[0].email}
                                            tag={clients[0].tag} />
                        <ClientCard 
                                            firstName={clients[0].firstName}
                                            lastName={clients[0].lastName} 
                                            initial={(clients[0].firstName[0]) + (clients[0].lastName[0])}
                                            phone={clients[0].phone} 
                                            email={clients[0].email}
                                            tag={clients[0].tag} />
                    </ul>
                </div>
            </div>
        </StyledClientList>
    )
}

export default ClientList