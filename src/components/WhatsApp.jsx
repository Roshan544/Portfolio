import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppIcon = () => {
  const whatsappURL = "https://wa.me/+918928339535";

  return (
    <div className="fixed bottom-10 right-5 z-50">
      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with us on WhatsApp"
        className="flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600"
      >
        {/* <i className="fab fa-whatsapp fa-2x"></i> */}
        <FaWhatsapp size={25} className='hover:cursor-pointer hover:scale-125 duration-150 hover:text-blue-900' />
      </a>
    </div>
  );
};

export default WhatsAppIcon;
