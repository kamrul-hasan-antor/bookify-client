import React, { useState } from "react";
import {
  time,
  foods,
  general,
  media,
  tranport,
  others,
} from "./facilitiesData";
import { ToastContainer, toast } from "react-toastify";

const district = [
  "Cox's Bazar",
  "Saint Martin",
  "Dhaka",
  "Rajshahi",
  "Khulna",
  "Sylhet",
  "Mymensingh",
];
const AddHotels = () => {
  const [businessFacilities, setBusinessFacilities] = useState([]);
  const [fitnessFacilities, setFitnessFacilities] = useState([]);
  const [foodFacilities, setFoodFacilities] = useState([]);
  const [generalFacilities, setGeneralFacilities] = useState([]);
  const [mediaFacilities, setMediaFacilities] = useState([]);
  const [transportFacilities, setTransportFacilities] = useState([]);
  const [othersFacilities, setOthersFacilities] = useState([]);
  const [instruction, setInstruction] = useState([]);
  const [images, setImages] = useState([]);

  const imgBbApi = process.env.REACT_APP_API_URL;

  const handleFacilityChange = (event) => {
    const { checked, value, name } = event.target;
    if (checked) {
      if (name === "business") {
        setBusinessFacilities([...businessFacilities, value]);
      }
      if (name === "fitness") {
        setFitnessFacilities([...fitnessFacilities, value]);
      }
      if (name === "food") {
        setFoodFacilities([...foodFacilities, value]);
      }
      if (name === "general") {
        setGeneralFacilities([...generalFacilities, value]);
      }
      if (name === "media") {
        setMediaFacilities([...mediaFacilities, value]);
      }
      if (name === "transport") {
        setTransportFacilities([...transportFacilities, value]);
      }
      if (name === "others") {
        setOthersFacilities([...othersFacilities, value]);
      }
      if (name === "instruction") {
        setInstruction([...instruction, value]);
      }
    } else {
      if (name === "business") {
        setBusinessFacilities(
          businessFacilities.filter((facility) => facility !== value)
        );
      }
      if (name === "fitness") {
        setFitnessFacilities(
          fitnessFacilities.filter((facility) => facility !== value)
        );
      }
      if (name === "food") {
        setFoodFacilities(
          foodFacilities.filter((facility) => facility !== value)
        );
      }
      if (name === "general") {
        setGeneralFacilities(
          generalFacilities.filter((facility) => facility !== value)
        );
      }
      if (name === "media") {
        setMediaFacilities(
          mediaFacilities.filter((facility) => facility !== value)
        );
      }
      if (name === "transport") {
        setTransportFacilities(
          transportFacilities.filter((facility) => facility !== value)
        );
      }
      if (name === "others") {
        setOthersFacilities(
          othersFacilities.filter((facility) => facility !== value)
        );
      }
      if (name === "instruction") {
        setInstruction(instruction.filter((i) => i !== value));
      }
    }
  };

  const handleImageUpload = async (e) => {
    const photos = e.target.files;
    if (photos.length < 5) {
      for (const file of photos) {
        const formData = new FormData();
        formData.append("image", file);
        const response = await fetch(
          `https://api.imgbb.com/1/upload?key=${imgBbApi}`,
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();
        setImages((prevState) => [...prevState, data.data.display_url]);
      }
    } else {
      alert("you can't add more than 4 images.");
      return;
    }
  };

  const handleAddHotel = (e) => {
    e.preventDefault();

    const form = e.target;
    const hotelName = form.hotelName.value;
    const hotelPhoneNumber = form.hotelPhoneNumber.value;
    const address = form.address.value;
    const upazila = form.upazila.value;
    const district = form.district.value;
    const totalRooms = form.totalRooms.value;
    const constructionYear = form.constructionYear.value;
    const floors = form.floors.value;
    const accomodation = form.accomodation.value;
    const nearBy = form.nearBy.value;
    const checkIn = form.checkIn.value;
    const checkOut = form.checkOut.value;
    const child = form.child.value;
    const describtion = form.describtion.value;

    const hotel = {
      hotelName,
      instruction,
      images,
      hotelPhoneNumber,
      address,
      upazila,
      district,
      totalRooms,
      constructionYear,
      accomodation,
      nearBy,
      checkIn,
      checkOut,
      child,
      floors,
      describtion,
      facilities: {
        businessFacilities,
        fitnessFacilities,
        foodFacilities,
        generalFacilities,
        mediaFacilities,
        transportFacilities,
        othersFacilities,
      },
    };

    fetch("https://bookify-server.vercel.app/addHotels", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(hotel),
    })
      .then((res) => res.json())
      .then((data) => {
        form.reset();
        toast.success("Hotel Added Successfully");
      });
  };

  return (
    <div className="pb-6">
      <p className="px-3.5 py-2.5 md:text-xl font-bold uppercase mb-3 border-b">
        Add Hotels
      </p>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <form onSubmit={handleAddHotel}>
        <div className="flex flex-wrap px-2 lg:px-2">
          {/* name */}
          <div className="w-full md:w-1/2 px-2 mb-3">
            <label
              className="block uppercase text-sm font-semibold mb-2"
              htmlFor="hotel-name"
            >
              Hotel Name
            </label>
            <input
              className="appearance-none block w-full border border-red-500 rounded py-3 px-4 focus:outline-none focus:border-[#1c3c6b]"
              id="hotel-name"
              type="text"
              placeholder="Hotel Sea Pearl"
              name="hotelName"
              required
            />
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 px-2 mb-3">
            <label
              className=" uppercase text-sm font-semibold mb-2 flex items-start"
              htmlFor="grid-img"
            >
              Image
              <small className="pl-2 text-xs underline">maximum 4 images</small>
            </label>
            <input
              className="file:overflow-hidden file:border-0 file:bg-gray-100 file:px-4 w-full border rounded focus:outline-none py1 file:h-12 bg-white focus:border-[#1c3c6b] "
              type="file"
              name="photo"
              id="grid-img"
              accept="image/*"
              multiple
              required
              onChange={handleImageUpload}
            />
          </div>

          {/* phone number */}
          <div className="w-full md:w-1/3 lg:w-1/4 px-2  mb-3">
            <label
              className="block uppercase text-sm font-semibold mb-2"
              htmlFor="grid-phone"
            >
              Phone Number
            </label>
            <input
              className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
              id="grid-phone"
              type="text"
              name="hotelPhoneNumber"
              placeholder="01912345678"
              required
            />
          </div>

          {/* address */}
          <div className="w-full md:w-1/3 lg:w-1/4 px-2  mb-3">
            <label
              className="block uppercase text-sm font-semibold mb-2"
              htmlFor="grid-address"
            >
              Address
            </label>
            <input
              className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
              id="grid-address"
              type="text"
              name="address"
              placeholder="Lighthouse Road, 84/A . . . . . ."
              required
            />
          </div>

          {/* upazila */}
          <div className="w-full md:w-1/3 lg:w-1/4 px-2  mb-3">
            <label
              className="block uppercase text-sm font-semibold mb-2"
              htmlFor="grid-upazila"
            >
              upazila
            </label>
            <input
              className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
              id="grid-upazila"
              type="text"
              name="upazila"
              placeholder="Kolatoli"
              required
            />
          </div>

          {/* District */}
          <div className="w-full md:w-1/3 lg:w-1/4 px-2  mb-3">
            <label
              className="block uppercase text-sm font-semibold mb-2"
              htmlFor="grid-district"
            >
              District
            </label>
            <select
              id="grid-district"
              className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
              name="district"
            >
              {district.map((d, i) => (
                <option key={i} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          {/* number of rooms */}
          <div className="w-full md:w-1/3 lg:w-1/4 px-2  mb-3">
            <label
              className="block uppercase text-sm font-semibold mb-2"
              htmlFor="grid-rooms"
            >
              Number of Rooms
            </label>
            <input
              className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
              id="grid-rooms"
              type="text"
              name="totalRooms"
              placeholder="10"
              required
            />
          </div>

          {/*  Number of Floors */}
          <div className="w-full md:w-1/3 lg:w-1/4 px-2  mb-3">
            <label
              className="block uppercase text-sm font-semibold mb-2"
              htmlFor="grid-floors"
            >
              Number of Floors
            </label>
            <input
              className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
              id="grid-floors"
              type="text"
              name="floors"
              placeholder="8"
              required
            />
          </div>

          {/*  Number of Floors */}
          <div className="w-full md:w-1/3 lg:w-1/4 px-2  mb-3">
            <label
              className="block uppercase text-sm font-semibold mb-2"
              htmlFor="grid-nearBy"
            >
              What's Nearby
            </label>
            <input
              className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
              id="grid-nearBy"
              type="text"
              name="nearBy"
              placeholder="0.22 km from Sugandha Point"
              required
            />
          </div>

          {/*  Year of construction */}
          <div className="w-full md:w-1/3 lg:w-1/4 px-2  mb-3">
            <label
              className="block uppercase text-sm font-semibold mb-2"
              htmlFor="grid-construction"
            >
              Year of construction
            </label>
            <input
              className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
              id="grid-construction"
              type="text"
              name="constructionYear"
              placeholder="2010"
              required
            />
          </div>

          {/*  accomodation */}
          <div className="w-full md:w-1/3 lg:w-1/4 px-2  mb-3">
            <label
              className="block uppercase text-sm font-semibold mb-2"
              htmlFor="grid-accomodation"
            >
              accomodation type
            </label>
            <select
              id="grid-accomodation"
              className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
              name="accomodation"
            >
              <option defaultValue value="hotel">
                Hotel
              </option>
              <option value="Resort">Resort</option>
              <option value="Apartment">Apartment</option>
            </select>
          </div>

          {/*  check in time */}
          <div className="w-full md:w-1/3 lg:w-1/4 px-2  mb-3">
            <label
              className="block uppercase text-sm font-semibold mb-2"
              htmlFor="grid-checkIn"
            >
              check in
            </label>
            <select
              id="grid-checkIn"
              className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
              name="checkIn"
            >
              {time.map((d, i) => (
                <option key={i} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          {/*  check out time */}
          <div className="w-full md:w-1/3 lg:w-1/4 px-2  mb-3">
            <label
              className="block uppercase text-sm font-semibold mb-2"
              htmlFor="grid-checkOut"
            >
              check out
            </label>
            <select
              id="grid-checkOut"
              className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
              name="checkOut"
            >
              {time.map((d, i) => (
                <option key={i} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          {/*  child */}
          <div className="w-full md:w-1/3 lg:w-1/4 px-2  mb-3">
            <label
              className="block uppercase text-sm font-semibold mb-2"
              htmlFor="grid-child"
            >
              child
            </label>
            <select
              id="grid-child"
              className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
              name="child"
            >
              <option defaultValue value="0">
                0
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>

          {/* Instruction */}
          <div className="my-4 w-full">
            <p className="block uppercase px-2 text-sm font-semibold mb-2">
              Instruction
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
              <label className="flex items-center px-2 mb-2">
                <input
                  type="checkbox"
                  name="instruction"
                  value="Bring NID when check in"
                  onChange={handleFacilityChange}
                />
                <span className="checkbox-label pl-2">
                  Bring NID when check in
                </span>
              </label>
              <label className="flex items-center px-2 mb-2">
                <input
                  type="checkbox"
                  name="instruction"
                  value="Accepts cards, and cash"
                  onChange={handleFacilityChange}
                />
                <span className="checkbox-label pl-2">
                  Accepts cards, and cash
                </span>
              </label>
              <label className="flex items-center px-2 mb-2 ">
                <input
                  type="checkbox"
                  name="instruction"
                  value="Call before arrival"
                  onChange={handleFacilityChange}
                />
                <span className="checkbox-label pl-2">Call before arrival</span>
              </label>
            </div>
          </div>

          {/* bussiness facilities */}
          <div className="mb-4 w-full">
            <p className="block uppercase px-2 text-sm font-semibold mb-2">
              Business Facilities
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <label className="flex items-center px-2 mb-2">
                <input
                  type="checkbox"
                  name="business"
                  value="Conference Hostess"
                  onChange={handleFacilityChange}
                />
                <span className="checkbox-label pl-2">Conference Hostess</span>
              </label>
              <label className="flex items-center px-2 mb-2">
                <input
                  type="checkbox"
                  name="business"
                  value="Auditorium"
                  onChange={handleFacilityChange}
                />
                <span className="checkbox-label pl-2">Auditorium</span>
              </label>
              <label className="flex items-center px-2 mb-2">
                <input
                  type="checkbox"
                  name="business"
                  value="Sound System"
                  onChange={handleFacilityChange}
                />
                <span className="checkbox-label pl-2">Sound System</span>
              </label>
            </div>
          </div>

          {/* Fitness & Wellness Facilities */}
          <div className="mb-4 w-full">
            <p className="block uppercase px-2 text-sm font-semibold mb-2">
              Fitness & Wellness Facilities
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <label className="flex items-center   px-2 mb-2">
                <input
                  type="checkbox"
                  name="fitness"
                  value="Swimming Pool"
                  onChange={handleFacilityChange}
                />
                <span className="checkbox-label pl-2">Swimming Pool</span>
              </label>
              <label className="flex items-center px-2 mb-2">
                <input
                  type="checkbox"
                  name="fitness"
                  value="Gym"
                  onChange={handleFacilityChange}
                />
                <span className="checkbox-label pl-2">Gym</span>
              </label>
              <label className="flex items-center px-2 mb-2">
                <input
                  type="checkbox"
                  name="fitness"
                  value="Massage"
                  onChange={handleFacilityChange}
                />
                <span className="checkbox-label pl-2">Massage</span>
              </label>
            </div>
          </div>

          {/* Food & Drink */}
          <div className="mb-4 w-full">
            <p className="block uppercase px-2 text-sm font-semibold mb-2">
              Food & Drinks
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {foods.map((f, i) => {
                return (
                  <label className="flex items-center px-2 mb-2" key={i}>
                    <input
                      type="checkbox"
                      name="food"
                      value={f}
                      onChange={handleFacilityChange}
                    />
                    <span className="checkbox-label pl-2">{f}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* General Facilities */}
          <div className="mb-4 w-full">
            <p className="block uppercase px-2 text-sm font-semibold mb-2">
              General Facilities
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {general.map((f, i) => {
                return (
                  <label className="flex items-center px-2 mb-2" key={i}>
                    <input
                      type="checkbox"
                      value={f}
                      name="general"
                      onChange={handleFacilityChange}
                    />
                    <span className="checkbox-label pl-2">{f}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Media Facilities */}
          <div className="mb-4 w-full">
            <p className="block uppercase px-2 text-sm font-semibold mb-2">
              Media & Technology
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {media.map((f, i) => {
                return (
                  <label className="flex items-center px-2 mb-2" key={i}>
                    <input
                      type="checkbox"
                      name="media"
                      value={f}
                      onChange={handleFacilityChange}
                    />
                    <span className="checkbox-label pl-2">{f}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Transportation Facilities */}
          <div className="mb-4 w-full">
            <p className="block uppercase px-2 text-sm font-semibold mb-2">
              Transportation
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {tranport.map((f, i) => {
                return (
                  <label className="flex items-center px-2 mb-2" key={i}>
                    <input
                      type="checkbox"
                      name="transport"
                      value={f}
                      onChange={handleFacilityChange}
                    />
                    <span className="checkbox-label pl-2">{f}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Others Facilities */}
          <div className="mb-4 w-full">
            <p className="block uppercase px-2 text-sm font-semibold mb-2">
              Others Facilities
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {others.map((f, i) => {
                return (
                  <label className="flex items-center px-2 mb-2" key={i}>
                    <input
                      type="checkbox"
                      name="others"
                      onChange={handleFacilityChange}
                      value={f}
                    />
                    <span className="checkbox-label pl-2">{f}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/*  hotel describtion */}
          <div className="w-full px-2  mb-3">
            <label
              className="block uppercase text-sm font-semibold mb-2"
              htmlFor="grid-describtion"
            >
              hotel describtion
            </label>
            <textarea
              className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
              id="grid-describtion"
              type="text"
              name="describtion"
              rows={4}
              placeholder="Write hotel describtion here . . . . . . . "
              required
            />
          </div>

          <div className="px-2">
            <button
              type="submit"
              className="bg-[#1c3c6b] hover:bg-[#2a5699] text-white py-2 rounded font-semibold mt-3 px-14"
            >
              Add Hotel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddHotels;
