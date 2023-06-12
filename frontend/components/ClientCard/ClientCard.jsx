import { StyledClientCard } from "./ClientCard.styles"

const ClientCard = (props) => {
    return(
        <StyledClientCard>
                <div className="clientContainer">

                    <section className="clientPhoto">
                        <span>{props.initial}</span>
                    </section>
                    
                    <div className="clientInfo">
                    <span>{props.firstName} {props.lastName}</span>
                    <span>{props.phone}</span>
                    <span>{props.email}</span>
                    </div>


                    <div className="clientTag">
                        
                        <button className="tag">{props.tag}</button>
                    </div>
                </div>
        </StyledClientCard>
    )
}

export default ClientCard