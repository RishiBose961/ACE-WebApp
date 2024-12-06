import { HeartHandshake } from "lucide-react";


const UserProfileCard = () => {
  return (
    <div className="container mx-auto px-4  ">
      <div className="shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-24 h-24 relative">
              <img
                src="https://github.com/shadcn.png"
                alt="User's profile picture"
                className="rounded-full"
              />
            </div>
            <div className="text-center sm:text-left">
              <div className="flex justify-start items-center space-x-6">
                <div>
                <h1 className="text-3xl font-bold">John Doe</h1>
                <p >Software Developer</p>
                </div>
                <button className="rounded-full inline-flex font-semibold bg-[#646EE4] text-black px-3 py-2">
                  <HeartHandshake className="mx-1"/>
                  Follow</button>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-2">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'GraphQL', 'Tailwind CSS',].map((skill) => (
                  <span key={skill} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
