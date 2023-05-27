import { StyledProjects } from './projects.style'

export default function Projects() {

    return(
        <StyledProjects>
            <section className='headerContainer'>
            <h1 className='headerTitle'>Projects</h1>
                <section className='titleContainer'>
                    <input type="text" placeholder='Search Projects' className='search'/>
                    <button>New +</button>
                </section>

                
            </section>

            <section className='projectListContainer'>
                <h2>Upcoming Projects</h2>
                {/* Insert Project Components */}
            </section>
            
        </StyledProjects>

    )
}