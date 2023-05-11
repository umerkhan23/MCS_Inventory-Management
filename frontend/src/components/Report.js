import {useEffect , useState}  from "react";
import BarPlot from "./BarPlot";
import PieChart from "./PieChart";

const Report = ()=>{
        const [barPlotData, setBarPlotData] = useState([]);
        const temp =[];
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
            console.log("repo ",data.products[0].eqpt_category)
            for(let i =0; i<data.products.length; i++){
             if(data.products[i].eqpt_category === "IT"){
                // console.log("data ",data.products[i].eqpt_subcategory)
                 temp.push(data.products[i].eqpt_subcategory);
             }
            }
            uniqueBarPlot = [...new Set(temp)];
            // setBarPlotData(unique);
            console.log("unique ",uniqueBarPlot);
            console.log("temp ",temp);


        }
        fetchData();
    }, [])

    return(
        <div className="flex">
             <div className="w-1/2  h-[410px] m-6">
                <h1 className="text-2xl font-bold text-left">Products Visualization</h1>
                {console.log("uniqueBarPlot ",uniqueBarPlot)}
                <BarPlot uniqueBarPlot={uniqueBarPlot} />
                </div>
                <div className="w-1/2  h-[410px] m-6">
                <h1 className="text-2xl font-bold text-left">Product Visualization</h1>
                <div className="w-2/4 h-2/4  m-auto">
                <PieChart  /></div>
                </div>
        </div>
    );
}

export default Report