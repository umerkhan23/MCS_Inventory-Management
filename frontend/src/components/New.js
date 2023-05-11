import addLogo from '../assets/addLogo.png';
import { Link } from 'react-router-dom';
const New =()=>{
    return(
        <div className=''>
            <div className="flex items-center my-20 justify-center space-x-16">
                <Link to="/addproduct">
                    <div className="flex flex-col justify-center items-center space-y-2 hover:cursor-pointer hover:underline h-48 w-48  m-4">
                        <img src={addLogo} alt="" />
                        <h4 className="text-xl font-bold">Add</h4>
                    </div></Link>
                <Link to="/addissue">
                    <div className="flex flex-col justify-center items-center space-y-2 hover:cursor-pointer hover:underline h-48 w-48  m-4">
                        <img src={addLogo} alt="" />
                        <h4 className="text-xl font-bold">Issue</h4>
                    </div></Link>
                <div className="flex flex-col justify-center items-center space-y-2 hover:cursor-pointer hover:underline h-48 w-48  m-4">
                    <img src={addLogo} alt="" />
                    <h4 className="text-xl font-bold">Repair</h4>
                </div>

            </div>

        </div>
    );
}

export default New;