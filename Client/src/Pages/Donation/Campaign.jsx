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
                 <h3 className="text-2xl font-semibold text-gray-900 text-center">Campaign Details</h3>
                 <div className="h-[0.5%] bg-gray-200 mt-2"></div>
              </div>

           </div>
        </div>
      </Layout>
    </>
  );
};
