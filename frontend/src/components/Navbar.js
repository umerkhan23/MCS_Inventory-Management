import mcsLogo from '../assets/mcsLogo.png'
import {useEffect , useState} from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [user, setUser] = useState(" ");
    var showdate = new Date();
    const navigate = useNavigate();
    var t = showdate.getHours() +":" + showdate.getMinutes();
    const [time , setTime] = useState(t);
    var date = showdate.toDateString();
    const [email, setEmail] = useState(localStorage.getItem("id"))
    const [initial, setInitial] = useState();
    const [state, setState] =useState();
    const [showAvator, setShowAvator] = useState(false); // show the avator
    useEffect(() => {
        // setInterval(time , 1000);
        setState(localStorage.getItem('state'))

        if(localStorage.getItem('id') === "p&r@mcs.nust.edu.pk"){
            setUser('P&R');
            setInitial("P&R")
        }
        else if(localStorage.getItem('id') === "comdt@mcs.nust.edu.pk"){
            setUser('Comdt MCS');
            setInitial("CM")
        }
         

        document.getElementById("user").innerHTML = user;

    }, [user]);
    const handleSignout = () => {
        localStorage.removeItem("id");
        setUser("")
        setEmail("")
        setInitial("")
        navigate("/");
      };

    return(
        <div className="h-28 flex  items-center bg-[#175836]   shadow-lg shadow-[#311C9D] ">
            <div className="flex flex-col text-left  m-2 ml-8 p-2    border-black space-x-5">
                <p className="text-white font-bold">{date}</p>
                <p id='time' className="text-white font-bold">{time}</p>
            </div>
            <div className="flex items-center justify-center  m-auto">
            <img className='w-28 h-28' src={mcsLogo} alt="" />
            <div className="">
                <h1 className="text-2xl font-bold text-blue-400">MILITARY COLLEGE OF SIGNALS</h1>
                <h4 className="text-lg font-bold text-blue-400">P&R IMS</h4>
            </div>
            </div>
            <div className="text-white font-bold mr-8">
                  <p id='user'>{user}</p>
            </div>
         {user &&    <div className=" mr-4  ">
          <div
            onClick={() => {
              setShowAvator(!showAvator);
            }}
            className="flex h-10  w-10 hover:cursor-pointer border-2 m-2 border-white bg-[white] text-[#1C69D4] font-bold font-arial justify-center items-center rounded-3xl "
          >
            {user ? <h3>{initial}</h3> : <h3>UN</h3>}
          </div>
          <div
            id="signoutDiv"
            className={` ${
              !showAvator
                ? "hidden"
                : "z-20 absolute shadow-lg shadow-gray-300  m-0 w-52 h-52 top-20 border-2 border-[#00000026] right-8 bg-white"
            }`}
          >
            <div className="flex flex-col items-center justify-center">
              <div className="flex justify-center items-center h-10 w-10  border-2 m-2 my-3 border-white bg-[#1C69D440] text-[#1C69D4]  font-bold font-arial  rounded-3xl  ">
                {user ? <h3>{initial}</h3> : <h3>UN</h3>}
              </div>
              <h2 className="font-bold font-arial text-base my-1">
                {user ? user : "User Name"}
              </h2>
              <h2 className="font-arial text-sm  text-gray-400 my-1">
                {email ? email : "User Email"}
              </h2>
              <button
                onClick={handleSignout}
                className="border-2 border-gray-200 px-3 py-1 my-2 text-base font-arial"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
}
        </div>
    );

}

export default Navbar;