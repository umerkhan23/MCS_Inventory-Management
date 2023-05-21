import React, { useState } from "react";
import Navbar from "./Navbar";

const Update = () => {
    const [productSearchId, setProductSearchId] = useState();
    const [searchEqptId, setSearchEqptId] = useState("");
    const [eqpt_id, setEqpt_id] = useState("");
    const [eqpt_category, setEqpt_category] = useState("");
    const [eqpt_subcategory, setEqpt_subcategory] = useState("");
    const [serial_no, setSerial_no] = useState("");
    const [quantity, setQuantity] = useState("");
    const [warranty, setWarranty] = useState("");
    const [remarks, setRemarks] = useState("");
    const [dop, setDop] = useState("");
    const [vendor, setVendor] = useState("");
    const [fund, setFund] = useState("");
    const [image, setSelectedImage] = useState(null);
    const [amount, setAmount] = useState("");
    const [techspec, setTechspec] = useState("");
    const [error, setError] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();

        if (searchEqptId === 0) {
            alert("Please enter Eqpt Id");
            return;
        }

        const response = await fetch(`https://nutty-ruby-turkey.cyclic.app/api/product/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        var match = false;
        for (let i = 0; i < data.products.length; i++) {
            if (data.products[i].eqpt_id === searchEqptId) {
                setProductSearchId(data.products[i]._id)
                setEqpt_id(data.products[i].eqpt_id)
                setEqpt_category(data.products[i].eqpt_category)
                setEqpt_subcategory(data.products[i].eqpt_subcategory)
                setSerial_no(data.products[i].serial_no)
                setQuantity(data.products[i].quantity)
                setWarranty(data.products[i].warranty)
                setRemarks(data.products[i].remarks)
                setDop(data.products[i].dop)
                setVendor(data.products[i].vendor)
                setFund(data.products[i].fund)
                setAmount(data.products[i].amount)
                match = true;
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
            setAmount("");

        }

    }

    const handleUpdate = async (e) => {
        e.preventDefault();

        // if (eqpt_id === 0 || eqpt_category === '' || eqpt_subcategory === '' || serial_no === '' || quantity === 0 || warranty === '' || techspec === '' || dop === '' || vendor === '' || fund === '' || amount === 0 || remarks === '' || image === '') {
        //     alert("Please fill all the fields")
        //     console.log(image);
        //     return
        // }

        const formdata = new FormData();
        // formdata.append('productPicture', image.files);

        // axios.post("http://localhost:5000/api/product/upload", formdata, {
        //     headers: { "Content-Type": "multipart/form-data" }
        // })
        //     .then(res => { // then print response status
        //         console.warn(res);
        //         if (res.data.success === 1) {
        //             // setSuccess("Image upload successfully");
        //             console.log("Image upload successfully")
        //         }
        //
        //     }).catch(err => {
        //     console.log(err)
        // })

        const data = {
            "eqpt_id": eqpt_id,
            "eqpt_category": eqpt_category,
            "eqpt_subcategory": eqpt_subcategory,
            "serial_no": serial_no,
            "quantity": quantity,
            "warranty": warranty,
            "dop": dop,
            "vendor": vendor,
            "fund": fund,
            "amount": amount,
            "remarks": remarks,
            "techspecs": techspec,
            "picture": "hello"
        }
        console.log("ok")
        console.log(data)
        const response = await fetch('https://nutty-ruby-turkey.cyclic.app/api/product/'+productSearchId, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        console.log("YEs")
        const json = await response.json();
        if (response.ok) {
            setEqpt_id(0)
            setEqpt_category('')
            setEqpt_subcategory('')
            setSerial_no('')
            setQuantity(0)
            setWarranty('')
            setTechspec('')
            setDop('')
            setVendor('')
            setFund('')
            setAmount(0)
            setRemarks('')
            setSelectedImage('')
            alert("Product Updated Successfully")
            // window.location.reload(true);
        }
        if (!response.ok) {
            setError(json.error)
            console.log('error', error)

        }

        console.log(data);
    }

    return (
        <div>
            <Navbar />
        <div className="w-full absolute bottom-0 top-28 bg-gray-200">
            <div className="flex items-center justify-center m-4 mt-10 space-x-6">
                <p className="w-24 text-left  ">Eqpt Id:</p>
                <input type="number" className="border-2 border-gray-500 rounded-lg w-48"
                    onChange={(e) => { setSearchEqptId(parseInt(e.target.value)) }}
                    value={searchEqptId}
                />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded" onClick={handleSearch}>Search</button>
            </div>
            <div>
                <form className="" >
                    <div className="flex m-10 space-x-20 ">
                        <div >
                            <div className="flex my-4 space-x-10">
                                <p className="w-24 text-left ">Eqpt Id:</p>
                                <input type="number" readOnly name="eqpt_id" id="eqpt_id" className="border-2 border-gray-500 rounded-lg w-48"
                                       onChange={(e) => { setEqpt_id(e.target.value) }}
                                       value={eqpt_id}
                                />
                            </div>
                            <div className="flex my-4 space-x-10 ">
                                <p className="w-24 text-left ">Eqpt Cat:</p>
                                <select name="eqpt_category" id="eqpt_category" className="border-2 border-gray-500 rounded-lg w-48"
                                        onChange={(e) => { setEqpt_category(e.target.value) }}
                                        value={eqpt_category} >
                                    <option value="">Select</option>
                                    <option value="IT">IT Equipment</option>
                                    <option value="Furniture">Furniture</option>
                                    <option value="Electronics">Electronics</option>
                                </select>
                            </div>
                            <div className="flex my-4 space-x-10 ">
                                <p className="w-24 text-left ">Eqpt Sub Cat:</p>
                                <select name="eqpt_subcategory" id="eqpt_subcategory" className="border-2 border-gray-500 rounded-lg w-48"
                                        onChange={(e) => { setEqpt_subcategory(e.target.value) }}
                                        value={eqpt_subcategory} >
                                    <option value="">Select</option>
                                    <option value="Laptop">Laptop</option>
                                    <option value="PC">PC</option>
                                </select>
                            </div>
                            <div className="flex my-4 space-x-10">
                                <p className="w-24 text-left ">Serial No:</p>
                                <input type="text" name="serial_no" id="serial_no" className="border-2 border-gray-500 rounded-lg w-48"
                                       onChange={(e) => { setSerial_no(e.target.value) }}
                                       value={serial_no}
                                />
                            </div>
                            <div className="flex my-4 space-x-10">
                                <p className="w-24 text-left ">Quantity:</p>
                                <input type="number" name="quantity" id="quantity" className="border-2 border-gray-500 rounded-lg w-48"
                                       onChange={(e) => { setQuantity(parseInt(e.target.value)) }}
                                       value={quantity}
                                />
                            </div>
                            <div className="flex my-4 space-x-10">
                                <p className="w-24 text-left ">Warranty:</p>
                                <input type="text" name="warranty" id="warranty" className="border-2 border-gray-500 rounded-lg w-48"
                                       onChange={(e) => { setWarranty(e.target.value) }}
                                       value={warranty}
                                />
                            </div>
                        </div>

                        <div className="">
                            <div className="flex my-4 space-x-10">
                                <p className="w-24 text-left ">DOP:</p>
                                <input type="date" name="dop" id="dop" className="border-2 border-gray-500 rounded-lg w-48"
                                       onChange={(e) => { setDop(e.target.value) }}
                                       value={dop}
                                />
                            </div>
                            <div className="flex my-4 space-x-10">
                                <p className="w-24 text-left ">Vendor:</p>
                                <select name="vendor" id="vendor" className="border-2 border-gray-500 rounded-lg w-48"
                                        onChange={(e) => { setVendor(e.target.value) }}
                                        value={vendor}>
                                    <option value="">Select</option>
                                    <option value="Shazaib">Shazaib</option>
                                    <option value="Shazaib2">Shazaib 2</option>
                                </select>
                            </div>
                            <div className="flex my-4 space-x-10">
                                <p className="w-24 text-left ">Fund:</p>
                                <input type="text" name="fund" id="fund" className="border-2 border-gray-500 rounded-lg w-48"
                                       onChange={(e) => { setFund(e.target.value) }}
                                       value={fund}
                                />
                            </div>
                            <div className="flex my-4 space-x-10">
                                <p className="w-24 text-left ">Amount:</p>
                                <input type="number" name="amount" id="amount" className="border-2 border-gray-500 rounded-lg w-48"
                                       onChange={(e) => { setAmount(parseInt(e.target.value)) }}
                                       value={amount}
                                />
                            </div>
                            <div className="flex my-4 space-x-10">
                                <p className="w-24 text-left ">Remarks:</p>
                                <input type="text" name="remarks" id="remarks" className="border-2 border-gray-500 rounded-lg w-48"
                                       onChange={(e) => { setRemarks(e.target.value) }}
                                       value={remarks}
                                />
                            </div>
                        </div>
                        <div className="space-x-24">
                            <div className="flex my-4">
                                <p className="w-24 text-left ">Image:</p>
                                <input type="file" name="file" id="file" className="border-2 border-gray-500 rounded-lg w-64"
                                       onChange={(e) => { setSelectedImage({ ...image, files: e.target.files[0] }) }} accept="image/*"
                                    // value={image.name}
                                />
                            </div>
                            {/* {image && (
                            <div className="flex my-4 space-x-10">
                                <img
                                id="image"
                                src={URL.createObjectURL(image)}
                                alt= ""
                                />
                            </div>
                            )} */}
                        </div>

                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded" onClick={handleUpdate}>Update</button>









                </form></div>
            </div>
        </div>
    );
};

export default Update;