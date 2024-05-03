import "./userdata.scss"
import { HiTrash } from "react-icons/hi";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { removeUser } from "../../reducer/dataReducer";
import Loader from "../../Components/preloader/Loader";
function UserData() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.user.users);

  return (
    <div className="usersinfo">
      {data.length !== 0 && data[0].uid !== 0 ?  (
        <>
          {data.map((item) => (
            <div key={item.uid} className="userinfo">
              <div className="username">
              <h3 className="cardtitle">{item.fullname}</h3>
              <p className="cardtotal">Total: {item.twubric.total}</p>
              </div>
              <img src={item.image} alt="user image" className="cardimage" />
             <div className="userdata">
                <div className="userfriend">
                  <p>{item.twubric.friends}</p>
                  <h3>Friends</h3>
                </div>
                <div className="userinfluence">
                  <p>{item.twubric.influence}</p>
                  <h3>Influence</h3>
                </div>
                <div className="userchirp">
                  <p>{item.twubric.chirpiness}</p>
                  <h3>Chirpiness</h3>
                </div>
              </div>
              <div className="iconsection">
                <h3>{item.join_date}</h3>
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
