import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import Todo from './components/Todo.jsx';

function App() {
  return (
    <div>
      <script src="http://localhost:8097"></script>
      <Provider store={store}>
        <Todo />
      </Provider>
    </div>
  )
}

export default App
