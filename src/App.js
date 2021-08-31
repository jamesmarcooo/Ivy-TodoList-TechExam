import './App.css';
import TodoList from './components/TodoList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Todohead from './components/Todohead';


function App() {
  return (
    <>
      <Router>
        <Todohead /> 
        <div className="todo-app">
          <Switch>
            <Route path='/todolist' exact component={TodoList} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
