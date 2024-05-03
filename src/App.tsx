import axios from "axios"
import { useState,useEffect } from "react"
import {useAppDispatch} from './hooks'
import { getUser } from "./reducer/dataReducer";
import TotalFilters from './Components/filters/TotalFilters'
import InfluenceFilter from "./Components/filters/InfluenceFilter";
import ChirpinessFilter from "./Components/filters/ChirpinessFilter";
import FriendFilter from "./Components/filters/FriendFilter";
import EndDateFilter from "./Components/filters/EndDateFilter";
import StartDateFilter from "./Components/filters/StartDateFilter";
import UserData from "./Components/users/UserData";
import {  Bounce, toast ,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/footer/Footer';


interface ErrorInfo {
     errors: {  status:number,
       message:string}
   }

function App(){
     const [errorDetail,setErrorDetail] = useState<ErrorInfo>({
          errors:{status:0,message:""}
        });
        const dispatch  = useAppDispatch();
        useEffect(() => {
          const retrieverUser = async () => {
           try{
             const response = await axios.get("http://localhost:5050/user")
              dispatch(getUser(response.data))
            }
           // eslint-disable-next-line @typescript-eslint/no-explicit-any
           catch(error:any){
              setErrorDetail((currentState: ErrorInfo):ErrorInfo => ({
                ...currentState,
                errors:
                  {
                    status:error.status,
                    message:error.message
                  }
              }))
              
           }
          }
          
           const timeOut=  setTimeout(() => {
               retrieverUser();
            },3000)
            return () => {clearTimeout(timeOut)
              
            }
          },[dispatch])
      if(errorDetail.errors.message.length >0){
        toast.error(`status : ${errorDetail.errors.status}
        message: ${errorDetail.errors.message}
        `, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          });
      }
      
        return (
      <>
          <div className="container">
            <ToastContainer stacked/>
        <h3 className="filtertitle">Sort by</h3>
          <div className="sortfilter">
            <TotalFilters  />
            <FriendFilter />
            <InfluenceFilter  />
            <ChirpinessFilter  />
          </div>
          <h3 className="filtertitle">Joined Twitter between</h3><div className="datefilter">
              <StartDateFilter />
              <EndDateFilter />
            </div>
            <div className="user">
              <UserData />
            </div>
            <Footer />
       </div>
          </>)
}

export default App;