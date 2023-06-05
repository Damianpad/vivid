import '../../App.css'
import { StyledClient } from './client.style'
import ClientCard from '../../../components/ClientCard/ClientCard'
import SearchBar from '../../../components/SearchBar/SearchBar'
import FilterSelector from '../../../components/FilterSelector/FilterSelector'

export default function Client() {

    return(
        <StyledClient>
            <section className='clientHeader'>
                    <h1 className='clientTitle'>Clients</h1>  
                <section className='subContainer'>
                    <h2 className='clientSubtitle'>Manage Clients Here</h2>
                    <SearchBar />
                </section>
                    <hr class="customLine"/>
            </section>

            <section className='action-container'>

                <section className='new-client-container'>
                    <FilterSelector />
                    <button>New Client + </button>
                </section>
            </section>

        <section>
            <section className='client-card-container'>
                <ClientCard />
                <ClientCard />
                <ClientCard />
                <ClientCard />
            </section>
            <section className='clientInfoContainer'>

            </section>

        </section>


            
        </StyledClient>

    )
}