import ProjectImage from "../../components/Image/ProjectImage";
import InputField from "../../components/TextField/InputField";
import TextArea from "../../components/TextField/TextArea";

const Project = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <div className=" col-span-2">
          <div className=" grid-cols-2 space-y-3">
            <InputField nameTitle="Project Title" placeHolder="Enter Project Title" />
            <InputField nameTitle="Project Category" placeHolder="Enter Project Category" />
            <InputField nameTitle="Project Link" placeHolder="Enter Project Link" />
            <InputField nameTitle="Project Repository (Optional)" placeHolder="Enter Project Repository" />
            <TextArea
              nameTitle="Project Describe"
              placeHolder="Enter Project Describe"
            />
          </div>
        </div>

        <ProjectImage />
      </div>
    </>
  );
};

export default Project;
