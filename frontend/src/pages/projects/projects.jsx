import { StyledProjects } from './projects.style'

export default function Projects() {

    return(
        <StyledProjects>
            <section className='headerContainer'>
                <h1 className='headerTitle'>Projects</h1>
                <h2 className='projectSubtitle'>Manage Projects Here</h2>
                <hr class="customLine"/>
            </section>
                <section className='titleContainer'>
                    <input type="text" placeholder='Search Projects' className='search'/>
                    <button>New +</button>
                </section>  


            <section className='projectListContainer'>
                <h2>Upcoming Projects</h2>
                {/* Insert Project Components */}
            </section>
            
        </StyledProjects>

    )
}