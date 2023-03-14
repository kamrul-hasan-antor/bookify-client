import React from "react";

const Cart = () => {
  return (
    <div className="col-span-1 pl-5 ">
      <div className="border rounded-md sticky top-20">
        <div
          className="bg-[#1c3c6b] text-white text-lg font-semibold
        pl-2 py-3 rounded-md rounded-b-none"
        >
          <h4>Pricing Summary</h4>
        </div>
        <div className="bg-[#ecf3fe] p-4 rounded-b-md">
          <div className="bg-white">
            <p>Deluxe Double</p>
            <h4 className="text-lg font-semibold">BDT 4032</h4>
            <small>+ BDT 403 VAT & Charges</small>
          </div>

          <div className="text-center mt-5">
            <p>Total</p>
            <h4 className="text-lg font-semibold">BDT 4450</h4>
            <small>Include VAT & Charges</small>
          </div>
          <button className="bg-yellow-400 px-3 py-2 rounded font-semibold mt-3 w-full hover:shadow-md">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
