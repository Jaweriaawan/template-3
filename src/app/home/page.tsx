import Link from "next/link";
import Image from "next/image";
import pic1 from "@/app/images/home1.png"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import pic2 from "@/app/images/home2.png"
import pic3 from "@/app/images/home4.png"
import pic4 from "@/app/images/home5.png"
import pic5 from "@/app/images/home6.png"
import pic6 from "@/app/images/home7.png"
import pic7 from "@/app/images/home8.png"
import pic8 from "@/app/images/home9.png"
import pic9 from "@/app/images/home10.png"
import pic10 from "@/app/images/home11.png"
import pic11 from "@/app/images/home12.png"
import pic12 from "@/app/images/home13.png"

export default function Home(){
 return <div className="font-sans">
    <div className="lg:w-[1440px] ex:w-[380px] h-[5442.36px]">
       <div className="lg:w-[1440px] ex:w-[380px] lg:h-[58px] ex:h-[50px] bg-[#E5E5E5] lg:text-center lg:pl-0 ex:pl-[10px] lg:pt-[7px] ex:pt-[4px]">
         <p className="font-semibold lg:text-[15px] ex:text-[14px] leading-4 lg:ml-0">Hello Nike App</p>
         <p className="font-normal lg:text-[13px] ex:text-[11px] leading-6 mt-[7px]">Download the app to access everything Nike. <Link href=""><span className="underline">Get Your Great</span></Link></p>
       </div>
       <div className="lg:w-[1344px] ex:w-[380px] h-[977px] lg:ml-[48px] lg:mt-0 ex:mt-[12px]">
          <Image src={pic1} alt="pic" className="lg:w-[1344px] lg:h-[700px] ex:w-[380px] ex:h-[200px]" />
          <div className="w-[1008px] h-[229px] lg:ml-[170px] mt-[45px] lg:text-center pl-[3px]">
             <p className="font-semibold text-[15px] leading-4">First Look</p>
             <p className="font-semibold lg:text-[56px] ex:text-[35px] leading-[60px] mt-[5px]">NIKE AIR MAX PULSE</p>
             <p className="lg:w-[511px] ex:w-[360px] h-[48px] font-normal lg:text-[15px] ex:text-[14px] lg:leading-6 ex:leading-[22px] lg:ml-[245px] mt-[12px]">Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse—designed to push you past your limits and help you go to the max.</p>
              <div className="flex gap-[10px] lg:ml-[380px] ex:ml-[7px] mt-[40px]">
                <div className="w-[110.58px] h-[39px] rounded-[30px] py-[6px] bg-black text-white text-center"><p>Notify Me</p></div>
                <div className="w-[138.16px] h-[39px] rounded-[30px] py-[6px] bg-black text-white text-center"><p>Shop Air Max</p></div>
              </div>
          </div>
       </div>

       <div className="lg:w-[1440px] ex:w-[360px] h-[604.36px] lg:mt-[80px] ex:mt-[-420px]">
         <div className="lg:w-[1440px] ex:w-[360px] h-[52px] flex justify-between pr-[10px]">
           <p className="font-semibold text-[22px] leading-7 lg:ml-[48px] ex:ml-[20px] lg:mt-0 ex:mt-[10px]">Best of Air Max</p>
           <div className="w-[164.75px] h-[48px] pl-[7px] flex text-center items-center">
             <p className="font-semibold lg:text-[15px] ex:text-[15px] leading-4 lg:ml-0 ex:ml-[50px]">Shop</p>
             <div className="flex lg:gap-[12px] ex:gap-[8px] lg:ml-[12px] ex:ml-[10px]">
               <div className="lg:w-[48px] lg:h-[48px] ex:w-[28px] ex:h-[28px] rounded-[24px] bg-[#F5F5F5] hover:bg-[#E5E5E5]"><IoIosArrowBack className="lg:w-[24px] lg:h-[24px] ex:w-[17px] ex:h-[17px] lg:ml-[6px] ex:ml-[3px] lg:mt-[12px] ex:mt-[6px] hover:text-[#00000060]" /></div>
               <div className="lg:w-[48px] lg:h-[48px] ex:w-[28px] ex:h-[28px] rounded-[24px] bg-[#F5F5F5] hover:bg-[#E5E5E5]"><IoIosArrowForward className="lg:w-[24px] lg:h-[24px] ex:w-[17px] ex:h-[17px] lg:ml-[6px] ex:ml-[6px] lg:mt-[12px] ex:mt-[6px] hover:text-[#00000060]" /></div>
             </div>
           </div>
         </div>
          <div className="lg:flex mt-[20px] lg:w-[1440px] lg:h-[540px] ex:w-[380px] ex:h-[1200px]">
            <div className="lg:w-[441.36px] ex:w-[380px] lg:h-[510.36px] ex:h-[400px] mb-[10px] lg:ml-[48px] ex:ml-[20px]">
              <Image src={pic2} alt="pics" className="lg:w-[441px] lg:h-[441px] ex:w-[300px] ex:h-[300px]" />
              <div className="w-[425.36px] h-[48px] flex mt-[10px]">
                <p className="w-[130.37px] h-[48px] font-medium text-[15px] leading-6">Nike Air Max Pulse <br /><span className="font-normal text-[#757575]">Women's Shoes</span></p>
                <p className="w-[130.37px] h-[48px] font-medium text-[15px] leading-6 lg:ml-[165px] ex:ml-[80px]">₹ 13 995</p>
               </div>
            </div>
             <div className="lg:w-[441.36px] lg:h-[510.36px] ex:h-[400px] ex:w-[380px] ml-[20px]">
               <Image src={pic2} alt="pics" className="lg:w-[441px] lg:h-[441px] ex:w-[300px] ex:h-[300px]" />
                <div className="w-[425.36px] h-[48px] flex mt-[10px]">
                 <p className="w-[130.37px] h-[48px] font-medium text-[15px] leading-6">Nike Air Max Pulse <br /><span className="font-normal text-[#757575]">Men's Shoes</span></p>
                 <p className="w-[130.37px] h-[48px] font-medium text-[15px] leading-6 lg:ml-[165px] ex:ml-[80px]">₹ 13 995</p>
               </div>
            </div>
            <div className="lg:w-[441.36px] lg:h-[510.36px] ml-[20px] ex:h-[400px] ex:w-[380px]">
              <Image src={pic3} alt="pics" className="lg:w-[441px] lg:h-[440px] ex:w-[300px] ex:h-[300px]" />
              <div className="w-[425.36px] h-[48px] flex mt-[10px]">
               <p className="w-[130.37px] h-[48px] font-medium text-[15px] leading-6">Nike Air Max 97 SE <br /><span className="font-normal text-[#757575]">Men's Shoes</span></p>
               <p className="w-[130.37px] h-[48px] font-medium text-[15px] leading-6 lg:ml-[165px] ex:ml-[80px]">₹ 16 995</p>
             </div>
           </div>
          </div>
       </div>

       <div className="w-[1344px] h-[977px] lg:ml-[48px] ex:ml-[10px] ex:mt-[800px] lg:mt-[50px]">
         <p className="font-semibold text-[23px] leading-7">Featured</p>
         <Image src={pic4} alt="pics" className="lg:w-[1344px] ex:w-[349px] ex:h-[200px] lg:h-[700px] mt-[20px]" />
         <div className="lg:w-[1008px] ex:w-[380px] h-[177px] lg:ml-[168px] mt-[50px] lg:text-center">
           <p className="font-semibold text-[54px] leading-[60px]">STEP INTO WHAT FEELS GOOD</p>
           <p className="font-medium lg:text-[15px] ex:text-[13px] leading-6 mt-[10px]">Cause everyone should know the feeling of running in that perfect pair.</p>
           <div className="w-[152.42px] h-[39px] py-[6px] text-center bg-black rounded-[30px] text-white lg:ml-[420px] lg:mt-[40px] ex:mt-[20px]">
            <p>Find Your Shoe</p>
           </div>
          </div>
       </div>

       <div className="lg:w-[1344px] ex:w-[380px] ex:h-[1700px] lg:h-[561px] lg:mt-[50px] ex:mt-[-300px] lg:ml-[48px] ex:ml-[10px]">
         <p className="font-semibold text-[23px] leading-7">Gear Up</p>
         <div className="w-[1344px] h-[509px] mt-[20px] lg:flex gap-[10px]">
           <div className="w-[666px] h-[509px]">
             <div className="w-[211px] h-[48px] ml-[450px] lg:flex ex:hidden">
               <p className="font-semibold text-[15px] leading-6 mt-[11px]">Shop Men's</p>
               <div className="flex gap-[12px] ml-[12px]">
                 <div className="w-[48px] h-[48px] rounded-[24px] bg-[#F5F5F5] hover:bg-[#E5E5E5]"><IoIosArrowBack className="w-[23px] h-[23px] ml-[6px] mt-[12px] hover:text-[#00000060]" /></div>
                 <div className="w-[48px] h-[48px] rounded-[24px] bg-[#F5F5F5] hover:bg-[#E5E5E5]"><IoIosArrowForward className="w-[23px] h-[23px] ml-[14px] mt-[12px] hover:text-[#00000060]" /></div>
                </div>
             </div>

             <div className="w-[666px] h-[447px] mt-[10px] lg:flex gap-[30px] pt-[20px]">
               <div className="w-[300px] h-[393px]">
                 <Image src={pic5} alt="pics" className="w-[300px] h-[300px]" />
                 <div className="w-[284px] h-[72px]">
                   <p className="font-medium text-[15px] leading-6">Nike Dri-FIT ADV TechKnit Ultra</p>
                   <p className="text-[#757575] font-normal text-[16px] leading-6">Men's Short-Sleeve <br /> Running Top</p>
                   <p className="font-medium text-[15px] leading-6 text-right mt-[-70px]">₹ 3 895</p>
                 </div>
               </div>

               <div className="w-[300px] h-[393px]">
                 <Image src={pic6} alt="pics" className="w-[300px] h-[300px]" />
                 <div className="w-[284px] h-[72px]">
                   <p className="font-medium text-[15px] leading-6">Nike Dri-FIT Challenger</p>
                   <p className="text-[#757575] font-normal text-[16px] leading-6">Men's 18cm (approx.) 2- <br /> in-1 Versatile Shorts</p>
                   <p className="font-medium text-[15px] leading-6 text-right mt-[-70px]">₹ 2 495</p>
                 </div>
               </div>
             </div>
           </div>

           <div className="w-[666px] h-[509px] lg:mt-0 ex:mt-[280px]">
             <div className="w-[234px] h-[48px] ml-[430px] lg:flex ex:hidden">
               <p className="font-semibold text-[15px] leading-6 mt-[11px]">Shop Women's</p>
               <div className="flex gap-[12px] ml-[12px]">
                 <div className="w-[48px] h-[48px] rounded-[24px] bg-[#F5F5F5] hover:bg-[#E5E5E5]"><IoIosArrowBack className="w-[23px] h-[23px] ml-[6px] mt-[12px] hover:text-[#00000060]" /></div>
                 <div className="w-[48px] h-[48px] rounded-[24px] bg-[#F5F5F5] hover:bg-[#E5E5E5]"><IoIosArrowForward className="w-[23px] h-[23px] ml-[14px] mt-[12px] hover:text-[#00000060]" /></div>
                </div>
             </div>

             <div className="w-[666px] h-[447px] mt-[10px] lg:flex gap-[30px] pt-[20px]">
               <div className="w-[300px] h-[393px] lg:ml-[40px]">
                 <Image src={pic7} alt="pics" className="w-[300px] h-[300px]" />
                 <div className="w-[284px] h-[72px]">
                   <p className="font-medium text-[15px] leading-6">Nike Dri-FIT ADV Run Division</p>
                   <p className="text-[#757575] font-normal text-[16px] leading-6">Women's Long-Sleeve <br /> Running Top</p>
                   <p className="font-medium text-[15px] leading-6 text-right mt-[-70px]">₹ 5 295</p>
                 </div>
               </div>

               <div className="w-[300px] h-[393px]">
                 <Image src={pic8} alt="pics" className="w-[300px] h-[300px]" />
                 <div className="w-[284px] h-[72px]">
                   <p className="font-medium text-[15px] leading-6">Nike Fast</p>
                   <p className="text-[#757575] font-normal text-[16px] leading-6">Women's Mid-Rise 7/8 Running <br /> Leggings with Pockets</p>
                   <p className="font-medium text-[15px] leading-6 text-right mt-[-70px]">₹ 3 795</p>
                 </div>
               </div>
             </div>
           </div>

         </div>
       </div>

       <div className="lg:w-[1344px] ex:w-[380px] h-[977px] mt-[50px] lg:ml-[48px] ex:ml-[7px]">
         <p className="font-semibold text-[22px] leading-6">Don't Miss</p>
         <Image src={pic9} alt="pics" className="lg:w-[1344px] lg:h-[700px] ex:w-[370px] ex:h-[210px] mt-[20px]" />
         <div className="lg:w-[1008px] ex:w-[380px] h-[177px] lg:ml-[168px] mt-[50px] text-center">
           <p className="font-semibold text-[52px] leading-[60px]">FLIGHT ESSENTIALS</p>
           <p className="font-normal text-[15px] leading-6 mt-[20px]">Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
           <div className="w-[80px] h-[39px] bg-black rounded-[30px] py-[7px] lg:ml-[460px] ex:ml-[155px] mt-[30px]">
             <p className="text-white font-normal text-[15px]">Shop</p>
           </div>
         </div>
       </div>

       <div className="lg:w-[1344px] ex:w-[380px] h-[592px] lg:ml-[48px] ex:ml-[7px] lg:mt-[50px] ex:mt-[-360px]">
         <p className="font-semibold text-[23px] leading-7">The Essentials</p>
         <div className="lg:w-[1344px] ex:w-[380px] ex:h-[1500px] lg:h-[540px] lg:flex lg:gap-[11px] mt-[10px]">
           <div><Image src={pic10} alt="pics" className="lg:w-[440px] lg:h-[540px] ex:w-[370px] ex:h-[470px]" />
             <div className="w-[85px] h-[39px] relative mt-[-80px] ml-[30px] bg-white rounded-[30px] text-center py-[6px]"><p className="font-medium text-[14px] leading-6">Men's</p></div>
           </div>
           <div><Image src={pic11} alt="pics" className="lg:w-[440px] lg:h-[540px] ex:w-[370px] ex:h-[470px] lg:mt-0 ex:mt-[60px]" />
             <div className="w-[108px] h-[39px] relative mt-[-80px] ml-[30px] bg-white rounded-[30px] text-center py-[6px]"><p className="font-medium text-[14px] leading-6">Women's</p></div>
           </div>
           <div><Image src={pic12} alt="pics" className="lg:w-[440px] lg:h-[540px] ex:w-[370px] ex:h-[470px] lg:mt-0 ex:mt-[60px]" />
              <div className="w-[85px] h-[39px] relative mt-[-80px] ml-[30px] bg-white rounded-[30px] text-center py-[6px]"><p className="font-medium text-[14px] leading-6">Kids'</p></div>
           </div>
         </div>
       </div>

       <div className="lg:w-[880px] lg:h-[192px] ex:w-[380px] ex:h-[740px] lg:ml-[280px] ex:ml-[7px] lg:mt-[80px] ex:mt-[1000px] lg:flex gap-[46px]">
         <div>
           <p className="font-medium text-[15px] leading-6">Icons</p>
           <div className="w-[184px] h-[144px] text-[#757575]">
             <p className="mt-[11px]">Air Force 1</p>
             <p className="mt-[11px]">Huarache</p>
             <p className="mt-[11px]">Air Max 90</p>
             <p className="mt-[11px]">Air Max 95</p>
           </div>
          </div>

         <div>
           <p className="font-medium text-[15px] leading-6">Shoes</p>
           <div className="w-[184px] h-[144px] text-[#757575]">
            <p className="mt-[11px]">All Shoes</p>
            <p className="mt-[11px]">Custom Shoes</p>
            <p className="mt-[11px]">Jordan Shoes</p>
            <p className="mt-[11px]">Running Shoes</p>
           </div>
         </div>

         <div>
           <p className="font-medium text-[15px] leading-6">Clothing</p>
           <div className="w-[184px] h-[144px] text-[#757575]">
             <p className="mt-[11px]">All Clothing</p>
             <p className="mt-[11px]">Modest Wear</p>
             <p className="mt-[11px]">Hoodies & Pullovers</p>
             <p className="mt-[11px]">Shirts & Tops</p>
           </div>
         </div>

         <div>
           <p className="font-medium text-[15px] leading-6">Kids'</p>
           <div className="w-[184px] h-[144px] text-[#757575]">
            <p className="mt-[11px]">Infant & Toddler Shoes</p>
            <p className="mt-[11px]">Kids' Shoes</p>
            <p className="mt-[11px]">Kids' Jordan Shoes</p>
            <p className="mt-[11px]">Kids' Basketball Shoes</p>
           </div>
         </div>
       </div>
    </div>
</div>
}