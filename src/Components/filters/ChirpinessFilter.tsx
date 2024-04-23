import { useAppDispatch } from "../../hooks";
import {chirpFilter} from '../../reducer/dataReducer'

function ChirpinessFilter() {
   const dispatch = useAppDispatch();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handleFilter = (e:any) => {
          e.preventDefault();
         const id  = parseFloat(e.target.value)
          dispatch(chirpFilter(id))
     }
  return (
     <select  id="" onClick={handleFilter} className="filterinput">
     <option value="0" defaultValue="true">Chirpiness</option>
     <option value="1">1</option>
     <option value="1.5">1.5</option>
     <option value="2">2</option>
     <option value="2.5">2.5</option>
     <option value="3">3</option>
     <option value="3.5">3.5</option>
     <option value="4">4</option>
     <option value="4.5">4.5</option>
     <option value="5">5</option>
   </select>
)
}

export default ChirpinessFilter