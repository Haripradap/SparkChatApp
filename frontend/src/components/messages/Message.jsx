
const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
            <img src="https://avatar.iran.liara.run/public/girl?username=gayu" alt="Tailwind CSS chat bubble component" />
            </div>
        </div>
        <div className={'chat-bubble text-white bg-blue-500'}>Hi! whatsapp!</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:43</div>
    </div>
  );
};

export default Message







// const Message = () => {
//     return (
//       <div className='chat chat-end'>
//           <div className='chat-image avatar'>
//               <div className='w-10 rounded-full'>
//               <img src="https://avatar.iran.liara.run/public/girl?username=gayu" alt="Tailwind CSS chat bubble component" />
//               </div>
//           </div>
//           <div className={'chat-bubble text-white bg-blue-500'}>Hi! whatsapp!</div>
//           <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:43</div>
//       </div>
//     );
//   };
  
//   export default Message