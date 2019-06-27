class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoItem: [],
            done: []
        };
        this.fromToDoToDone = this.fromToDoToDone.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    fromToDoToDone(item) {
        console.log("yay")
        console.log(item)

        this.state.done.push(item)
        console.log(this.state.done)
        this.setState({
            done: this.state.done
        })
    }
    handleSubmit() {
        this.state.toDoItem.push(this.name.value)
        this.setState({
            toDoItem: this.state.toDoItem
        })
        this.name.value = ""
    }
    render() {
        return (
            <div>
                <div id="header">
                    <h4>To Do list</h4>
                </div>
                <div id="list">
                    <input id="inputField" ref={input => this.name = input} placeholder="You gotta do what you gotta do"></input>
                    <button id="inputBtn" onClick={this.handleSubmit}>ADD</button>
                </div>
                <div className="toDoList">
                    <h4>To Do</h4>
                    <List name="todo" design="todo-object" items={this.state.toDoItem} callingFromToDoToDone={this.fromToDoToDone}></List>
                </div>
                <div className="doneList">
                    <h4>Done</h4>
                    <List name="done" design="done-object" items={this.state.done}></List>
                </div>
            </div>
        )
    }
}

class List extends React.Component {
    constructor(props) {
        super(props);
        this.callingFromToDoToDone = this.callingFromToDoToDone.bind(this);
    }
    callingFromToDoToDone(item) {
        this.props.callingFromToDoToDone(this.props.item)
        console.log("yaytwo")
    }
    render() {
        return (
            <ol>
                <li>  {this.props.name}</li>
                {
                    this.props.items.map((item) => <Item className={this.props.design} item={item} callingFromToDoToDone={this.props.callingFromToDoToDone}></Item>)
                }
            </ol>
        )
    }
}

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.callingFromToDoToDone = this.callingFromToDoToDone.bind(this);
    }
    callingFromToDoToDone() {
        this.props.callingFromToDoToDone(this.props.item);
        console.log("yayone")

    }
    render() {
        return (
            <li onClick={this.callingFromToDoToDone} className={this.props.design}>{this.props.item}</li>
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