import { useDispatch, useSelector } from "react-redux";
import { filterTodos, markAllCompleted } from '../redux/actions';

const FilterButton = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state?.filter);
  const handleChangeFilter = (filter) => {
    dispatch(filterTodos(filter));
  };

  return (
    <div className='flex space-x-4 items-center'>
      <select
        className='text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none'
        value={currentFilter}
        onChange={(e) => handleChangeFilter(e.target.value)}
      >
        <option value='ALL'>Default</option>
        <option value='COMPLETED'>Completed</option>
        <option value='INCOMPLETE'>Incomplete</option>
      </select>
      <button
        className='text-sm px-2 py-1 bg-purple-500 text-white ml-2 rounded'
        onClick={() => dispatch((markAllCompleted()))}
      >Mark All Completed</button>
    </div>
  )
}

export default FilterButton;