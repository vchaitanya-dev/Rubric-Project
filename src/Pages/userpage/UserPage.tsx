import {useAppSelector} from '../../hooks';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip} from 'recharts';
import {Link} from 'react-router-dom';
import './userpage.scss';
function UserPage() {
  const users = useAppSelector((state) => state.user.getOneUser)
  const data = [
    { name: 'Total', value: users[0].twubric.total, color:'#0088FE'},
    { name: 'Friends', value: users[0].twubric.friends, color:'#00C49F' },
    { name: 'Influence', value: users[0].twubric.influence, color:'#FFBB28' },
    { name: 'Chirpiness', value: users[0].twubric.chirpiness,color:'#FF8042' },
  ];
  return (
<div className="usercontainer">
<Link to="/" className="backlink" > Back</Link>
  {
    users.map((item) => (
     <div className="userwrapper" key={item.uid}>
        <div className="textcontainer">
        <img src={item.image} alt="" className='userimage'/>
        <h3 className="userfullname">{item.fullname}</h3>
        <p className="usersname">User Name: {item.username}</p>
        <p className='joindate'>Join Date : {item.join_date}</p>
        </div>
        <div className="graphcontainer">
      <h3 className='piecharttitle'>Pie Chart of Twubric </h3>
      <ResponsiveContainer width={'90%'} height={300}>
      <PieChart >
      <Tooltip
              contentStyle={{ background: "none", borderRadius: "5px" }}
            />
        <Pie
          data={data}
          innerRadius={"70%"}
          outerRadius={"90%"}
          paddingAngle={5}
          dataKey="value"
        >
 {data.map((item) => (
            <Cell key={item.name} fill={item.color} />
          ))}
      </Pie>
        </PieChart>
        </ResponsiveContainer> 
                 
        </div>
     </div>
    ))
  }

</div>
  )
}

export default UserPage;