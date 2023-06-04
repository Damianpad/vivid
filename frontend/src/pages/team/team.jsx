import { StyledTeam } from "./team.style"
import ProjectCard from "../../../components/ProjectCard/ProjectCard"

export default function Team() {

    return(
        <StyledTeam>
            <section className="headerContainer">
                <h1 className="teamTitle">Team</h1>
                <h2 className='teamSubtitle'>Manage Team Here</h2>
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