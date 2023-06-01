import { StyledMarketing } from "./marketing.style"
import CampaignCard from "../../../components/CampaignCard/CampaignCard"

export default function Marketing() {

    return(
        <StyledMarketing>
            <section className="headerContainer">
                <h1>Marketing</h1>
            </section>

            <section className="campaignBody">
                <secton className="campaignDataContainer">
                    <input type="text" placeholder='Search Projects' className='search'/>
                    <button>New +</button>
                </secton>

                <section className="campaignContainer">
                    <h2>Campaigns</h2>
                    <CampaignCard />
                    <CampaignCard />
                    <CampaignCard />
                    <CampaignCard />
                </section>
            </section>

        </StyledMarketing>

    )
}