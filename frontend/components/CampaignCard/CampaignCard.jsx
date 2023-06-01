import { StyledCampaignCard } from "./CampaignCard.styles";



const CampaignCard = () => {
    return(
        <StyledCampaignCard>
            <section className="titleContainer">
                <h1>Campaign</h1>
            </section>

            <section className="dataContainer">
                <span>Num Sent</span>
                <span>Num Opened</span>
            </section>
           
        </StyledCampaignCard>

    )
}

export default CampaignCard;