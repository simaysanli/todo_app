import React, {Component} from "react"
import { Link } from 'react-router-dom'

class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
    }
    render() {
        return (
          
            <>
                <div className="container">
                    Welcome.You can manage your todos <Link to="/todos">here</Link>.
                </div>
                <div className="container">
                        Click here to get a customized welcome message.
                        You can manage your todos <Link to="/todos">here</Link>.
                        <button onClick={this.retrieveWelcomeMessage} className="btn btn-success"> Get Welcome Message </button>
                </div>
            </>
        )
    }

    retrieveWelcomeMessage() {
        console.log('retrieve clicked');
    }

}

export default WelcomeComponent