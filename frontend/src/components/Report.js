import {useEffect , useState}  from "react";
import BarPlot from "./BarPlot";
import PieChart from "./PieChart";
import Navbar from "./Navbar";

const Report = ()=>{
        const [barPlotData, setBarPlotData] = useState([]);
        var uniqueNamesPie = '';
        const [productData, setProductData] = useState();
        var temp =[];
        var tempPrice = [];
        let uniqueBarPlot = [];
    useEffect(() => {
        const fetchData = async ()=>{
            const response = await fetch(`http://localhost:5000/api/product/`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
             data.products.map((product) =>{
                uniqueBarPlot.push(product)
            })
            console.log("data2 ",uniqueBarPlot)    


        }
        fetchData();
    }, [])
    useEffect(()=>{
        console.log("PDPDPDPD ", productData)
    },[productData])

    return(
        <div className="flex flex-col">
            <Navbar />
            <div className="flex flex-row w-full">
             <div className="w-1/2  h-[410px] m-6">
                <h1 className="text-2xl font-bold text-left">Products Visualization</h1>
                {console.log("uniqueBarPlot ",uniqueBarPlot)}
                <BarPlot uniqueBarPlot={uniqueBarPlot} />
                </div>
                <div className="w-1/2  h-[410px] m-6">
                <h1 className="text-2xl font-bold text-left">Product Visualization</h1>
                <div className="w-2/4 h-2/4  m-auto">
                <PieChart  productData={productData} /></div>
                </div>
        </div></div>
    );
}

export default Report