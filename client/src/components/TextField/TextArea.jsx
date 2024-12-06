/* eslint-disable react/prop-types */
const TextArea = ({nameTitle,placeHolder}) => {
  return (
    <label className="form-control">
      <div className="label">
        <span className="label-text font-bold capitalize">{nameTitle}</span>
      </div>
      <textarea
        className="textarea textarea-bordered h-40"
        placeholder={placeHolder}
      ></textarea>
    </label>
  );
};

export default TextArea;
