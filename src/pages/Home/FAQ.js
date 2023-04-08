import React, { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
const items = [
  {
    title: "How do I make a reservation?",
    content:
      "Making a reservation at our hotel is a simple process that can be done easily and quickly. Start by visiting our hotel's website, where you'll find information about our rooms, amenities, and rates. Once you've selected your travel dates and the number of guests, you'll be able to see available room types and rates. Choose the room type that best meets your needs, and enter your contact and payment information. Review your reservation details to make sure everything is correct, and then confirm your reservation. Shortly after, you'll receive a confirmation email that includes all the details of your reservation. If you have any questions or need assistance, don't hesitate to contact our front desk. Our staff are always happy to help.",
  },
  {
    title: "What amenities are included with my reservation?",
    content:
      "Our hotel offers a variety of amenities, including complimentary breakfast, free Wi-Fi, and a fitness center. Some room types may also include additional amenities, such as a balcony or a kitchenette. Please check the room description when making your reservation for a full list of included amenities.",
  },
  {
    title: "Is parking available at your hotel?",
    content:
      "Yes, parking is available at our hotel for our guests. We offer both valet and self-parking options to suit your needs. Valet parking is a convenient option if you prefer to have your car parked for you, and our staff will take care of retrieving your vehicle whenever you need it. Self-parking is also available if you prefer to park your car yourself.We understand that parking can be a concern for many travelers, and we strive to provide a safe and secure parking environment for our guests. Our parking lot is well-lit and monitored by security cameras 24/7 to ensure the safety of your vehicle.",
  },
  {
    title:
      "What measures are you taking to ensure the safety and health of your guests during the COVID-19 pandemic?",
    content:
      "We are committed to providing a safe and healthy environment for our guests and staff. We have implemented enhanced cleaning and disinfecting protocols throughout the hotel, and we are following all guidelines and recommendations from local health authorities. We also require all guests and staff to wear masks in public areas and have hand sanitizing stations available throughout the hotel. Please visit our website or contact us for more information on our COVID-19 safety measures.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="h-max w-11/12 lg:w- max-w-screen-2xl mx-auto pt-12">
      <p className="py-4 font-semibold text-2xl">FAQ</p>
      <div className="flex flex-col w-full">
        {items.map((item, index) => (
          <div key={index}>
            <button
              className="flex justify-between w-full py-4 font-medium text-left bg-white hover:bg-[#ecf3fe] focus:outline-none focus:bg-[#ecf3fe] px-4"
              onClick={() => handleClick(index)}
            >
              <p>{item.title}</p>
              <p>
                {activeIndex === index ? (
                  <AiOutlineMinusCircle />
                ) : (
                  <AiOutlinePlusCircle />
                )}
              </p>
            </button>
            <div
              className={`${
                activeIndex === index ? "block" : "hidden"
              } p-4 text-sm leading-5 text-gray-500 border border-t-0`}
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>
      {/* <div className="w-1/4">
          <img src={faqImg} alt="" />
        </div> */}
    </div>
  );
}

export default FAQ;
