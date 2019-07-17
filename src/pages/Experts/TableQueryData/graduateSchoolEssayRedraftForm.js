import { React, Component } from "react"
import { Query } from "react-apollo";
import loader from "../../../images/loader.gif"

import LeaveAMessageForm from "../../components/Forms/leaveAMessageForm"
import ComplainForm from "../../components/Forms/complainForm"
import { GET_ALL_GRADUATE_SCHOOL_ESSAY_REDRAFT_FORMS } from "../../graphql/queries"

class Message extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            state: ""
        }
    }
render() {
    return(  
        <div>
        <Query 
        query={GET_ALL_GRADUATE_SCHOOL_ESSAY_REDRAFT_FORMS}
        >
            {({ loading, error, data }) => {
             if (loading) return (
                <div className = "loader">
                    <div className="loader_main_content">
                        <img  src={loader} alt="gradsuccess" />
                        <h1>preparing...</h1>
                    </div>
                </div>
                )
              if (error) return <div>failed to load data</div>
              return (
                <div className="form_preview">
                    <div className="form_preview_inner">

                        <h3 className = "form-header" >Graduate School Essay Redraft List </h3>
                        <div className="form_preview_col_1">
                            {data.getAllGraduateSchoolEssayRedraftForm === null ?
                                    <div className = "client_expert_listing_main">
                                        <h4>No Item Available</h4>
                                    </div>:
                                    data.getAllGraduateSchoolEssayRedraftForm.map((Item) =>
                                        <div className = "client_expert_listing_main">
                                            <div>
                                                <h4>{Item.name}</h4>
                                                <p>{Item.summary_of_interest}</p>
                                                <span>{Item.created_at.split(" ")[0]}</span>
                                            </div>
                                            <div className = "client_expert_listing_btn_wrapper">
                                                <button>view</button>
                                                <button>Assign Expert</button>
                                            </div>
                                        </div>
                                    )}
                            <div className = "spacing"></div>
                        </div>
                        
                    </div>
                </div>
              );
            }}
        </Query>
      </div>
    )
}
}
export default Message