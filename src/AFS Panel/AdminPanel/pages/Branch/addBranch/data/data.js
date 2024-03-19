export const PersonalInformation = [
    {
      label: "Director Name",
      name: "directorname",
      type: "text",
    },
    {
      label: "Gender",
      name: "gender",
      type: "select",
      options: ["Male", "Female", "Other"],
    },
    {
      label: "Primary Phone",
      name: "primaryphone",
      type: "text",
    },
    {
      label: "Email ID",
      name: "email",
      type: "email",
    },
    {
      label: "Address Proof",
      name: "selectId",
      type: "select",
      options: ["Aadhar Card", "Voter Card", "Passport"],
    },
    {
      label: "Document Id Number",
      name: "documentId",
      type: "text",
    },
  ];

 export  const UserCradesial = [
    {
      label: "UserName",
      name: "username",
      type: "text",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
    },
  ];


  export const ListOfRequirements = [
    {
      label: "Center Logo",
      name: "logo",
      type: "file",
      accept:"image/*"
    },
   
    {
      label: "Center Director Signature",
      name: "signature",
      type: "file",
      accept:"image/*"
    },
    // {
    //   label: "Center Director Adhar Card",
    //   name: "aadharcard",
    //   type: "file",
    // },
  ];


  