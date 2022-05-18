import './App.css';
import Todo from './components/Todo'
import TodoItem from './components/TodoItem'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <Todo/>
      <TodoItem/>
      <Card/>
    </div>
  );
}

export default App;
