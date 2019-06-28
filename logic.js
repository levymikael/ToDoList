class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoItem: [],
            done: [],
            counter: 0
        };
        this.fromToDoToDone = this.fromToDoToDone.bind(this);
        this.fromDoneTo2Do = this.fromDoneTo2Do.bind(this);
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
    fromDoneTo2Do(item) {
        this.state.toDoItem.push(item);
        this.setState({
            toDoItem: this.state.toDoItem
        })
        this.removeItem2();
    }
    fromToDoToDone(item) {
        this.state.done.push(item);
        this.setState({
            done: this.state.done,
        });
        this.removeItem();
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
                    <span></span>
                    <div>
                        <input id="inputField" ref={input => this.name = input} placeholder="You gotta do what you gotta do"></input>
                        <button id="inputBtn" onClick={this.handleSubmit}>Add</button>
                    </div>
                    <div className="toDoList">
                        <h4>To Do</h4>
                        <List removeItem={this.removeItem}
                            design="todo-object"
                            items={this.state.toDoItem}
                            callingFromToDoToDone={this.fromToDoToDone} />
                    </div>
                    <div className="doneList">
                        <h4>Done</h4>
                        <List removeItem={this.removeItem2} 
                        design="done-object" 
                        items={this.state.done} 
                        callingFromDoneto2Do={this.fromDoneTo2Do}/>
                        
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
        this.callingFromDoneto2Do = this.callingFromDoneto2Do.bind(this);
    }
    callingFromToDoToDone(item) {
        this.props.callingFromToDoToDone(this.props.item);
    }
    callingFromDoneto2Do(item) {
        this.props.callingFromDoneto2Do(this.props.item);
    }
    render() {
        var test = this.props.items.map((item, index) => {
            return (
                <Item
                    removeItem={this.props.removeItem}
                    removeItem2={this.props.removeItem}
                    // newKey={index}
                    className={this.props.design}
                    item={item}
                    callingFromToDoToDone={this.props.callingFromToDoToDone}
                    callingFromDoneto2Do={this.props.callingFromDoneto2Do}
                >
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
        this.callingFromDoneto2Do = this.callingFromDoneto2Do.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.removeItem2 = this.removeItem2.bind(this);
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
    callingFromDoneto2Do() {
        this.props.callingFromDoneto2Do(this.props.item);
    }
    render() {
        return (
            <div className="itemStyle">
                <li onClick={this.callingFromToDoToDone} className={this.props.design}>{this.props.item}</li>
                <img id="removeBtn" onClick={this.removeItem} src="https://img.icons8.com/clouds/100/000000/add-trash.png" />
                <img id="arrowUp" onClick={this.callingFromDoneto2Do} src="./img/arrow_up.png" />

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