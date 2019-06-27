class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoItem: [],
            done: []
        };
        this.fromToDoToDone = this.fromToDoToDone.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    removeItem(str) {
        var index = 0;
        for (var i = 0 ; i < this.state.toDoItem.length ; i++){
            if (this.state.toDoItem[i] === str ){
                index = i
            }
        }
        this.state.toDoItem.splice(index, 1);
        this.setState({
            toDoItem: this.state.toDoItem
        })
    }
    fromToDoToDone(item) {
        this.state.done.push(item);
        console.log(this.state.done);
        this.setState({
            done: this.state.done
        });
        
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
                    <List name="todo" removeItem={this.removeItem} design="todo-object" items={this.state.toDoItem} callingFromToDoToDone={this.fromToDoToDone}></List>
                </div>
                <div className="doneList">
                    <h4>Done</h4>
                    <List name="done" removeItem={this.removeItem} design="done-object" items={this.state.done}></List>
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
                    this.props.items.map((item) => <Item removeItem={this.props.removeItem} className={this.props.design} item={item} callingFromToDoToDone={this.props.callingFromToDoToDone}></Item>)
                }
            </ol>
        )
    }
}

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.callingFromToDoToDone = this.callingFromToDoToDone.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }
    removeItem() {
        this.props.removeItem(this.props.item)
    }
    callingFromToDoToDone() {
        this.props.callingFromToDoToDone(this.props.item);
        console.log("yayone")

    }
    render() {
        return (
            <div className="itemStyle">
                <li onClick={this.callingFromToDoToDone} className={this.props.design}>{this.props.item}</li>
                <button onClick={this.removeItem}>Remove</button>
            </div>)
    }
}


function render() {
    ReactDOM.render(
        <App />,
        document.getElementById("root")
    );
}

render();