
const login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto '>
      <div   className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
          <h1 className='text-3xl font-semibold text-center text-gray-300'>
            Login
            <span className='text-blue-700'> SPARK</span>
          </h1>

          <form>
            <div>
              <label className='label p-2'>
                <span className='text-base label-text'>username</span>
              </label>
              <input type='text' placeholder="Enter username" className='w-full input input-boarded h-10' />
            </div>

            <div>
            <label className='label p-2'>
                <span className='text-base label-text'>password</span>
              </label>
              <input type='text' placeholder="Enter Password" className='w-full input input-boarded h-10' />
            </div>

            <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
              {"don't"} have an account?
            </a>

            <div>
              <button className='btn btn-block btn-sm mt-2'>Login</button>
            </div>
          </form>
      </div>
    </div>
  )
}

export default login;



// const login = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto '>
//       <div   className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//           <h1 className='text-3xl font-semibold text-center text-gray-300'>
//             Login
//             <span className='text-blue-500'> ChatApp</span>
//           </h1>

//           <form>
//             <div>
//               <label className='label p-2'>
//                 <span className='text-base label-text'>username</span>
//               </label>
//               <input type='text' placeholder="Enter username" className='w-full input input-boarded h-10' />
//             </div>

//             <div>
//             <label className='label p-2'>
//                 <span className='text-base label-text'>password</span>
//               </label>
//               <input type='text' placeholder="Enter username" className='w-full input input-boarded h-10' />
//             </div>

//             <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//               {"don't"} have an account?
//             </a>

//             <div>
//               <button className='btn btn-block btn-sm mt-2'>Login</button>
//             </div>
//           </form>
//       </div>
//     </div>
//   )
// }

// export default login