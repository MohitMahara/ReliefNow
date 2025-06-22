import React, { useEffect, useState } from "react";
import { Layout } from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

export const Campaign = () => {
  const {campId} = useParams();
  const [campaign, setCampaign] = useState(null);


  const getCampaign = async () => {
    try{
       await fetch("/campaign.json").then((res) => res.json()).then((data) => {
           const camp = data.filter((c) => c.campaign_id == campId);
           if(camp) setCampaign(camp[0]);
       })
    }catch(error){
      toast.error(error.message);
    }
  }


  useEffect(() =>{
     getCampaign();
  }, [])

  return (
    <>
      <Layout>
        <div className="w-full min-h-screen px-6 py-4">
           <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-2 text-center">{campaign?.title}</h2>
           <div className="flex flex-col md:flex-row gap-4">
             <div className="left w-full md:max-w-[70%] mt-4">
               <img src={campaign?.image_url} alt={campaign?.title} className="w-full rounded-md"/>
               <p className="text-lg pt-4">{campaign?.description}</p>
             </div>
              
              <div className="right bg-white shadow-md h-auto w-full md:max-w-[25%] mt-4 rounded-md p-3">
                 <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">Campaign Details</h3>
                 <div className="flex flex-col justify-center">
                    <div className="w-full mb-6">
                       <div className="w-full bg-gray-200 rounded-full h-5 relative overflow-hidden">
                          <div className="bg-green-500 h-full rounded-full transition-all duration-300" style={{ width: `${10}%` }}></div>
                       </div>
                       <p className="text-sm text-center mt-2">
                           ₹{(10000).toLocaleString('en-IN')} raised of ₹{(200000).toLocaleString('en-IN')} ({10}%)
                       </p>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mb-6">
                        {[100, 200, 500, 1000, 2000, 5000].map((amount) => (
                       <button key={amount} className="bg-gray-100 hover:bg-gray-200 rounded-lg py-2 text-sm font-medium" >
                          ₹{amount}
                        </button>
                       ))}
                    </div>
                     <div className="mb-4">
                       <label className="block text-sm mb-1">Custom Amount</label>
                       <input type="text" className="w-full border rounded-lg focus:outline-none px-3 py-2 focus:border-green-500" />
                     </div>
                     <button className="bg-green-500 text-white px-6 py-3 rounded-md mt-6 cursor-pointer">Donate</button>
                 </div>
              </div>
           </div>
        </div>
      </Layout>
    </>
  );
};





