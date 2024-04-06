
import { object, string, number, mixed } from "yup";


export const franchiseValidationSchema = object({
    centerName: string().required("Center Name is Required"),
    directorName: string().required("Director Name is Required"),
    gender: string().required("Gender is Required"),
    documentType: string().required("Document Type  is Required"),
    documentNumber: string().required("Document Number is Required"),
    primaryPhone: number()
        .required("Primary Phone is Required")
        .test(
            "len",
            "Must be exactly 10 digits",
            (val) => val && val.toString().length === 10
        ),
    officePhone: number()
        .required("Office Phone is Required")
        .test(
            "len",
            "Must be exactly 10 digits",
            (val) => val && val.toString().length === 10
        ),
    wathsappPhone: number()
        .required("Wathsapp Phone is Required")
        .test(
            "len",
            "Must be exactly 10 digits",
            (val) => val && val.toString().length === 10
        ),
    pinCode: number()
        .required("Pin Code is Required")
        .test(
            "len",
            "Must be exactly 6 digits",
            (val) => val && val.toString().length === 6
        ),
    email: string().email().required("Email is Required"),
    state: string().required("State is Required"),
    district: string().required("District is Required"),
    policeStation: string().required("Police Station is Required"),
    centerPlace: string().required("Center Place is Required"),
    userName: string()
        .required("Username is Required")
        .min(6, "Username must be at least 6 characters")
        .max(24, "Username must be at most 24 characters"),
    password: string()
        .required("Password is Required")
        .min(6, "Password must be at least 6 characters")
        .max(24, "Password must be at most 24 characters"),
    logo: mixed()
        .required("Logo is Required")
        .test(
            "is-image",
            "Logo must be a valid image file",
            (value) => {
                if (!value) return false;
                const extension = value.name.substring(value.name.lastIndexOf(".") + 1).toLowerCase();
                return ["jpg", "jpeg", "png", "gif"].includes(extension);
            }
        )
        .test(
            "max-size",
            "Logo size must be less than 100kb  and 200 x 200 pixels",
            (value) => value && value.size <= 100000 // 50kb in bytes
        ),
    signature: mixed()
        .required("Signature is Required")
        .test(
            "is-image",
            "Signature must be a valid image file",
            (value) => {
                if (!value) return false;
                const extension = value.name.substring(value.name.lastIndexOf(".") + 1).toLowerCase();
                return ["jpg", "jpeg", "png", "gif"].includes(extension);
            }
        )
        .test(
            "max-size",
            "Signature size must be less than 30kb  and 140 x 60 pixels",
            (value) => value && value.size <= 30000 // 50kb in bytes
        ),

});