import { StyledClientList } from "./ClientList.styles"
import ClientCard from "../ClientCard/ClientCard"

const ClientList = () => {
    return(
        <StyledClientList>
            <div className="clientContainer">
                <h2>Client List</h2>
                <div className="clientCardContainer">
                    <ul className="clientList">
                        <ClientCard />
                        <ClientCard />
                        <ClientCard />
                        <ClientCard />
                    </ul>
                </div>
            </div>
        </StyledClientList>
    )
}

export default ClientList