/* eslint-disable react/prop-types */

const InputField = ({nameTitle,placeHolder}) => {
  return (
    <div>
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text font-bold capitalize">{nameTitle}</span>
      </div>
      <input
        type="text"
        placeholder={placeHolder}
        className="input input-bordered w-full"
      />
   
    </label>
  </div>
  )
}

export default InputField