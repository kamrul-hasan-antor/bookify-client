import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { PaymentContext } from "../../context/PayMentProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "march",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const CheckoutForm = () => {
  const [cardError, setCardError] = useState("");
  const [hotelInfo, setHotelInfo] = useState({});
  const [guestInfo, setGuestInfo] = useState({
    guestName: "",
    guestNID: "",
    guestPhone: "",
    guestAddress: "",
  });

  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  // get context and session data and user
  const { addedRoom } = useContext(PaymentContext);
  const searchData = JSON.parse(sessionStorage.getItem("searchObject"));

  // get hotel data
  useEffect(() => {
    fetch("http://localhost:5000/hotels")
      .then((res) => res.json())
      .then((data) => {
        const hotel = data.find((h) => h._id === addedRoom.hotleId);
        setHotelInfo(hotel);
      });
  });

  // destructure releted properties
  const { guestNumber, hotelCheckInDate, hotelCheckOutDate, district } =
    searchData;

  const {
    hotelName,
    roomName,
    roomImgs,
    taxAmount,
    roomRent,
    rackRate,
    discount,
    discountAmount,
  } = addedRoom;

  // chec in and out date formate and calc nights and total payable amount
  const checkInday = new Date(hotelCheckInDate);
  const checkOutday = new Date(hotelCheckOutDate);
  const nights =
    (checkOutday.getTime() - checkInday.getTime()) / (1000 * 3600 * 24);
  const total = (taxAmount + roomRent) * nights;

  // payment handler and store booking data into DB
  const bookData = {
    ...addedRoom,
    ...guestInfo,
    guestNumber,
    hotelCheckOutDate,
    hotelCheckInDate,
    total,
    district,
    nights,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");

      fetch("http://localhost:5000/addBooking", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(bookData),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Payment Successfull");
          e.target.reset();

          setTimeout(() => {
            navigate("/myBookings");
          }, 4500);
        });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-max w-11/12 lg:w-2/4 lg:pt-24 pt-20 lg:w- max-w-screen-lg mx-auto"
    >
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
      {/* hotel and room info */}
      <div className="lg:mt-2">
        <h4 className="bg-[#ecf3fe] p-4 text-lg font-semibold rounded-t-md border border-b-0">
          Review Your Booking
        </h4>

        <div className="p-4 bg-white mb-6 border border-t-0 rounded-b-md">
          <div className="flex md:flex-row flex-col-reverse justify-between border-b pb-4">
            <div className="md:w-3/4 mt-2 md:mt-0">
              <p className="text-lg font-semibold">{hotelName}</p>
              <p className="text-s">{roomName}</p>
              <div>
                <small>
                  {guestNumber <= "1"
                    ? guestNumber + " Guest"
                    : guestNumber + " Guests"}
                </small>
                <small className="px-2 mx-2 border-l border-r border-gray-400">
                  1 Room
                </small>
                <small>
                  {nights <= 1 ? nights + " Night" : nights + " Nights"}
                </small>
              </div>
            </div>
            <div className="md:w-1/6">
              <img src={roomImgs} alt="" className="rounded-sm" />
            </div>
          </div>

          {/* checkin checout date */}
          <div className="flex pt-4 justify-between">
            <div>
              <p>Check In {hotelInfo?.checkIn}</p>
              <p className="font-semibold">
                {new Date(hotelCheckInDate).getDate()}{" "}
                {months[new Date(hotelCheckInDate).getMonth()]}{" "}
                {new Date(hotelCheckInDate).getFullYear()}
              </p>
              <p>{weekday[new Date(hotelCheckInDate).getDay()]}</p>
            </div>
            <div>
              <p>Check Out {hotelInfo?.checkOut}</p>
              <p className="font-semibold">
                {new Date(hotelCheckOutDate).getDate()}{" "}
                {months[new Date(hotelCheckOutDate).getMonth()]}{" "}
                {new Date(hotelCheckOutDate).getFullYear()}
              </p>
              <p>{weekday[new Date(hotelCheckOutDate).getDay()]}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Guest Details */}
      <div>
        <h4 className="bg-[#ecf3fe] p-4 text-lg font-semibold rounded-t-md border border-b-0">
          Guest Details
        </h4>
        <div className="p-4 bg-white mb-6 border border-t-0 rounded-b-md">
          <div className="flex flex-wrap">
            {/* guest name */}
            <div className="w-full md:w-1/2 md:pr-2 mb-1.5">
              <label
                className="block uppercase text-[11px] font-semibold mb-1.5"
                htmlFor="guest-name"
              >
                Guest Name
              </label>
              <input
                className="appearance-none block w-full border rounded py-2 px-4 text-sm focus:outline-none focus:border-[#1c3c6b]"
                id="guest-name"
                type="text"
                placeholder="Mr. John Doe"
                name="guestName"
                required
                onChange={(e) =>
                  setGuestInfo({ ...guestInfo, guestName: e.target.value })
                }
              />
            </div>

            {/* Nid Number */}
            <div className="w-full md:w-1/2 md:pl-2 mb-1.5">
              <label
                className="block uppercase text-[11px] font-semibold mb-1.5"
                htmlFor="hotel-nid"
              >
                NID Number
              </label>
              <input
                className="appearance-none block w-full border rounded py-2 px-4 text-sm focus:outline-none focus:border-[#1c3c6b]"
                id="hotel-nid"
                type="text"
                placeholder="512 248 5588"
                name="nid"
                required
                onChange={(e) =>
                  setGuestInfo({ ...guestInfo, guestNID: e.target.value })
                }
              />
            </div>

            {/* Phone Number */}
            <div className="w-full md:w-1/2 md:pr-2">
              <label
                className="block uppercase text-[11px] font-semibold mb-1.5"
                htmlFor="hotel-phn"
              >
                Phone Number
              </label>
              <input
                className="appearance-none block w-full border rounded py-2 px-4 text-sm focus:outline-none focus:border-[#1c3c6b]"
                id="hotel-phn"
                type="text"
                placeholder="01234567890"
                name="guestPhone"
                required
                onChange={(e) =>
                  setGuestInfo({ ...guestInfo, guestPhone: e.target.value })
                }
              />
            </div>

            {/* Current Address */}
            <div className="w-full md:w-1/2 md:pl-2">
              <label
                className="block uppercase text-[11px] font-semibold mb-1.5"
                htmlFor="user-address"
              >
                Current Address
              </label>
              <input
                className="appearance-none block w-full border rounded py-2 px-4 text-sm focus:outline-none focus:border-[#1c3c6b]"
                id="user-address"
                type="text"
                placeholder="52/B Meradia, Banasri, Dhaka"
                name="guestAddress"
                required
                onChange={(e) =>
                  setGuestInfo({ ...guestInfo, guestAddress: e.target.value })
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* Payment Details */}
      <div>
        <h4 className="bg-[#ecf3fe] p-4 text-lg font-semibold rounded-t-md border border-b-0">
          Payment Details
        </h4>

        <div className="p-4 bg-white mb-6 border border-t-0 rounded-b-md">
          {/* rack rate */}
          <div className="flex justify-between mb-1.5">
            <div className="w-2/3">
              <p>Rack Rate</p>
            </div>
            <div className="w-1/4 font-semibold text-right">
              <p>
                {rackRate} <small>BDT</small>
              </p>
            </div>
          </div>

          {/* hotel offer */}
          <div className="flex justify-between mb-1.5">
            <div className="w-2/3">
              Hotel Offer
              <small className="ml-1 px-2 py-1 bg-[#ecf3fe] font-semibold rounded-md ">
                {discount}%
              </small>
            </div>
            <div className="w-1/4 font-semibold text-right">
              <p>
                - {discountAmount} <small>BDT</small>
              </p>
            </div>
          </div>

          {/* room rent */}
          <div className="flex justify-between mb-1.5">
            <div className="w-2/3">Room Rent</div>
            <div className="w-1/4 font-semibold text-right">
              <p>
                {roomRent} <small>BDT</small>
              </p>
            </div>
          </div>

          {/* tax amount*/}
          <div className="flex justify-between mb-1.5">
            <div className="w-2/3">
              Tax
              <small className="ml-1 px-2 py-1 bg-[#ecf3fe] font-semibold rounded-md ">
                10%
              </small>
            </div>
            <div className="w-1/4 font-semibold text-right">
              <p>
                + {taxAmount} <small>BDT</small>
              </p>
            </div>
          </div>

          {/* sub total */}
          <div className="flex justify-between mb-3">
            <div className="w-2/3">
              Sub Total <small> / per night</small>
            </div>
            <div className="w-1/4 font-semibold text-right">
              <p>
                {taxAmount + roomRent}
                <small> BDT</small>
              </p>
            </div>
          </div>

          {/* total to pay */}
          <div className="flex justify-between  py-3 border-t border-b border-[#2a569983]">
            <div className="w-2/3">
              Total{" "}
              <small className="ml-1 px-2 py-1 bg-[#ecf3fe] font-semibold rounded-md ">
                {nights <= 1 ? nights + " Night" : nights + " Nights"}
              </small>
            </div>
            <div className="w-1/4 font-semibold text-right ">
              <p className="text-[#1c3c6b] text-lg">
                {total}
                <small className="text-[#1c3c6b]"> BDT</small>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Card Details */}
      <div>
        <h4 className="bg-[#ecf3fe] p-4 text-lg font-semibold rounded-t-md border border-b-0">
          Card Details
        </h4>
        <div className="p-4 bg-white border border-t-0 rounded-b-md">
          <CardElement className="border p-4" />{" "}
          <p
            className={`${
              cardError ? "block" : "hidden"
            } text-red-600 text-center mt-4`}
          >
            {cardError}
          </p>
        </div>
      </div>

      {/* Payment Button */}
      <div disabled={!stripe || !elements} className="text-center">
        <button className="py-2 w-full text-white hover:bg-[#1c3c6b] bg-[#2a5699] rounded-md uppercase hover:shadow-lg hover:shadow-[#2a569983] mt-4">
          Pay Now
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
