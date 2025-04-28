import React from "react";
import { Layout } from "../Components/Layout/Layout";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ServicesCard } from "../Components/Card/ServicesCard";
import { LuHandHelping } from "react-icons/lu";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { LiaAmbulanceSolid } from "react-icons/lia";
import {toast} from "react-hot-toast";


export const HomePage = () => {

  const handleSubmit = (e) =>{
    e.preventDefault();
    try {
      
    } catch (error) {
      toast.error(error.message);
    }
  }


  return (
    <Layout>
      <div className="px-8 h-screen relative w-full homepage bg-cover bg-center">
        <div className="absolute inset-0 z-0 overlay"></div>
        <section className=" h-screen relative z-10 w-full flex flex-col justify-center align-center text-white py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Together, We Rebuild.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg md:text-xl mb-8"
          >
            Connecting victims with support, volunteers, and resources when
            disaster strikes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <NavLink
              to={"/rescue-request"}
              className="bg-green-700 text-gray-100 px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
            >
              Rescue Request
            </NavLink>
            <NavLink
              to={"/volunteer"}
              className="bg-gray-300 text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-400 transition-colors"
            >
              Become a Volunteer
            </NavLink>
          </motion.div>
        </section>
      </div>

      <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full md:max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Mission
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            We are committed to providing critical assistance to those affected
            by natural disasters. Our mission is to offer support through
            shelter, food, medicine, aid, donations, and rescue efforts.
          </p>
        </div>

        <div className="w-full md:max-w-6xl mx-auto mt-10 grid grid-cols-1 gap-12 sm:grid-cols-2">
          <ServicesCard
            title={"Shelter"}
            description={
              "Providing emergency shelter to those displaced by disaster, ensuring a safe place to rest and recover."
            }
            image={"/shelter.png"}
          />
          <ServicesCard
            title={"Food"}
            description={
              " Distributing essential food supplies to ensure affected individuals and families are nourished and cared for."
            }
            image={"/food.jpg"}
          />
          <ServicesCard
            title={"Medicine"}
            description={
              "Offering life-saving medical aid and treatment to those who have been injured or affected by the disaster."
            }
            image={"/medicine.jpg"}
          />
          <ServicesCard
            title={"Donation"}
            description={
              "Encouraging and accepting donations from generous individuals and organizations to support ongoing relief efforts."
            }
            image={"/donate.jpg"}
          />
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/donate"
            className="inline-block text-xl font-semibold text-white bg-green-600 hover:bg-green-500 py-3 px-8 rounded-md"
          >
            Donate Now
          </Link>
        </div>
      </section>

      <section className="bg-gray-50 pt-12 pb-15 px-4 sm:px-6 lg:px-8">
        <div className="w-full md:max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">
            How it works
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-20 md:gap-12 md:grid-cols-4">

            <div className="flex flex-col items-center text-center">
             <LuHandHelping className="text-5xl text-green-700 mb-2"/>
              <div>
                <h3 className="text-lg font-bold">Submit Request</h3>
                <p className="text-md">You submit a help request.</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <MdOutlineNotificationsActive className="text-5xl text-green-700 mb-2"/>
              <div>
                <h3 className="text-lg font-bold">Instant Alert</h3>
                <p className="text-md">Volunteers are instantly notified.</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <FaCheck className="text-5xl text-green-700 mb-2" />
              <div>
                <h3 className="text-lg font-bold">Volunteer Responds</h3>
                <p className="text-md">A volunteer accepts and responds.</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <LiaAmbulanceSolid className="text-5xl text-green-700 mb-2" />
              <div>
                <h3 className="text-lg font-bold">Help Arrives</h3>
                <p className="text-md">Assistance is dispatched to you.</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full md:max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">
            Why to choose us?
          </h2>

          <div className="mt-12 flex flex-col md:flex-row gap-20">
              <div className="w-full md:w-1/3">
                <img src="/map.jpg" alt="Map" className="w-full h-auto rounded-lg mb-4" />
                 <div>
                   <h3 className="text-lg font-bold">Predict Disaster Hotspots</h3>
                   <p className="text-md">View real-time maps showing areas at risk and past disaster patterns, so you can stay prepared.</p>
                 </div>
              </div>

              <div className="w-full md:w-1/3">
              <img src="/notification.jpg" alt="Notification" className="w-full h-auto rounded-lg mb-4" />

                 <div>
                   <h3 className="text-lg font-bold">Get Instant Disaster Alerts</h3>
                   <p className="text-md">Receive timely warnings and notifications to act quickly when emergencies strike.</p>
                 </div>
              </div>

              <div className="w-full md:w-1/3">
              <img src="/handshake.jpg" alt="Handshake" className="w-full h-auto rounded-lg mb-4" />

                 <div>
                   <h3 className="text-lg font-bold">Fast and Reliable Relief Support</h3>
                   <p className="text-md">Connect instantly with volunteers and organizations offering aid — right when you need it most.</p>
                 </div>
              </div>
          </div>
        </div>
      </section>


      <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full md:max-w-6xl mx-auto">
           <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Feel free to give us feedback</h2>
           <p>Your feedback is important to us. Please let us know how we can improve our site.</p>

           <form className="mt-8 w-full">
             <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Your Name</label>
                <input type="text" className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none leading-tight focus:shadow-outline" />
             </div>

             <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
             </div>

             <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                <textarea rows={10} cols={50} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
             </div>

             <div className="mb-4">
               <button className="w-full rounded-lg py-2 px-8 bg-green-700 text-white font-semibold hover:bg-green-600 transition-colors duration-300">Submit</button>
             </div>

           </form>
        </div>
      </section>
    </Layout>
  );
};
