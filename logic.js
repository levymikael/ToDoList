import { throws } from "assert";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoItem: [],
            done : []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        this.state.toDoItem.push(this.name.value)
        this.setState({
            toDoItem: this.state.toDoItem
        })
        this.name.value = ""
    }
    render() {
        return (
            <div>
                <h4>To Do list</h4>
                <div>
                    <input ref={input => this.name = input} placeholder="You gotta do what you gotta do"></input>
                    <button id="inputBtn" onClick={this.handleSubmit} >ADD</button>

                </div>
                <div class="toDoList">
                    <List name="todo" design="todo-object" items={this.state.toDoItem}></List>
                    <List name="done" design="done-object" items={this.state.done}></List>
                </div>

            </div>

        )
    }
}

class List extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ol>
                <li>{this.props.name}</li>
                {
                    this.props.items.map((item) => <Item className={this.props.design} item={item}></Item>)
                }
            </ol>

        )
    }

}

class Item extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <li className={this.props.design}>{this.props.item}</li>
        )
    }
}


function render() {
    ReactDOM.render(
        <App />,
        document.getElementById("root")
    );
}

render();