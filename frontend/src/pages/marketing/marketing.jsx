import { StyledMarketing } from "./marketing.style"
import CampaignCard from "../../../components/CampaignCard/CampaignCard"
import SearchBar from "../../../components/SearchBar/SearchBar"

export default function Marketing() {

    return(
        <StyledMarketing>
            <section className="headerContainer">
                <h1 className="marketingTitle">Marketing</h1>
                
                <section className='subContainer'>
                    <h2 className='marketingSubtitle'>Manage Marketing Here</h2>
                    <SearchBar />
                </section>
                <hr class="customLine"/>
            </section>

            <section className="campaignBody">
                <secton className="campaignDataContainer">
                    <input type="text" placeholder='Search Projects' className='searchCampaign'/>
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