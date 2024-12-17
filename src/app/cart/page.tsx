import Image from "next/image"
import pic from "@/app/images/home6.png"
import { CiHeart } from "react-icons/ci";
import { BsTrash3 } from "react-icons/bs";

export default function Cart(){
 return <div className="font-sans">
   <div className="lg:w-[1100px] lg:h-[547.89px] lg:ml-[200px] lg:mt-[100px] mb-[40px] lg:flex gap-[14px]">
                   {/* RHS  */}
     <div className="w-[733.33px] h-[547.89px]">
       <div className="lg:w-[681.45px] ex:w-[360px] lg:h-[62.89px] ex:h-[50px] pr-[34.08px] bg-[#E5E5E5] pl-[20px] lg:pt-[10px] ex:pt-[5px]">
         <p className="font-medium text-[13px] leading-5">Free Delivery</p>
         <p className="font-medium text-[11px] leading-5">Applies to orders of ₹ 14 000.00 or more. <span className="underline"> View details</span></p>
       </div>
        <p className="font-semibold text-[21px] leading-6 ml-[8px] mt-[20px] mb-[4px]">Bag</p>
        <div className="w-[717.33px] h-[436px] lg:pt-[40px] ex:pt-[20px]">
           <div className="lg:w-[717.33px] ex:w-[380px] h-[170px] flex">
             <Image src={pic} alt="pic" className="lg:w-[150px] lg:h-[150px] ex:w-[120px] ex:h-[120px] lg:mt-0 ex:mt-[8px]" />
             <div className="w-[537.33px] h-[170px] lg:ml-[30px] ex:ml-[6px]">
               <div className="lg:w-[537.33px] ex:w-[380px] h-[112px] lg:justify-between lg:flex">
                  <div>
                   <p className="font-medium lg:text-[15px] ex:text-[14px] leading-6">Nike Dri-FIT ADV TechKnit Ultra</p>
                   <span className="text-[#757575] text-[13px]">Men's Short-Sleeve Running Top</span><br />
                   <span className="text-[#757575] text-[13px]">Ashen Slate/Cobalt Bliss</span><br />
                   <span className="text-[#757575] text-[13px] whitespace-pre">Size  L         Quantity  1</span>
                  </div>
                    <p className="font-medium text-[15px] leading-6 lg:mt-0 ex:mt-[5px]">MRP: ₹ 3 895.00</p>
                </div>
                 <div className="w-[537.33px] h-[34px] flex lg:mt-0 ex:mt-[20px]"><CiHeart className="w-[26px] h-[26px]" /><BsTrash3 className="w-[22px] h-[22px] mt-[3px] ml-[10px]" /></div>
              </div>
           </div>

           <div className="w-[537.33px] h-[170px] mt-[40px] lg:ml-[180px] ex:ml-[130px]">
               <div className="lg:w-[537.33px] ex:w-[380px] lg:h-[112px] lg:justify-between lg:flex">
                  <div>
                   <p className="font-medium lg:text-[15px] ex:text-[14px] leading-6">Nike Air Max 97 SE</p>
                   <span className="text-[#757575] text-[13px]">Men's Shoes</span><br />
                   <span className="text-[#757575] text-[13px]">Flat Pewter/Light Bone/Black/White</span><br />
                   <span className="text-[#757575] text-[13px] whitespace-pre">Size  8         Quantity  1</span>
                  </div>
                    <p className="font-medium text-[15px] leading-6 lg:mt-0 ex:mt-[5px]">MRP: ₹ 16 995.00</p>
                </div>
                 <div className="w-[537.33px] h-[34px] flex lg:mt-0 ex:mt-[20px]"><CiHeart className="w-[26px] h-[26px]" /><BsTrash3 className="w-[22px] h-[22px] mt-[3px] ml-[10px]" /></div>
              </div>
          </div>
     </div>
                   {/* LHS  */}
     <div className="w-[350.67px] h-[295px] lg:mt-0 ex:mt-[60px]">
       <p className="font-semibold text-[21px] leading-6 lg:ml-[8px] ex:ml-[6px]">Summary</p>
       <div className="w-[334.67px] h-[18px] lg:ml-[8px] ex:ml-[4px] flex justify-between px-[10px] mt-[30px]">
         <p className="font-semibold lg:text-[15px] ex:text-[14px] leading-5">Subtotal</p>
         <p className="font-semibold lg:text-[15px] ex:text-[14px] leading-5">₹ 20 890.00</p>
       </div>
       <div className="w-[334.67px] h-[18px] lg:ml-[8px] ex:ml-[4px] flex justify-between px-[10px] mt-[4px]">
         <p className="font-semibold text-[15px] leading-5">Estimated Delivery & Handling</p>
         <p className="font-semibold text-[15px] leading-5">Free</p>
       </div>
       <div className="w-[334.67px] h-[62px] lg:border-b-[2px] ex:border-b-[1px] ex:border-t-[1px] lg:border-t-[2px] border-black lg:mt-[30px] ex:mt-[15px] lg:ml-[8px] ex:ml-[4px] flex justify-between items-center px-[20px]">
       <p className="font-semibold text-[15px] leading-5">Total</p>
       <p className="font-semibold text-[15px] leading-5">₹ 20 890.00</p>
       </div>
       <div className="w-[334.67px] h-[60px] lg:ml-[8px] ex:ml-[3px] bg-black rounded-[30px] lg:mt-[50px] ex:mt-[20px] py-[18px] text-center">
         <p className="font-normal text-[15px] leading-5 text-white">Member Checkout</p>
       </div>
     </div>
   </div>
</div>
}