class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoItem: [],
            done: [],
            display : "block"
        };
        this.fromToDoToDone = this.fromToDoToDone.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.removeItem2 = this.removeItem2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    removeItem(str) {
        var index = 0;
        for (var i = 0; i < this.state.toDoItem.length; i++) {
            if (this.state.toDoItem[i] === str) {
                index = i
            }
        }
        this.state.toDoItem.splice(index, 1);
        this.setState({
            toDoItem: this.state.toDoItem
        })
    }
    removeItem2(str) {
        var index = 0;
        for (var i = 0; i < this.state.done.length; i++) {
            if (this.state.done[i] === str) {
                index = i
            }
        }
        this.state.done.splice(index, 1);
        this.setState({
            done: this.state.done
        })
    }
    fromToDoToDone(item) {
        this.state.done.push(item);
        // this.state.toDoItem.
        console.log(this.state.done);
        this.setState({
            done: this.state.done,
            display:"none"
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
                    <h4>To Do list</h4><img src="https://img.icons8.com/bubbles/100/000000/list.png" />
                </div>
                <div id="list">
                    <input id="inputField" ref={input => this.name = input} placeholder="You gotta do what you gotta do"></input>
                    <button id="inputBtn" onClick={this.handleSubmit}>Add</button>
                    <div className="toDoList">
                        <h4>To Do</h4>
                        <List removeItem={this.removeItem} style={{display :this.state.display}} design="todo-object" items={this.state.toDoItem} position={this.props.newKey} callingFromToDoToDone={this.fromToDoToDone}></List>
                    </div>
                    <div className="doneList">
                        <h4>Done</h4>
                        <List removeItem={this.removeItem2} design="done-object" items={this.state.done}></List>
                    </div>
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
        var test = this.props.items.map((item, index) => {
            return (
                <Item
                    removeItem={this.props.removeItem}
                    removeItem2={this.props.removeItem}
                    newKey={index}
                    className={this.props.design}
                    item={item}
                    callingFromToDoToDone={this.props.callingFromToDoToDone}
                    style = {this.props.style}>

                </Item>
            );
        });
        return (
            <ol>
                {test}
            </ol>
        )
    }
}

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.callingFromToDoToDone = this.callingFromToDoToDone.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.removeItem2 = this.removeItem2.bind(this);
        this.state={
            hide: false
        }
    }
    removeItem() {
        this.props.removeItem(this.props.item)
    }
    removeItem2() {
        this.props.removeItem2(this.props.item)
    }
    callingFromToDoToDone() {
        this.props.callingFromToDoToDone(this.props.item);
    }
    render() {
        
        return (
            <div className="itemStyle" style={this.props.style}>
                <li onClick={this.callingFromToDoToDone} className={this.props.design}>{this.props.item}</li>
                <img id="removeBtn" onClick={this.removeItem}src="https://img.icons8.com/clouds/100/000000/add-trash.png"/>
             
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