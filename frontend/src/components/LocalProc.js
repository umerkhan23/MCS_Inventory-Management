import { useState } from "react";
import Navbar from "./Navbar";

const LocalProc = () => {
    const [searchEqptSubCategory, setSearchEqptSubCategory] = useState("");
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();

        if (searchEqptSubCategory === "") {
            alert("Please enter Eqpt Name");
            return;
        }

        const response = await fetch(`http://localhost:5000/api/product/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            const Data = await response.json();
            let arr = []
            for (let i = 0; i < Data.products.length; i++) {
                if (Data.products[i].eqpt_subcategory === searchEqptSubCategory) {
                    arr.push(Data.products[i])
                }
            }
            if (arr.length === 0) {
                alert("This equipment Name is not in Database");
                return;
            }
            else {
                setData(arr);
                setShow(true);
            }
        }
        else {
            alert("This equipment Name is not in Database");
            setShow(false);

        }
    }
    return (
        <div>
            <Navbar />
        <div className="w-full absolute bottom-0 top-28 bg-gray-200">
            <div className="flex items-center justify-center m-4 mt-10 space-x-6">
                <p className="w-24 text-left  ">Eqpt Name:</p>
                <input type="text" className="border-2 border-gray-500 rounded-lg w-48"
                    onChange={(e) => { setSearchEqptSubCategory(e.target.value) }}
                    value={searchEqptSubCategory}
                />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded" onClick={handleSearch}>Search</button>
            </div>
            {show && <div className="flex justify-center">
                <table className="">
                    <thead>
                        <tr className="bg-yellow-400 text-white">
                            <th className="px-5 py-3">Eqpt Id</th>
                            <th className="px-5 py-3">Eqpt Category</th>
                            <th className="px-5 py-3">Eqpt SubCategory</th>
                            <th className="px-5 py-3">Serial No</th>
                            <th className="px-5 py-3">Quantity</th>
                            <th className="px-5 py-3">Warranty</th>
                            <th className="px-5 py-3">DOP</th>
                            <th className="px-5 py-3">Vendor</th>
                            <th className="px-5 py-3">Fund</th>
                            <th className="px-5 py-3">Amount</th>
                            <th className="px-5 py-3">Remarks</th>                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item) => (
                                <tr className="bg-red-600 text-white">
                                    <td>{item.eqpt_id}</td>
                                    <td>{item.eqpt_category}</td>
                                    <td>{item.eqpt_subcategory}</td>
                                    <td>{item.serial_no}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.warranty}</td>
                                    <td>{item.dop}</td>
                                    <td>{item.vendor}</td>
                                    <td>{item.fund}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.remarks}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>}
        </div></div>
    );
};

export default LocalProc;