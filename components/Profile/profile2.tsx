// import React from "react";
// import ProfileForm from "./profiletemplate";

// const ProfileScreen2 = () => {
//   const fields = [
//     { label: "ID Type", placeholder: "Select ID Type", isDropdown: true },
//     { label: "ID Number", placeholder: "Enter your ID number" },
//     { label: "Name on the Card", placeholder: "Enter name" },
//     { label: "Primary Care Physician", placeholder: "Enter physician name" },
//     { label: "Pincode", placeholder: "Enter pincode" },
//     { label: "State", placeholder: "Select state", isDropdown: true },
//   ];

//   return <ProfileForm title="Profile" step="2 of 3" fields={fields} nextScreen="HomeTemplate" />;
// };

// export default ProfileScreen2;

import React from "react";
import ProfileForm from "./profiletemplate";

const ProfileScreen2 = () => {
  const fields = [
    { label: "ID Type", placeholder: "Select ID Type", isDropdown: true, options: ["Aadhar", "PAN", "Passport"] },
    { label: "ID Number", placeholder: "Enter your ID number" },
    { label: "Name on the Card", placeholder: "Enter name" },
    { label: "Primary Care Physician", placeholder: "Enter physician name" },
    { label: "Pincode", placeholder: "Enter pincode" },
    { label: "State", placeholder: "Select state", isDropdown: true, options: [
        "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
    ] },
  ];

  return <ProfileForm title="Profile" step="2 of 3" fields={fields} nextScreen="HomeTemplate" />;
};

export default ProfileScreen2;
