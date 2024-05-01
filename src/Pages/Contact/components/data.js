import { IoIosPhonePortrait } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { c_address, c_email, c_phone } from "../../../info/Info";

export const lists = [
    {
      icon: IoIosPhonePortrait,
      title: "CALL US:",
      text: c_phone,
    },
    {
      icon: MdOutlineMail,
      title: "MAIL US:",
      text: c_email,
    },
    {
      icon: FaWhatsapp,
      title: "Whatsapp US:",
      text: "9876543210",
    },
    {
      icon: LuMapPin,
      title: "VISIT US:",
      text: c_address,
    },
  ];