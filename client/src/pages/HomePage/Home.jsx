import React from "react";
import ProjectImage from "../../components/Image/ProjectImage";
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard";
import Stats from "../../components/Stats/Stats";

const Home = () => {
  return (
    <div className=" space-y-5">
      <UserProfileCard />
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {[0, 1, 2].map((item) => (
          <React.Fragment key={item}>
            {item === 0 ? <Stats/> : <ProjectImage />}
          </React.Fragment>
        ))}
      </div>
      <div className="join  flex justify-center">
        <button className="join-item btn btn-md">1</button>
        <button className="join-item btn btn-md btn-active">2</button>
        <button className="join-item btn btn-md">3</button>
        <button className="join-item btn btn-md">4</button>
      </div>
    </div>
  );
};

export default Home;
