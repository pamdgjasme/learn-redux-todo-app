import { useEffect, useState } from 'react';
import { BsPlus, BsSearch } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addTodo, updateSearchTerm } from '../redux/actions';
import FilterButton from './FilterButton';

const Todo = () => {
  const [newTodo, setNewTodo] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(newTodo);
  }, [newTodo]);

  const handleAddToDo = () => {
    if (newTodo.trim() !== '') {
      dispatch(addTodo(newTodo));
      setNewTodo('')
    }
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };

  return (
    <div className='max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded'>
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center">To-Do App</h2>
      <div className='flex items-center mb-4'>
        <input
          type='text'
          value={newTodo}
          name='addTodoInput'
          id='addTodoInput'
          placeholder='Add Todo'
          onChange={(e) => setNewTodo(e.target.value)}
          className='flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500'/>
        
        <button
          className='ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline'
          onClick={handleAddToDo}
        >
          <BsPlus />
        </button>
      </div>
      <div className='flex items-center mb-4'>
        <input
          type='text'
          value={searchTerm}
          name='searchInput'
          id='searchInput'
          placeholder='Search'
          onChange={(e) => handleSearchChange(e.target.value)}
          className='flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500'/>
        <button
          className='ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline'
        >
          <BsSearch />
        </button>            
      </div>

      <div className='flex items-center justify-between'>
        <FilterButton />
      </div>
    </div>
  )
}

export default Todo;
