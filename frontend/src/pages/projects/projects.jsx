import { StyledProjects } from './projects.style'
import SearchBar from '../../../components/SearchBar/SearchBar'

export default function Projects() {

    return(
        <StyledProjects>
            <section className='headerContainer'>
                <h1 className='headerTitle'>Projects</h1>
                <section className='subContainer'>
                    <h2 className='projectSubtitle'>Manage Projects Here</h2>
                    <SearchBar />
                </section>
                <hr class="customLine"/>
            </section>
                <section className='titleContainer'>
                    <input type="text" placeholder='Search Projects' className='searchProject'/>
                    <button>New +</button>
                </section>  


            <section className='projectListContainer'>
                <h2>Upcoming Projects</h2>
                {/* Insert Project Components */}
            </section>
            
        </StyledProjects>

    )
}