import { ProjectCardStyle } from "./ProjectCard.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"

export default function ProjectCard(){

    return(
        <ProjectCardStyle>
            <section className="projectContainer">
                <section className="userContainer">
                    <FontAwesomeIcon icon={faUser} />
                </section>

                <section className="infoContainer">
                    <h1>Project Name</h1>
                    <button className="tag">Wedding</button>
                    <button className="tag">Engagement</button>
                </section>
            </section>

        </ProjectCardStyle>
    )
}