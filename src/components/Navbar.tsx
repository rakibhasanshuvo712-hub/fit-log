import React from 'react';
import logo from "@/assets/logo.png"
import Image from "next/image";
const Navbar = () => {
    return (
        <div className='bg-black text-white border-white border-2'>
            <div className="navbar shadow-sm">
  <div className="navbar-start">
<Image src={logo}
 height="60px" 
 width="50px"
  alt="Logo" />
  <h2 className='font-bold text-4xl'>FITLOG</h2>

    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Worksout</a></li>
      
      <li><a>My plan</a></li>
    </ul>
  </div>
  <div className="navbar-end rounded-4xl gap-2.5">
    <a className="btn btn-success">Plan</a>
    <a className="btn btn-success">Saved</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;