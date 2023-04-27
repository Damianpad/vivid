import { StyledClientCard } from "./ClientCard.styles"

const ClientCard = () => {
    return(
        <StyledClientCard>
                <div className="clientContainer">
                    
                    <div className="clientInfo">
                    <span>Client Name: Damian </span>
                    <span>Client Phone: 444-444-4444</span>
                    <span>Client Email: Email@email.com</span>
                    </div>


                    <div className="clientTag">
                        <h4>Tags:</h4>
                        <span className="tag">Wedding</span>
                        <span className="tag">Engagement</span>
                    </div>
                </div>
        </StyledClientCard>
    )
}

export default ClientCard