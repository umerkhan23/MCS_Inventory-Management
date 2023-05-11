import mcsLogo from '../assets/mcsLogo.png'
import {useEffect , useState} from "react";

const Navbar = () => {
    const [user, setUser] = useState('P&R');
    var showdate = new Date();
    var t = showdate.getHours() +":" + showdate.getMinutes();
    const [time , setTime] = useState(t);
    var date = showdate.toDateString();

    useEffect(() => {
        // setInterval(time , 1000);
        setUser(localStorage.getItem('id'));
        document.getElementById("user").innerHTML = user;

    }, [user]);


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
        </div>
    );

}

export default Navbar;