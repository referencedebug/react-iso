import React, {Component} from 'react';


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            msg: 'hello world'
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({ msg: 'xxxx'})
        },2000)
    }
    render(){
        const { msg } = this.state
        return(
            <div>
                <h1>{msg}</h1>
            </div>
        )
    }
}
export default App;
