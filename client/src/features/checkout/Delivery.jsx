// import React from 'react';
// import Input from '../../components/Input';
// import MyButton from '../../components/MyButton';

// const Delivery = ({handleFormActivity2,savedAddress,deliveryAddress,handleAddress,handleSubmitAddress}) => {
//   return (
//     <>
//     <div className="bg-[#252422] py-10 px-3 rounded-lg  ">
//             <div className="text-[#FFFFFF] border-b-1 border-[#FBFBFB] pb-3 flex justify-between">
//               <h1 className="text-[18px] md:text-[24px] font-[500]">
//                 Delivery Address
//               </h1>
//               <button
//                 className="cursor-pointer text-[#B67B0F] text-[20px] md:text-[18px] font-[400]  "
//                 onClick={handleFormActivity2}
//               >
//                 {savedAddress ? "Edit" : "Add"}

//               </button>
//               <dialog id="my_modal_02" className="modal ">
//                 <div className="modal-box bg-[#100101]">
//                   <form
//                     method="dialog"
//                     onSubmit={(e) => {
//                       handleSubmitAddress(e);
//                       document.getElementById("my_modal_02").close();
//                     }}
//                   >
//                     <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
//                       ✕
//                     </button>

//                     <h3 className="font-bold text-lg">Add Address</h3>
//                     <p className="py-4">
//                       Where do you want your order to be delivered to?
//                     </p>

//                     <div className="flex flex-col gap-2">
//                       <label htmlFor="">Address *</label>
//                       <Input
//                         placeholder="Address"
//                         type="text"
//                         required
//                         name="address"
//                         value={deliveryAddress.address}
//                         onChange={handleAddress}
//                       />
//                     </div>
//                     <div className="flex flex-col gap-2 my-4">
//                       <label htmlFor="">State *</label>
//                       <Input
//                         placeholder="state"
//                         type="text"
//                         required
//                         name="state"
//                         value={deliveryAddress.state}
//                         onChange={handleAddress}
//                       />
//                     </div>
//                     <div className="flex flex-col gap-2 my-4">
//                       <label htmlFor="">City *</label>
//                       <Input
//                         placeholder="city"
//                         type="text"
//                         required
//                         name="city"
//                         value={deliveryAddress.city}
//                         onChange={handleAddress}
//                       />
//                     </div>
//                     <div>
//                       <MyButton
//                         text="Add Address"
//                         className="w-full h-[45px] font-[500] text-[20px]"
//                         type="submit"
//                       />
//                     </div>
//                   </form>
//                 </div>
//               </dialog>
//             </div>
//             <div>
//               {savedAddress && (
//                 <div className="flex   gap-3 py-3 items-center">
//                   <p className="font-[500] text-[white] text-[18px]">
//                     {savedAddress.address}
//                   </p>
//                   <p className="font-[400] text-[12px] text-[#FBFBFB] ">
//                     {savedAddress.state}
//                   </p>
//                   <p className="font-[400] text-[12px] text-[#FBFBFB] ">
//                     {savedAddress.city}
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//     </>
//   )
// }

// export default Delivery

// import React, { useState, useEffect } from "react";
// import Input from "../../components/Input";
// import MyButton from "../../components/MyButton";
// import { lgaData } from "../../db";

// const Delivery = ({
//   handleFormActivity2,
//   savedAddress,
//   deliveryAddress,
//   handleAddress,
//   handleSubmitAddress,
// }) => {
//   const [availableLgas, setAvailableLgas] = useState([]);

//   // Update LGAs whenever state changes
//   useEffect(() => {
//     const selectedState = deliveryAddress.state;
//     if (lgaData[selectedState]) {
//       setAvailableLgas(lgaData[selectedState]);
//     } else {
//       setAvailableLgas([]);
//     }
//   }, [deliveryAddress.state]);

//   const handleStateChange = (e) => {
//     const selectedState = e.target.value;
//     handleAddress({ target: { name: "state", value: selectedState } });
//     handleAddress({ target: { name: "city", value: "" } }); // Reset city
//   };

//   return (
//     <div className="bg-[#252422] py-10 px-3 rounded-lg">
//       <div className="text-[#FFFFFF] border-b-1 border-[#FBFBFB] pb-3 flex justify-between">
//         <h1 className="text-[18px] md:text-[24px] font-[500]">Delivery Address</h1>
//         <button
//           className="cursor-pointer text-[#B67B0F] text-[20px] md:text-[18px] font-[400]"
//           onClick={handleFormActivity2}
//         >
//           {savedAddress ? "Edit" : "Add"}
//         </button>

//         <dialog id="my_modal_02" className="modal">
//           <div className="modal-box bg-[#100101]">
//             <form
//               method="dialog"
//               onSubmit={(e) => {
//                 handleSubmitAddress(e);
//                 document.getElementById("my_modal_02").close();
//               }}
//             >
//               <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
//                 ✕
//               </button>

//               <h3 className="font-bold text-lg">Add Address</h3>
//               <p className="py-4">
//                 Where do you want your order to be delivered to?
//               </p>

//               {/* Address Input */}
//               <div className="flex flex-col gap-2">
//                 <label htmlFor="address">Address *</label>
//                 <Input
//                   placeholder="Address"
//                   type="text"
//                   required
//                   name="address"
//                   value={deliveryAddress.address}
//                   onChange={handleAddress}
//                 />
//               </div>

//               {/* State Dropdown */}
//               <div className="flex flex-col gap-2 my-4">
//                 <label htmlFor="state">State *</label>
//                 <select
//                   name="state"
//                   required
//                   value={deliveryAddress.state}
//                   onChange={handleStateChange}
//                   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-[#1c1c1c] text-white"
//                 >
//                   <option value="">Select State</option>
//                   {Object.keys(lgaData).map((state) => (
//                     <option key={state} value={state}>
//                       {state}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* LGA Dropdown */}
//               {availableLgas.length > 0 && (
//                 <div className="flex flex-col gap-2 my-4">
//                   <label htmlFor="city">City (LGA) *</label>
//                   <select
//                     name="city"
//                     required
//                     value={deliveryAddress.city}
//                     onChange={handleAddress}
//                     className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-[#1c1c1c] text-white"
//                   >
//                     <option value="">Select LGA</option>
//                     {availableLgas.map((lga) => (
//                       <option key={lga} value={lga}>
//                         {lga}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               )}

//               <div>
//                 <MyButton
//                   text="Add Address"
//                   className="w-full h-[45px] font-[500] text-[20px]"
//                   type="submit"
//                 />
//               </div>
//             </form>
//           </div>
//         </dialog>
//       </div>

//       {savedAddress && (
//         <div className="flex gap-3 py-3 items-center">
//           <p className="font-[500] text-white text-[18px]">{savedAddress.address}</p>
//           <p className="font-[400] text-[12px] text-[#FBFBFB]">{savedAddress.state}</p>
//           <p className="font-[400] text-[12px] text-[#FBFBFB]">{savedAddress.city}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Delivery;

// import React, { useState, useEffect } from "react";
// import Input from "../../components/Input";
// import MyButton from "../../components/MyButton";
// import { lgaData } from "../../db";

// const Delivery = ({
//   handleFormActivity2,
//   savedAddress,
//   deliveryAddress,
//   handleAddress,
//   handleSubmitAddress,
// }) => {
//   const [availableLgas, setAvailableLgas] = useState([]);
//   const [addressSuggestions, setAddressSuggestions] = useState([]);
//   const [isAddressFocused, setIsAddressFocused] = useState(false);

//   // Update LGAs whenever state changes
//   useEffect(() => {
//     const selectedState = deliveryAddress.state;
//     if (lgaData[selectedState]) {
//       setAvailableLgas(lgaData[selectedState]);
//     } else {
//       setAvailableLgas([]);
//     }
//   }, [deliveryAddress.state]);

//   // Fetch autocomplete suggestions when the address input changes
//   const handleAddressInputChange = async (e) => {
//     const query = e.target.value;
//     handleAddress(e);
//     const address = 'agud';
//     if (query.length > 3) {
//       try {
//         const response = await fetch(
//           https://us1.locationiq.com/v1/search.php?key=${apiKey}&q=${query}&format=json
//         );
//         const data = await response.json();

//         if (data.length > 0) {
//           setAddressSuggestions(data);
//         } else {
//           setAddressSuggestions([]);
//         }
//       } catch (error) {
//         console.error("Error fetching address data:", error);
//         setAddressSuggestions([]);
//       }
//     } else {
//       setAddressSuggestions([]);
//     }
//   };

//   // Handle the selection of an address suggestion
//   const handleAddressSelect = (address) => {
//     handleAddress({ target: { name: "address", value: address.display_name } });
//     setAddressSuggestions([]);
//   };

//   // Handle state change
//   const handleStateChange = (e) => {
//     const selectedState = e.target.value;
//     handleAddress({ target: { name: "state", value: selectedState } });
//     handleAddress({ target: { name: "city", value: "" } });
//   };

//   return (
//     <div className="bg-[#252422] py-10 px-3 rounded-lg">
//       <div className="text-[#FFFFFF] border-b-1 border-[#FBFBFB] pb-3 flex justify-between">
//         <h1 className="text-[18px] md:text-[24px] font-[500]">Delivery Address</h1>
//         <button
//           className="cursor-pointer text-[#B67B0F] text-[20px] md:text-[18px] font-[400]"
//           onClick={handleFormActivity2}
//         >
//           {savedAddress ? "Edit" : "Add"}
//         </button>

//         <dialog id="my_modal_02" className="modal">
//           <div className="modal-box bg-[#100101]">
//             <form
//               method="dialog"
//               onSubmit={(e) => {
//                 handleSubmitAddress(e);
//                 document.getElementById("my_modal_02").close();
//               }}
//             >
//               <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
//                 ✕
//               </button>

//               <h3 className="font-bold text-lg">Add Address</h3>
//               <p className="py-4">Where do you want your order to be delivered to?</p>

//               {/* Address Input with Autocomplete */}
//               <div className="flex flex-col gap-2">
//                 <label htmlFor="address">Address *</label>
//                 <Input
//                   placeholder="Address"
//                   type="text"
//                   required
//                   name="address"
//                   value={deliveryAddress.address}
//                   onChange={handleAddressInputChange}
//                   onFocus={() => setIsAddressFocused(true)}
//                   onBlur={() => setIsAddressFocused(false)}
//                 />
//                 {isAddressFocused && addressSuggestions.length > 0 && (
//                   <ul className="absolute bg-white w-full border border-gray-300 mt-1 max-h-60 overflow-auto z-10">
//                     {addressSuggestions.map((suggestion) => (
//                       <li
//                         key={suggestion.place_id}
//                         className="px-3 py-2 cursor-pointer"
//                         onClick={() => handleAddressSelect(suggestion)}
//                       >
//                         {suggestion.display_name}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>

//               {/* State Dropdown */}
//               <div className="flex flex-col gap-2 my-4">
//                 <label htmlFor="state">State *</label>
//                 <select
//                   name="state"
//                   required
//                   value={deliveryAddress.state}
//                   onChange={handleStateChange}
//                   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-[#1c1c1c] text-white"
//                 >
//                   <option value="">Select State</option>
//                   {Object.keys(lgaData).map((state) => (
//                     <option key={state} value={state}>
//                       {state}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* LGA Dropdown */}
//               {availableLgas.length > 0 && (
//                 <div className="flex flex-col gap-2 my-4">
//                   <label htmlFor="city">City (LGA) *</label>
//                   <select
//                     name="city"
//                     required
//                     value={deliveryAddress.city}
//                     onChange={handleAddress}
//                     className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-[#1c1c1c] text-white"
//                   >
//                     <option value="">Select LGA</option>
//                     {availableLgas.map((lga) => (
//                       <option key={lga} value={lga}>
//                         {lga}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               )}

//               <div>
//                 <MyButton
//                   text="Add Address"
//                   className="w-full h-[45px] font-[500] text-[20px]"
//                   type="submit"
//                 />
//               </div>
//             </form>
//           </div>
//         </dialog>
//       </div>

//       {savedAddress && (
//         <div className="flex gap-3 py-3 items-center">
//           <p className="font-[500] text-white text-[18px]">{savedAddress.address}</p>
//           <p className="font-[400] text-[12px] text-[#FBFBFB]">{savedAddress.state}</p>
//           <p className="font-[400] text-[12px] text-[#FBFBFB]">{savedAddress.city}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Delivery;

import React, { useState, useEffect } from "react";
import Input from "../../components/Input";
import MyButton from "../../components/MyButton";
import { lgaData } from "../../db";
const apiKey = import.meta.env.VITE_LOCATION_KEY;

const Delivery = ({
  handleFormActivity2,
  savedAddress,
  deliveryAddress,
  handleAddress,
  handleSubmitAddress,
}) => {
  const [availableLgas, setAvailableLgas] = useState([]);
  const [addressSuggestions, setAddressSuggestions] = useState([]);

  useEffect(() => {
    const selectedState = deliveryAddress.state;
    if (lgaData[selectedState]) {
      setAvailableLgas(lgaData[selectedState]);
    } else {
      setAvailableLgas([]);
    }
  }, [deliveryAddress.state]);

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    handleAddress({ target: { name: "state", value: selectedState } });
    handleAddress({ target: { name: "city", value: "" } });
  };

  const handleAddressChange = async (e) => {
    const query = e.target.value;
    handleAddress(e);

    if (!query) return setAddressSuggestions([]);

    const fullQuery = `${query} ${deliveryAddress.city}, ${deliveryAddress.state}, Nigeria`;
    const url = `https://us1.locationiq.com/v1/autocomplete.php?key=${apiKey}&q=${encodeURIComponent(
      fullQuery
    )}&format=json`;

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Request failed");
      const data = await res.json();
      setAddressSuggestions(data);
    } catch (err) {
      console.error("Error fetching suggestions:", err);
      setAddressSuggestions([]);
    }
  };

  return (
    <div className="bg-[#252422] py-10 px-3 rounded-lg">
      <div className="text-[#FFFFFF] border-b-1 border-[#FBFBFB] pb-3 flex justify-between">
        <h1 className="text-[18px] md:text-[24px] font-[500]">
          Delivery Address
        </h1>
        <button
          className="cursor-pointer text-[#B67B0F] text-[20px] md:text-[18px] font-[400]"
          onClick={handleFormActivity2}
        >
          {savedAddress ? "Edit" : "Add"}
        </button>

        <dialog id="my_modal_02" className="modal">
          <div className="modal-box bg-[#100101]">
            <form
              method="dialog"
              onSubmit={(e) => {
                handleSubmitAddress(e);
                document.getElementById("my_modal_02").close();
              }}
            >
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>

              <h3 className="font-bold text-lg">Add Address</h3>
              <p className="py-4">
                Where do you want your order to be delivered to?
              </p>

              {/* State Dropdown */}
              <div className="flex flex-col gap-2 my-4">
                <label htmlFor="state">State *</label>
                <select
                  name="state"
                  required
                  value={deliveryAddress.state}
                  onChange={handleStateChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-[#1c1c1c] text-white"
                >
                  <option value="">Select State</option>
                  {Object.keys(lgaData).map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              {/* LGA Dropdown - only shows after a state is selected */}
              {deliveryAddress.state && availableLgas.length > 0 && (
                <div className="flex flex-col gap-2 my-4">
                  <label htmlFor="city">LGA *</label>
                  <select
                    name="city"
                    required
                    value={deliveryAddress.city}
                    onChange={handleAddress}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-[#1c1c1c] text-white"
                  >
                    <option value="">Select LGA</option>
                    {availableLgas.map((lga) => (
                      <option key={lga} value={lga}>
                        {lga}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Address Input - only shows after an LGA is selected */}
              {deliveryAddress.city && (
                <div className="flex flex-col gap-2 my-4">
                  <label htmlFor="address">Address *</label>
                  <Input
                    placeholder="Address"
                    type="text"
                    required
                    name="address"
                    value={deliveryAddress.address}
                    onChange={handleAddressChange}
                  />
                  <div className="autocomplete-suggestions">
                    {addressSuggestions.length > 0 && (
                      <ul>
                        {addressSuggestions.map((suggestion, index) => (
                          <li
                            key={index}
                            onClick={() =>
                              handleAddress({
                                target: {
                                  name: "address",
                                  value: suggestion.display_name,
                                },
                              })
                            }
                          >
                            {suggestion.display_name}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              )}

              <div>
                <MyButton
                  text="Add Address"
                  className="w-full h-[45px] font-[500] text-[20px]"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </dialog>
      </div>

      {savedAddress && (
        <div className="flex gap-3 py-3 items-center">
          <p className="font-[500] text-white text-[18px]">
            {savedAddress.address}
          </p>
          <p className="font-[400] text-[12px] text-[#FBFBFB]">
            {savedAddress.state}
          </p>
          <p className="font-[400] text-[12px] text-[#FBFBFB]">
            {savedAddress.city}
          </p>
        </div>
      )}
    </div>
  );
};

export default Delivery;