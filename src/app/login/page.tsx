import Image from "next/image"
import logo from "@/app/images/logo.png"

export default function Login(){
 return <div className="w-[380px] h-[489px] lg:border-[#BCBCBC] lg:border-[1px] lg:ml-[540px] mt-[96px] pt-[28px]">
   <div className="w-[324px] h-[128px] ml-[28px]">
      <Image src={logo} alt="logo" className="lg:ml-[135px] ex:ml-[120px]" />
      <p className="w-[186px] h-[60px] font-bold text-[19px] text-center lg:ml-[76px] ex:ml-[50px] mt-[15px]">YOUR ACCOUNT FOR EVERYTHING NIKE</p>
   </div>
   <div className="w-[324px] h-[305px] mt-[2px] ml-[28px]">
      <input type="email" placeholder="Email address" className="lg:w-[324px] ex:w-[280px] h-[40px] font-normal text-[14px] mt-[20px] text-[#8D8D8D] border-[1px] border-[#E5E5E5] outline-none px-[10px]" />
      <input type="Password" placeholder="Password" className="lg:w-[324px] ex:w-[280px] h-[40px] text-[#8D8D8D] mt-[20px] border-[1px] border-[#E5E5E5] outline-none px-[10px]" />
      <div className="lg:w-[324px] ex:w-[300px] h-[20px] mt-[20px] flex">
         <input type="checkbox" className="lg:w-[20px] lg:h-[20px] ex:w-[12px] ex:h-[12px] lg:mt-0 ex:mt-[5px] rounded-[6px] border-[#BCBCBC] border-[1px]" />
         <p className="font-normal lg:text-[12px] ex:text-[11px] leading-[14px] text-[#8D8D8D] mt-[4px] ml-[5px]">Keep me signed in</p>
         <p className="text-[#BCBCBC] font-normal lg:text-[12px] ex:text-[11px] leading-[13.8px] lg:ml-[50px] ex:ml-[30px] mt-[4px]">Forgotten your password?</p>
      </div>
      <p className="w-[275px] h-[30px] mt-[25px] lg:ml-[27px]  text-[#8D8D8D] font-normal text-[12px] leading-4 text-center">By logging in, you agree to Nike's Privacy Policy and Terms of Use.</p>
      <div className="lg:w-[324px] lg:h-[40px] ex:w-[280px] ex:h-[35px] bg-black mt-[20px] lg:ml-0 ex:ml-[3px] rounded-[4px] text-white lg:py-[8px] ex:py-[6px] text-center">
         <p className="">SIGN IN</p>
      </div>
      <p className=" font-normal text-[12px] leading-[14px] text-[#8D8D8D] lg:ml-[93px] ex:ml-[74px] mt-[15px]">Not a Member? <span className="text-black underline">Join Us.</span></p>
   </div>
</div>
}