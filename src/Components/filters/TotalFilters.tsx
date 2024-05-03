import { useAppDispatch } from "../../hooks";
import {totalFilter} from '../../reducer/dataReducer'

function UserFilter() {
     const dispatch = useAppDispatch();
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     const handleFilter = (e:any) => {
          e.preventDefault();
          const id  = parseFloat(e.target.value)
          dispatch(totalFilter((id)))
     }
  return (
  <select onClick={(e) => handleFilter(e)} className="filterinput">
          <option value="0" defaultValue="true">Total</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
  </select>
  )
}

export default UserFilter;