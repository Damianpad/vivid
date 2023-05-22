import '../../App.css'
import { StyledClient } from './client.style'

export default function Client() {

    return(
        <StyledClient>
            <section className='client-header'>
                <section className='client-title'>
                    <h1>Clients</h1>
                </section>
            </section>

            <section className='action-container'>
                <section className = 'search-container'>
                    <input type="text" />
                </section>
                <section className='new-client-container'>
                    <button>New Client + </button>
                </section>
            </section>

            
        </StyledClient>

    )
}