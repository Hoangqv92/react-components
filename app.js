// TODO
//Inside app.js, create a GroceryList component that contains an unordered list of 2 grocery items.
// Render this component to the div tag in index.html with an id of app
class GroceryListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false
        };
    }
    onListItemClick() {
        this.setState({
            done: !this.state.done
        });
    }
    render() {
        var style = {
            fontWeight: this.state.done ? 'bold' : 'normal'
        };
        return (
            <li style ={style} onClick={this.onListItemClick.bind(this)}>{this.props.groceries}</li>
        );
    }
}

var GroceryList = (props) => (
  <ul>
      {props.groceries.map((item, key) =>
        <GroceryListItem key = {key} groceries= {item}/>
        )}
  </ul>
);

var App = () => (
    <div>
        <h2>Grocery List</h2>
        <GroceryList groceries={['Eggs', 'Milk']}/>
    </div>
);


ReactDOM.render(<App />, document.getElementById('app'));

