import { object, string, number, date, mixed } from "yup";

export const studentValidationSchema = object({
  studentName: string()
    .required("Center Name is Required")
    .max(30, "Student Name must be at most 30 characters"),
  gender: string().required("Gender Name is Required"),
  fatherName: string()
    .required("Father's Name is Required")
    .max(30, "Student Name must be at most 30 characters"),
  motherName: string()
    .required("Mother's Name is Required")
    .max(30, "Student Name must be at most 30 characters"),
  primaryPhone: number()
    .required("Primary Phone is Required")
    .test(
      "len",
      "Must be exactly 10 digits",
      (val) => val && val.toString().length === 10
    ),
  email: string().email().required("Email is Required"),

  // secondaryPhone: number()
  // .required("Primary Phone is Required")
  // .test(
  //   "len",
  //   "Must be exactly 10 digits",
  //   (val) => val && val.toString().length === 10
  // ),
  aadharNumber: number()
    .required("Aadhar Number is Required")
    .test(
      "len",
      "Must be exactly 12 digits",
      (val) => val && val.toString().length === 12
    ),
  dateOfBirth: date()
    .required("Date of Birth is required")
    .max(new Date(), "Date of Birth cannot be in the future"),
    state: string().required("State is Required"),
  district: string().required("District is Required"),
  pinCode: number()
    .required("Pin Code is Required")
    .test(
      "len",
      "Must be exactly 6 digits",
      (val) => val && val.toString().length === 6
    ),
  
  policeStation: string().required("Police Station is Required"),
  postOffice: string().required("Post Office Place is Required"),
  village: string().required("Village Place is Required"),

  userName: string()
    .required("Username is Required")
    .min(6, "Username must be at least 6 characters")
    .max(24, "Username must be at most 24 characters"),
  password: string()
    .required("Password is Required")
    .min(6, "Password must be at least 6 characters")
    .max(24, "Password must be at most 24 characters"),

  studentPhoto: mixed()
    .required("Student Photo is Required")
    .test("is-image", "Student Photo must be a valid image file", (value) => {
      if (!value) return false;
      const extension = value.name
        .substring(value.name.lastIndexOf(".") + 1)
        .toLowerCase();
      return ["jpg", "jpeg", "png", "gif"].includes(extension);
    })
    .test(
      "max-size",
      "Student Photo size must be less than 60kb  and 200 x 200 pixels",
      (value) => value && value.size <= 60000 // 50kb in bytes
    ),
  studentSignature: mixed()
    .required("Signature is Required")
    .test("is-image", "Signature must be a valid image file", (value) => {
      if (!value) return false;
      const extension = value.name
        .substring(value.name.lastIndexOf(".") + 1)
        .toLowerCase();
      return ["jpg", "jpeg", "png", "gif"].includes(extension);
    })
    .test(
      "max-size",
      "Student Photo size must be less than 30kb  and 140 x 60 pixels",
      (value) => value && value.size <= 30000 // 50kb in bytes
    ),
});
