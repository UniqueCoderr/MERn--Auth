import { useSelector } from "react-redux" 

export default function Profile() {
  const {currentUser} = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
    <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
    <form className="flex flex-col gap-4 mt-2" >
      <img src={currentUser.profilePicture} alt="profilePic" className="h-24 w-24 rounded-full object cover self-center cursor-pointer" />
      <input 
      defaultValue={currentUser.username} 
      type="text" 
      id="username" 
      placeholder="Username" 
      className="bg-slate-100 rounded-lg p-3" />
      
      <input 
      defaultValue={currentUser.email} 
      type="email" 
      id="email" 
      placeholder="Email" 
      className="bg-slate-100 rounded-lg p-3" />
      
      <input 
      type="password" 
      id="password" 
      placeholder="Password" 
      className="bg-slate-100 rounded-lg p-3" />

      <button className="bg-slate-700 rounded-lg text-white p-3 uppercase hover:opacity-95 disabled:opacity-80 ">Update Profile</button>
    </form>
    <div className="flex justify-between mt-5">
      <span className="text-red-700 cursor-pointer">Delete Account</span>
      <span className="text-red-700 cursor-pointer">Sign Out</span>

    </div>
    </div>
  )
}
