import { HiInformationCircle, HiTrash } from "react-icons/hi";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { removeUser,getUsers } from "../../reducer/dataReducer";
import Loader from "../../Components/preloader/Loader";
import {Link} from 'react-router-dom'
function UserData() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.user.users);
  console.log(data)
  return (
    <div className="usersinfo">
      {data.length !== 0 && data[0].uid !== 0 ?  (
        <>
          {data.map((item) => (
            <div key={item.uid} className="userinfo">
              <h3 className="cardtitle">{item.fullname}</h3>
              <img src={item.image} alt="user image" className="cardimage" />
              <p className="cardtotal">Total:{item.twubric.total}</p>
              <div className="iconsection">
              <Link to={`/${item.uid}`} className="icons"  onClick={() => dispatch(getUsers(item.uid))}>
              <HiInformationCircle className="icons" fontSize={"30px"} fill="black" />
              </Link>
                <HiTrash
                  fontSize={"30px"} className="icons"
                  onClick={() => dispatch(removeUser(item.uid))}
                />
              </div>
            </div>
          ))}
        </>
      ) :(
        <Loader />
      )}
    </div>
  );
}

export default UserData;
