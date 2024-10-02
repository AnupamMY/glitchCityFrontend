import axios from "axios";
import { StarsCanvas } from './canvas';
import Nav from "./Navbar";

const AuthPage = (props) => {

  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    axios.post('https://glitchcitybackend1.onrender.com/authenticate',
      { username: value }
    ).then(r => props.onAuth({ ...r.data, secret: value }))
      .catch(e => console.log(e))
  };

  return (
    <div className=" main flex items-center justify-center bg-[#222020] w-[100vw] h-[100vh] "  >
      <Nav />
      <form onSubmit={onSubmit} className="border-4  border-[#ae09dc9f] p-20 bg-[#4c20b1] max-w-[90vw] bg-opacity-[0.7] rounded-xl">
        <div className="text-[30px] font-bold text-white ">Welcome <span className="">👋</span></div>

        <div className=" font-semibold text-white  ">Set a username to get started</div>

        <div className=" m-2 ">
          <div className=" my-2 text-white font-semibold ">Username</div>
          <input className=" m-2 rounded w-full " name="username" /><br />

          <button className="border-2 hover:bg-black bg-[#ae09dc9f] hover:border-white text-white rounded-xl font-bold px-4 py-2 my-4" type="submit">
            Enter
          </button>
        </div>
      </form>
      <StarsCanvas />
    </div>
  );
};

export default AuthPage;