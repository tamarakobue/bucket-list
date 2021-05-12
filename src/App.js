import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './components/Home'
import Navigation from './components/Navigation'
import Items from './containers/Items'
import Item from './containers/Item'
import ItemForm from './containers/ItemForm'


function App() {
  return (
  
    <Router>
      <Navigation />
    <div className="App">
      <Switch>
      <Route exact path="/" component={Home} />  
      <Route exact path="/items" component={Items} /> 
      <Route exact path="/items/new" component={ItemForm} />
      <Route path="/items/:id" component={Item}/> 
      </Switch>
    </div>
  </Router>
  );
}

export default App;
