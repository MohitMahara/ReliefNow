import React, {useState} from "react";
import { Layout } from "../Components/Layout/Layout";
import axios from "axios";
import {toast} from "react-hot-toast";
import { MdOutlineMyLocation } from "react-icons/md";

export const ResueReq = () => {

  const [fullname, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [emergencyLevel, setEmergencyLevel] = useState("");
  const [disasterType, setDisasterType] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");


  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_SERVER_API}/api/v1/rescue/rescue-req`, {
        fullname,phone, description, location, disasterType, emergencyLevel
      });

      if(res.data.success){
        toast.success("Rescue request submitted successfully");
        setFullName("");
        setPhone("");
        setEmergencyLevel("");
        setDescription("");
        setDisasterType("");
        setLocation("");
      }
      
    } catch (error) {
      toast.error(error.message);
    }
  }

  const handleGetLocation = async() => {
    try {

      if(!navigator.geolocation){
        toast.error("GeoLocation is not supported by your browser, Enter your location manually");
        return;
      }

      navigator.geolocation.getCurrentPosition(async (position) => {
        const {latitude, longitude} = position.coords;
        const res =  await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${import.meta.env.VITE_OPENCAGE_API_KEY}`)
        const loca = res.data.results[0]?.formatted;
        setLocation(loca);
      })
      
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <Layout>
      <div className="w-full py-6 px-4 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-semibold mb-6 text-center">Rescue Request</h1>
        <form className="w-[80%]" onSubmit={(e) => handleSubmit(e)}>
             <div className="mb-4">
                <label className="block text-gray-800 text-sm font-bold mb-2">Full Name</label>
                <input type="text" className="shadow border rounded w-full py-2 px-3 text-gray-800 focus:outline-none leading-tight focus:shadow-outline" value={fullname} onChange={(e) => setFullName(e.target.value)} required />
             </div>

             <div className="mb-4">
                <label className="block text-gray-800 text-sm font-bold mb-2">Phone</label>
                <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" value={phone} onChange={(e) => setPhone(e.target.value)} required/>
             </div>

             <div className="mb-4">
                <label className="block text-gray-800 text-sm font-bold mb-2">Level of Emergency</label>
                <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" value={emergencyLevel} onChange={(e) => setEmergencyLevel(e.target.value)} required>
                   <option value="">Select level</option>
                   <option value={"Low"}>Low</option>
                   <option value={"Moderate"}>Moderate</option>
                   <option value={"High"}>High</option>
                </select>
             </div>

            <div className="mb-4">
                <label className="block text-gray-800 text-sm font-bold mb-2">Type of Disaster</label>
                <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" value={disasterType} onChange={(e) => setDisasterType(e.target.value)} required>
                   <option value="">Select Type</option>
                   <option value={"Flood"}>Flood</option>
                   <option value={"Earthquake"}>Earthquake</option>
                   <option value={"Landslide"}>Landslide</option>
                   <option value={"Fire"}>Fire</option>
                   <option value={"Other"}>Other</option>
                </select>
             </div>

             <div className="mb-4">
                <label className="block text-gray-800 text-sm font-bold mb-2">Location</label>
               <div className="flex border shadow appearance-none rounded w-full">
                  <input type="text" className="w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" value={location} onChange={(e) => setLocation(e.target.value)} required/>
                  <div className="flex justify-center items-center p-2 cursor-pointer text-2xl" onSubmit={handleGetLocation}><MdOutlineMyLocation /></div>
                </div>
             </div>

             <div className="mb-4">
                <label className="block text-gray-800 text-sm font-bold mb-2">Description</label>
                <textarea rows={5} cols={20} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" placeholder="Brief Description of the incident..." value={description} onChange={(e) => setDescription(e.target.value)} />
             </div>

             <div className="mb-4">
               <button className="w-full rounded-lg py-2 px-8 bg-green-700 text-white font-semibold hover:bg-green-600 transition-colors duration-300" type="submit">Submit</button>
             </div>

           </form>
      </div>
    </Layout>
  );
};