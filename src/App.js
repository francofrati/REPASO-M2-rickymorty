import './App.css';
import {Route, Link} from 'react-router-dom';
import Search from './Components/Search/Search';
import Create from './Components/Create/Create';

function App() {
  return (
    <div className="App">

      <Route path='/search'>
        <Search></Search>
      </Route>
      <Route path='/create'>
        <Create></Create>
      </Route>
      <Route exact path='/'>
        <div>
          <Link to='/search'><span>SEARCH</span></Link>
          <Link to='/create'><span>CREATE</span></Link>
        </div>
      </Route>
    
    </div>
  );
}

export default App;
