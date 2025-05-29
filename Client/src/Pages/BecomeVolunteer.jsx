import React, {useState} from "react";
import { Layout } from "../Components/Layout/Layout";
import { FaHandsHelping } from "react-icons/fa";
import { FaBriefcaseMedical } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { FaPersonShelter } from "react-icons/fa6";

export const BecomeVolunteer = () => {

    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [location, setLocation] = useState("");
    const [canTravel, setCanTravel] = useState("");
    const [addiNote, setAddiNote] = useState("");



   const handleSubmit = () =>{

    
   }



  return (
    <>
      <Layout>
        <div className="w-full min-h-screen py-6 px-8 bg-gray-100 container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-2 text-center">
            Become a Volunteer
          </h2>
          <p className="text-lg md:text-xl mb-8 text-center text-gray-900 font-sans">
            Behind every rescued life is someone like you who chose to act.
          </p>

          <p className="text-xl mt-8 font-semibold text-gray-900">
            What You'll Be Doing
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="flex flex-col gap-4 mt-4 bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition">
              <FaHandsHelping className="text-yellow-600 text-3xl" />
              <h3 className="text-lg font-semibold">
                Assist in Rescue Operations
              </h3>
              <p className="text-gray-700">
                Help in coordinating and executing rescue missions during
                disasters.
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-4 bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition">
              <FaBriefcaseMedical className="text-red-600 text-3xl" />
              <h3 className="text-lg font-semibold">Provide Medical Aid</h3>
              <p className="text-gray-700">
                Offer first aid and medical assistance to those in need.
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-4 bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition">
              <IoFastFood className="text-green-600 text-3xl" />
              <h3 className="text-lg font-semibold">Distribute Resources</h3>
              <p className="text-gray-700">
                Help in distributing food, water, and essential supplies to
                affected communities.
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-4 bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition">
              <FaPersonShelter className="text-blue-600 text-3xl" />
              <h3 className="text-lg font-semibold">
                Support Shelter Operations
              </h3>
              <p className="text-gray-700">
                Assist in setting up and managing temporary shelters for
                displaced individuals.
              </p>
            </div>
          </div>

          <p className="text-2xl mt-8 font-bold">Fill the form below to become a volunteer</p>

          <form className="space-y-4 mt-6 w-full mx-auto p-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={fullName}
              required
              className="w-full p-3 border rounded-xl"
              onChange={(e) => {setFullName(e.target.value)}}
            />
            <input
              type="tel"
              name="contact"
              placeholder="Contact Number"
              required
              value={phone}
              className="w-full p-3 border rounded-xl"
              onChange={(e) => {setPhone(e.target.value)}}

            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={email}
              className="w-full p-3 border rounded-xl"
              onChange={(e) => {setEmail(e.target.value)}}

            />
            <input
              type="text"
              name="location"
              placeholder="City / Location"
              required
              value={location}
              className="w-full p-3 border rounded-xl"
              onChange={(e) => {setLocation(e.target.value)}}

            />

            <div>
              <label className="block mb-1 font-medium">Skills</label>
              <div className="flex flex-wrap gap-2">
                {[
                  "First Aid",
                  "Logistics",
                  "Driving",
                  "Cooking",
                  "Medical",
                  "Tech Support",
                ].map((skill) => (
                  <label key={skill} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value={skill}
                      onChange={(e) => {}}

                    />{" "}
                    {skill}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Willing to Travel?
              </label>
              <div className="flex gap-4">
                <label>
                  <input
                    type="radio"
                    name="travel"
                    value="Yes"
                onChange={(e) => {}}

                    required
                  />{" "}
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="travel"
                    value="No"
                    onChange={(e) => {}}

                  />{" "}
                  No
                </label>
              </div>
            </div>

            <textarea
              name="message"
              placeholder="Additional Notes (Optional)"
              className="w-full p-3 border rounded-xl"
              rows="4"
              value={addiNote}
              onChange={(e) => {setAddiNote(e.target.value)}}
             />

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition"
            >
              Become a Volunteer
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
};
