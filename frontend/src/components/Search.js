
import { useState } from "react";

const Search = () => {

    const [searchEqptId, setSearchEqptId] = useState("");
    const [eqpt_id, setEqpt_id] = useState("");
    const [eqpt_category, setEqpt_category] = useState("");
    const [serial_no, setSerial_no] = useState("");
    const [quantity, setQuantity] = useState("");
    const [warranty, setWarranty] = useState("");
    const [techspec, setTechspec] = useState("");
    const [remarks, setRemarks] = useState("");
    const [dop, setDop] = useState("");
    const [vendor, setVendor] = useState("");
    const [fund, setFund] = useState("");
    const [image, setSelectedImage] = useState(null);
    const [amount, setAmount] = useState("");
    const [show, setShow] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();

        if (searchEqptId === 0) {
            alert("Please enter Eqpt Id");
            return;
        }

        const response = await fetch(`http://localhost:5000/api/product/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        var match = false;
        for (let i = 0; i < data.products.length; i++) {
            if (data.products[i].eqpt_id === searchEqptId) {
                setEqpt_id(data.products[i].eqpt_id)
                setEqpt_category(data.products[i].eqpt_category)
                setSerial_no(data.products[i].serial_no)
                setQuantity(data.products[i].quantity)
                setWarranty(data.products[i].warranty)
                setRemarks(data.products[i].remarks)
                setDop(data.products[i].dop)
                setVendor(data.products[i].vendor)
                setFund(data.products[i].fund)
                setAmount(data.products[i].amount)
                setTechspec(data.products[i].techspec)
                match = true;
                setShow(true);
                return;
            }
            else {
                match = false;
            }
        }
        if (!match) {
            alert("This equipment ID is not in Database");
            setEqpt_id(""); setEqpt_category(""); setSerial_no(""); setQuantity("");
            setWarranty(""); setRemarks(""); setDop(""); setVendor(""); setFund("");
            setAmount(""); setTechspec("")
            setShow(false);

        }

    }

    return (
        <div className="w-full absolute bottom-0 top-28 bg-gray-200">
            <div className="flex items-center justify-center m-4 mt-10 space-x-6">
                <p className="w-24 text-left  ">Eqpt Id:</p>
                <input type="number" className="border-2 border-gray-500 rounded-lg w-48"
                    onChange={(e) => { setSearchEqptId(parseInt(e.target.value)) }}
                    value={searchEqptId}
                />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded" onClick={handleSearch}>Search</button>
            </div>
            {show && <div className="bg-white rounded-lg shadow-2xl dark:border xl:p-0 m-4 dark:bg-gray-800 dark:border-gray-700">

                <div className="flex space-x-32">
                    <form >
                        <div className="flex m-16 space-x-20 ">
                            <div >
                                <div className="flex my-4 space-x-10">
                                    <p className="w-24 text-left ">Eqpt Id:</p>
                                    <label id="eqpt_id" className="w-48">{eqpt_id}</label>
                                </div>
                                <div className="flex my-4 space-x-10 ">
                                    <p className="w-24 text-left ">Eqpt Cat:</p>
                                    {/* <input type="text" readOnly name="eqpt_category" id="eqpt_category" className="border-2 border-gray-500 rounded-lg w-48"
                                       onChange={(e) => { setEqpt_category(e.target.value) }}
                                       value={eqpt_category}
                                /> */}
                                    <label id="eqpt_id" className="w-48">{eqpt_category}</label>
                                    {/* <select readOnly name="eqpt_category" id="eqpt_category" className="border-2 border-gray-500 rounded-lg w-48"
                                        value={eqpt_category} >
                                    <option value="">Select</option>
                                    <option value="IT">IT Equipment</option>
                                    <option value="Furniture">Furniture</option>
                                    <option value="Electronics">Electronics</option>
                                </select> */}
                                </div>
                                <div className="flex my-4 space-x-10">
                                    <p className="w-24 text-left ">Serial No:</p>
                                    {/* <input type="text" readOnly name="serial_no" id="serial_no" className="border-2 border-gray-500 rounded-lg w-48"
                                       onChange={(e) => { setSerial_no(e.target.value) }}
                                       value={serial_no}
                                /> */}
                                    <label id="eqpt_id" className="w-48">{serial_no}</label>
                                </div>
                                <div className="flex my-4 space-x-10">
                                    <p className="w-24 text-left ">Quantity:</p>
                                    {/* <input type="text" readOnly name="quantity" id="quantity" className="border-2 border-gray-500 rounded-lg w-48"
                                       onChange={(e) => { setQuantity(e.target.value) }}
                                       value={quantity}
                                /> */}
                                    <label id="eqpt_id" className="w-48">{quantity}</label>
                                </div>
                                <div className="flex my-4 space-x-10">
                                    <p className="w-24 text-left ">Warranty:</p>
                                    {/* <input type="text" readOnly name="warranty" id="warranty" className="border-2 border-gray-500 rounded-lg w-48"
                                       onChange={(e) => { setWarranty(e.target.value) }}
                                       value={warranty}
                                /> */}
                                    <label id="eqpt_id" className="w-48">{warranty}</label>
                                </div>
                                <div className="flex my-4 space-x-10">
                                    <p className="w-24 text-left ">Remarks:</p>
                                    {/* <input type="text" readOnly name="remarks" id="remarks" className="border-2 border-gray-500 rounded-lg w-48"
                                       onChange={(e) => { setRemarks(e.target.value) }}
                                       value={remarks}
                                /> */}
                                    <label id="eqpt_id" className="w-48">{remarks}</label>
                                </div>
                            </div>

                            <div className="">
                                <div className="flex my-4 space-x-10">
                                    <p className="w-24 text-left ">DOP:</p>
                                    {/* <input type="text" readOnly name="dop" id="dop" className="border-2 border-gray-500 rounded-lg w-48"
                                       onChange={(e) => { setDop(e.target.value) }}
                                       value={dop}
                                /> */}
                                    <label id="eqpt_id" className="w-48">{dop}</label>
                                </div>
                                <div className="flex my-4 space-x-10">
                                    <p className="w-24 text-left ">Vendor:</p>
                                    {/* <input type="text" readOnly name="ventor" id="ventor" className="border-2 border-gray-500 rounded-lg w-48"
                                       onChange={(e) => { setVendor(e.target.value) }}
                                       value={vendor}
                                /> */}
                                    <label id="eqpt_id" className="w-48">{vendor}</label>
                                    {/* <select readOnly name="vendor" id="vendor" className="border-2 border-gray-500 rounded-lg w-48"
                                        value={vendor}>
                                    <option value="">Select</option>
                                    <option value="Shazaib">Shazaib</option>
                                    <option value="Shazaib2">Shazaib 2</option>
                                </select> */}
                                </div>
                                <div className="flex my-4 space-x-10">
                                    <p className="w-24 text-left ">Fund:</p>
                                    {/* <input type="text" readOnly name="fund" id="fund" className="border-2 border-gray-500 rounded-lg w-48"
                                       onChange={(e) => { setFund(e.target.value) }}
                                       value={fund}
                                /> */}
                                    <label id="eqpt_id" className="w-48">{fund}</label>
                                </div>
                                <div className="flex my-4 space-x-10">
                                    <p className="w-24 text-left ">Amount:</p>
                                    {/* <input type="text" readOnly name="amount" id="amount" className="border-2 border-gray-500 rounded-lg w-48"
                                       onChange={(e) => { setAmount(e.target.value) }}
                                       value={amount}
                                /> */}
                                    <label id="eqpt_id" className="w-48">{amount}</label>
                                </div>
                                <div className="flex my-4 space-x-10">
                                    <p className="w-24 text-left ">Tech spec:</p>
                                    {/* <input type="text" readOnly name="techspec" id="techspec" className="border-2 border-gray-500 rounded-lg w-48"
                                       onChange={(e) => { setTechspec(e.target.value) }}
                                       value={techspec}
                                /> */}
                                    <label id="eqpt_id" className="w-48">{techspec}</label>
                                </div>
                            </div>
                            <div className="space-x-24">
                                <div className="flex my-4">
                                    <p className="w-24 text-left ">Image:</p>
                                </div>
                            </div>

                        </div>








                    </form>
                </div>
            </div>}
        </div>
    );

}

export default Search;