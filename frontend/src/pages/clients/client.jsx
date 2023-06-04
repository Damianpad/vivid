import '../../App.css'
import { StyledClient } from './client.style'
import ClientCard from '../../../components/ClientCard/ClientCard'

export default function Client() {

    return(
        <StyledClient>
            <section className='clientHeader'>
                    <h1 className='clientTitle'>Clients</h1>
                    <h2 className='clientSubtitle'>Manage Clients Here</h2>
                    <hr class="customLine"/>
            </section>

            <section className='action-container'>
                <section className = 'search-container'>
                    <input type="text" />
                </section>
                <section className='new-client-container'>
                    <button>New Client + </button>
                </section>
            </section>

            <section className='client-card-container'>
                <ClientCard />
                <ClientCard />
                <ClientCard />
                <ClientCard />
            </section>

            
        </StyledClient>

    )
}