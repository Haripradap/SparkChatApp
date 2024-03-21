import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInput] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
  });
  const { loading , signup}= useSignup();


  const handleCheckboxChange = (gender) => {
    setInput({ ...inputs, gender });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
   await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          SignUp
          <span className='text-blue-700'> Spark</span>
        </h1>
 
        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input type='text' placeholder="Enter Your Name" className='w-full input input-boarded h-10'
              value={inputs.fullName}
              onChange={(e) => setInput({ ...inputs, fullName: e.target.value })}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input type='text' placeholder="Enter username" className='w-full input input-boarded h-10'
              value={inputs.username}
              onChange={(e) => setInput({ ...inputs, username: e.target.value })}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type='password' placeholder="Enter Password" className='w-full input input-boarded h-10'
              value={inputs.password}
              onChange={(e) => setInput({ ...inputs, password: e.target.value })}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input type='password' placeholder="Confirm Password" className='w-full input input-boarded h-10'
              value={inputs.confirmPassword}
              onChange={(e) => setInput({ ...inputs, confirmPassword: e.target.value })}
            />
          </div>
          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

          <Link to={"/login"} className='text-sm hover:text-blue-600 mt-2 inline-block' href="#">
            Already have an account?
          </Link>

          <div>
            <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
};

export default SignUp;
