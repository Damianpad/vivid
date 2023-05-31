import { StyledTeam } from "./team.style"
import ProjectCard from "../../../components/ProjectCard/ProjectCard"

export default function Team() {

    return(
        <StyledTeam>
            <section className="headerContainer">
                <h1>Team</h1>
                <input type="text" placeholder="search" />
            </section>

            <section className="projectComponentContainer">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </section>

        </StyledTeam>

    )
}