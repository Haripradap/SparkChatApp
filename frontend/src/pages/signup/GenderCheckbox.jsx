const GenderCheckbox = ({onCheckboxChange,selectedGender}) => {
  return (
    <div className='flex'>
        <div className='form-control'>
        <label className={`label gap-2 cursor-pointer ${selectedGender === "Male" ? "selected" : ""}`}>
            <span className='label-text'>Male</span>
            <input type="checkbox" className='checkbox border-slate-900'
              checked={selectedGender === "Male"}
              onChange={() => onCheckboxChange("Male")}
            />

        </label>
        </div>
        <div className='form-control'>
        <label className={`label gap-2 cursor-pointer ${selectedGender === "Female" ? "selected" : ""}`}>
            <span className='label-text'>Female</span>
            <input type="checkbox" className='checkbox border-slate-900'
              checked={selectedGender === "Female"}
              onChange={() => onCheckboxChange("Female")}
            />
        </label>
        </div>
    </div>
  )
}

export default GenderCheckbox;


// const GenderCheckbox = () => {
//   return (
//     <div className='flex'>
//         <div className='form-control'>
//         <label className={`label gap-2 cursor-pointer`}>
//             <span className='label-text'>Male</span>
//             <input type="checkbox" className='checkbox border-slate-900'/>
//         </label>
//         </div>
//         <div className='form-control'>
//         <label className={`label gap-2 cursor-pointer`}>
//             <span className='label-text'>Female</span>
//             <input type="checkbox" className='checkbox border-slate-900'/>
//         </label>
//         </div>
//     </div>
//   )
// }

// export default GenderCheckbox