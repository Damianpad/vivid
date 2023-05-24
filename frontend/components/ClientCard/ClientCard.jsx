import { StyledClientCard } from "./ClientCard.styles"

const ClientCard = () => {
    return(
        <StyledClientCard>
                <div className="clientContainer">
                    
                    <div className="clientInfo">
                    <span>Name: Damian </span>
                    <span>Phone: 444-444-4444</span>
                    <span>Email: Email@email.com</span>
                    </div>


                    <div className="clientTag">
                        <h4>Tags:</h4>
                        <button className="tag">Wedding</button>
                        <button className="tag">Engagement</button>
                    </div>
                </div>
        </StyledClientCard>
    )
}

export default ClientCard