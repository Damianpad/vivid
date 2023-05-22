import { StyledQuickAction } from "./QuickAction.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserPlus, faFileInvoice, faFolderPlus, faCalendarPlus } from "@fortawesome/free-solid-svg-icons";

const QuickAction = () => {

    return(
        <StyledQuickAction>
            <div className="quickActionContainer">
                <h2>Quick Action</h2>
                    <ul className="actionItems">
                        <div className="itemContainer">
                            <FontAwesomeIcon icon={faUserPlus} className="actionIcon"/>
                            <li> Create Client </li>
                        </div>

                        <div className="itemContainer">
                            <FontAwesomeIcon icon={faFileInvoice} className="actionIcon" />
                            <li> Create Invoice </li> 
                        </div>
                        
                        <div className="itemContainer">
                            <FontAwesomeIcon icon={faFolderPlus} className="actionIcon"/>
                            <li> New Project </li>
                        </div>
                        
                        <div className="itemContainer">
                            <FontAwesomeIcon icon={faCalendarPlus} className="actionIcon" />
                            <li> Book Appointment </li>
                        </div>
                    </ul>
            </div>
        </StyledQuickAction>
    )
}

export default QuickAction;