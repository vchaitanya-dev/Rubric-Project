import {useAppDispatch} from "../../hooks"
import {startFilter} from "../../reducer/dataReducer"
function StartDateFilter() {
  const dispatch = useAppDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFilter = (e:any) => {
    e.preventDefault();
   const id  = parseFloat(e.target.value)
    dispatch(startFilter(id))
}
  return (
<select className="filterinput" onClick={handleFilter}>
  <option value="0"> Start Date &darr;</option>
  <option  value="1358899200">1358899200 </option>
  <option value="1355270400"> 1355270400 </option>
  <option value="1289433600"> 1289433600 </option>
  <option value="1300838400">1300838400 </option>
  <option value="1230768000"> 1230768000 </option>
  <option value="1252454400"> 1252454400 </option>
  <option value="1278201600">1278201600 </option>
  <option value="1331510400"> 1331510400 </option>
  <option value="1367971200"> 1367971200 </option> 
  <option value="1228953600"> 1228953600 </option>
</select>

)
}

export default StartDateFilter