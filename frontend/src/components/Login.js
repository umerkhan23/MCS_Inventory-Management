import { useState, useEffect }  from "react";
import { useNavigate } from "react-router";
import LoginImg from '../assets/login.jpg';
import Navbar from "./Navbar";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const Navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const data = {email, password};
        if((email==="p&r@mcs.nust.edu.pk" || email==="comdt@mcs.nust.edu.pk")  && password ==="admin"){
            setError("");
            setEmail("");
            setPassword("");
            localStorage.setItem('id',email)
            Navigate("/home2");
            // window.location.reload(true);
        }
        else{
            setError("Incorrect")
        }
        // const response = await fetch("http://localhost:5000/user/login", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(data)
        // });
        // const resData = await response.json();
        // if(!response.ok){
        //     setError(resData.error);
        // }
        // if(response.ok){
        //     localStorage.setItem("user",JSON.stringify(resData));
        //     setError("");
        //     setEmail("");
        //     setPassword("");
        //     console.log(resData.id);
        //     handleLogin();
        // }

    }



    const handleLogin=()=>{
        // setStudent(JSON.parse(localStorage.getItem("user")));
        // // console.log("user",user);
        // if(student){
        //   // console.log("user",user);
        //   window.location.reload(true);
        // }
    }

    useEffect(() => {
        localStorage.removeItem('id');
    });
    return (
        <section class="" >
            <Navbar></Navbar>
            <div className="w-full bg-cover p-5 opacity-70 absolute bottom-0 top-28" style={{backgroundImage:`url(${LoginImg})`}}>
            
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto my-20 lg:py-0">

                <div class="w-full bg-white rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Login
                        </h1>
                        <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit} >
                            <div>
                                <label for="email" class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@mcs.nust.edu.pk" required=""
                                       onChange={(e) => setEmail(e.target.value)}
                                       value={email}
                                />
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                                       onChange={(e) => setPassword(e.target.value)}
                                       value={password}
                                />
                            </div>
                            {error && <div className="text-red-500">{error}</div>}
                            <button type="submit" class="w-full text-black bg-blue-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>

                        </form>
                    </div>
                </div>
            </div>
            </div>
            
        </section>
    );
};

export default Login;