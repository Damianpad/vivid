import { StyledClientCard } from "./ClientCard.styles"

const ClientCard = () => {
    return(
        <StyledClientCard>
                <div className="clientContainer">

                    <section className="clientPhoto">
                        <span>BV</span>
                    </section>
                    
                    <div className="clientInfo">
                    <span>Name: Bob Vance</span>
                    <span>Phone: 444-444-4444</span>
                    <span>Email: bobvance@vance.com</span>
                    </div>


                    <div className="clientTag">
                        
                        <button className="tag">Lead</button>
                    </div>
                </div>
        </StyledClientCard>
    )
}

export default ClientCard