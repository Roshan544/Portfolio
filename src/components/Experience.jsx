import React from "react";

function Experience() {
    return (
        <>
        <div name="Experience"
        className=" bg-black text-white flex flex-col justify-center items-center"
        >

        <div className="Exp" >
          <h2 className="flex justify-center text-2xl mb-3 hover:scale-125 duration-150 hover:text-red-600">
          Experience
          </h2>
          <table className="flex flex-row justify-between mx-3 m-7 w-auto md:w-[150vh] bg-gray-900">
            <tbody className="">
              <tr className="text-sm flex flex-col gap-0 md:flex-row md:gap-20  px-5 mb-2 mx-4 md:mx-2 border py-3 ">
                <td className="flex flex-col mt-2 md:w-[30%]">
                  <span>10/2024 - 02/2025</span>
                  <span className="text-xs opacity-80">
                  Lower Parel - Mumbai
                  </span>
                </td>
                <td className="flex flex-col mt-2 md:w-[100%]">
                  <span>Concept Co</span>
                  <span className="text-xm opacity-80 m-3 md:text-justify md:text-sm">
                  Developed and integrated new pages into an existing website, ensuring seamless functionality and user experience. Designed and implemented UI/UX for newly created pages to enhance usability and aesthetics. Resolved various website issues and introduced features for improved performance. Debugged and fixed backend and CMS-related problems to maintain system stability. Managed blog uploads through the CMS, ensuring content was properly structured and published. Integrated ZOHO for lead generation and CRM automation to optimize business operations.
                  </span>
                </td>
                <td className="flex flex-col mt-2 md:w-[15%]">
                  <a href="https://www.conceptco.co/" title="Concept Co">Company URL</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
        </>
    );
}

export default Experience;
