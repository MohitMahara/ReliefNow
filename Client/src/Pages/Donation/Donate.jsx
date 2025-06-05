import React, { useEffect, useState } from "react";
import { Layout } from "../../Components/Layout/Layout";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export const Donate = () => {
  const [campaigns, setCampaigns] = useState([]);

  const getCampaigns = async () => {
    try {
      await fetch("/campaign.json")
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setCampaigns(data);
          }
        });
    } catch (error) {
      toast(error.message);
    }
  };

  useEffect(() => {
    getCampaigns();
  }, []);

  return (
    <>
      <Layout>
        <div className="w-full min-h-screen py-4 px-6 md:py-6 md:px-8 bg-gray-100 container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-2 text-center">
            Donate to Support Our Cause
          </h2>
          <p className="text-lg md:text-xl mb-8 text-center text-gray-900 font-sans">
            Your generosity can make a difference in the lives of those in need.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-6">
            Ongoing Campaigns
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {campaigns.map((campaign, index) => {
              return (
                <Link to={`/campaign/${campaign?.campaign_id}`} key={index} className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition">
                  <div className="flex flex-col h-full gap-3">
                     <img src={campaign.image_url} alt={campaign.title} className="w-full h-48 object-cover rounded-md mb-4"/>
                     <h3 className="text-xl font-semibold text-gray-800">{campaign.title}</h3>
                     <p className="text-gray-600 mt-2">{campaign.description.length > 100 ? campaign.description.slice(0, 100) + "..." : campaign.description}</p>
                     <p className="mt-auto text-green-600 font-bold">${campaign.raised_amount} raised</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};
