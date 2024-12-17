import Image from "next/image"
import des from "@/app/images/des.png"
import Link from "next/link"
import logo from "@/app/images/logo.png"
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { SlLock } from "react-icons/sl";

export default function Header(){
 return <div className="font-sans">
  <div className="lg:w-[1440px] lg:h-[36px] ex:w-[380px] flex justify-between ex:pl-[7px] lg:pl-[50px] lg:pr-[30px]">
     <Image src={des} alt="des"  />
     <div className="lg:w-[450.81px] lg:h-[36px] lg:pt-[10px] ex:pt-[2px] lg:text-[15px] ex:text-[12px] text-[#00000098] font-semibold leading-[14px] flex lg:gap-[10px] ex:gap-[9px]">
        <Link href="/">Home</Link>
        <hr className="w-[3px] h-[14px] bg-[#00000060]" />
        <Link href="/contactus">Contact us</Link>
        <hr className="w-[3px] h-[14px] bg-[#00000060]" />
        <Link href="/detail">Product detail</Link>
        <hr className="w-[3px] h-[14px] bg-[#00000060]" />
        <Link href="/login">Login</Link>
        <hr className="w-[3px] h-[14px] bg-[#00000060]" />
        <Link href="/joinus">Join us</Link>
     </div>
  </div>
  <div className="lg:w-[1440px] lg:h-[60px] ex:w-[380px] lg:px-[60px] ex:px-[7px] flex mt-[12px]">
     <Image src={logo} alt="logo" className="lg:w-[58.85px] ex:w-[50px] h-[20.54px] mt-[20px]" />
     <div className="lg:w-[520px] lg:h-[30px] justify-between font-semibold lg:text-[17px] ex:text-[11px] leading-5 lg:flex ex:hidden lg:ml-[400px] ex:ml-[12px] mt-[17px]">
       <p>New & Featured</p>
       <p>Men</p>
       <p>Women</p>
       <p>Kids</p>
       <p>Sale</p>
       <p>SNKRS</p>
     </div>
     <div className="lg:w-[180px] lg:h-[40px] ex:w-[250px] ex:h-[35px] ex:ml-[65px] ex:mt-[13px] rounded-[100px] bg-[#F5F5F5] lg:mt-[10px] lg:ml-[130px] flex gap-[10px]">
       <IoSearchOutline className="ml-[10px] lg:mt-[7px] ex:mt-[5px] w-[24px] h-[24px] text-[#CCCCCC]" />
       <p className="text-[#CCCCCC] mt-[6px]">Search</p>
     </div>
     <div className="w-[84px] h-[60px] flex pt-[20px] lg:ml-[35px] ex:ml-[5px] lg:gap-[20px] ex:gap-[10px]">
     <CiHeart className="w-[27px] h-[27px]" />
     <SlLock className="w-[21px] h-[21px] mt-[2px]" />
     </div>
  </div>
</div>
}