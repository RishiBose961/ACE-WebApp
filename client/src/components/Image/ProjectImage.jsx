import { Computer, Heart, Link, MessageCircle, ProjectorIcon } from "lucide-react";

const ProjectImage = () => {
  const link = "https://github.com/";
  return (
    <>
      <ol className="relative border-s-2  border-cyan-500  m-5">
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <Computer/>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 text-pretty dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <span className="bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900
             dark:text-red-300 ms-3">
              New
            </span>
          </h3>
          <time className="block mb-4 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Released on December 7th, 2021
          </time>

          <img
            src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className=" w-full h-48 rounded-xl  object-cover"
          />
        </li>
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>

          <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 
          px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ">
              Category
            </span>

          <p className="text-base text-pretty font-normal text-gray-500 dark:text-gray-400 mt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            provident dolorem minus sequi dignissimos dolore voluptates maiores
            consequatur! Nihil labore numquam enim dolor itaque est possimus
            aliquid in optio dignissimos.
          </p>
       
            <div className="flex justify-between mt-4">
              <Heart className=" cursor-pointer"/>
              <MessageCircle className=" cursor-pointer"/>
              {link.includes("github.com") ? <ProjectorIcon className=" cursor-pointer"/> : null}
              {link.includes("github.com") ? <Link className=" cursor-pointer"/> : null}
            </div>
      
        </li>
      </ol>
    </>
    
  );
};

export default ProjectImage;
