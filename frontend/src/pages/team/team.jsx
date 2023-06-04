import { StyledTeam } from "./team.style"
import ProjectCard from "../../../components/ProjectCard/ProjectCard"
import SearchBar from "../../../components/SearchBar/SearchBar"

export default function Team() {

    return(
        <StyledTeam>
            <section className="headerContainer">
                <h1 className="teamTitle">Team</h1>
                
                <section className='subContainer'>
                    <h2 className='teamSubtitle'>Manage Team Here</h2>
                    <SearchBar />
                </section>
                <hr class="customLine"/> 
            </section>

            <section className="projectComponentContainer">
            <input type="text" placeholder="search" />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </section>

        </StyledTeam>

    )
}