import { PiSlidersHorizontal } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoSearchOutline } from 'react-icons/io5';
import Image from "next/image";
import pic1 from "@/app/images/item1.png"
import pic2 from "@/app/images/item2.png"
import pic3 from "@/app/images/item3.png"
import pic4 from "@/app/images/item4.png"
import pic5 from "@/app/images/item5.png"
import pic6 from "@/app/images/item6.png"
import pic7 from "@/app/images/item7.png"
import pic8 from "@/app/images/item8.png"
import pic9 from "@/app/images/item9.png"
import pic10 from "@/app/images/item10.png"
import pic11 from "@/app/images/item11.png"
import pic12 from "@/app/images/item12.png"
import pic13 from "@/app/images/item13.png"
import pic14 from "@/app/images/item14.png"
import pic15 from "@/app/images/item15.png"
import pic16 from "@/app/images/item16.png"
import pic17 from "@/app/images/item17.png"
import pic18 from "@/app/images/item18.png"
import pic19 from "@/app/images/item19.png"
import pic20 from "@/app/images/item20.png"
import pic21 from "@/app/images/item21.png"
import pic22 from "@/app/images/item22.png"
import pic23 from "@/app/images/item23.png"
import pic24 from "@/app/images/item24.png"
import pic25 from "@/app/images/item25.png"
import pic26 from "@/app/images/item26.png"
import pic27 from "@/app/images/item27.png"
import pic28 from "@/app/images/item28.png"
import pic29 from "@/app/images/item29.png"
import pic30 from "@/app/images/item30.png"


export default function Allproducts(){
 return <div className="font-sans">
  <div className="w-[1440px] h-[6200px]">
    <div className="w-[1440px] h-[51px] flex pt-[10px] pl-[25px]">
       <p className="font-semibold text-[24px] leading-[31.2px]">New (500)</p>
       <div className="w-[225px] h-[28px] ml-[1060px] mt-[2px] flex">
         <p className="font-medium text-[16px] leading-7">Hide Filters</p>
         <PiSlidersHorizontal className="w-[20px] h-[20px] ml-[4px] mt-[6px]" />
         <p className="font-medium text-[16px] leading-7 ml-[28px]">Sort By</p>
         <IoIosArrowDown className="w-[20px] h-[20px] mt-[5px] ml-[7px]" />
       </div>
    </div>
                
     <div className="w-[1440px] h-[6140px] flex">
                               {/* LHS  */}
        <div className="w-[260px] h-[949px] mt-[20px] pl-[27px] pt-[6px]">
           <hr className="w-[7px] h-[329px] rounded-[7px] bg-[#000000] opacity-[50%] ml-[220px]" />
           <div className="w-[192px] h-[400px] mt-[-330px]">
             <p className="font-medium text-[15px] leading-[21px]">Shoes</p>
             <p className="font-medium text-[15px] leading-[21px] mt-[12px]">Sports Bras</p>
             <p className="font-medium text-[15px] leading-[21px] mt-[12px]">Tops & T-Shirts</p>
             <p className="font-medium text-[15px] leading-[21px] mt-[12px]">Hoodies & Sweatshirts</p>
             <p className="font-medium text-[15px] leading-[21px] mt-[12px]">Jackets</p>
             <p className="font-medium text-[15px] leading-[21px] mt-[12px]">Trousers & Tights</p>
             <p className="font-medium text-[15px] leading-[21px] mt-[11px]">Shorts</p>
             <p className="font-medium text-[15px] leading-[21px] mt-[11px]">Tracksuits</p>
             <p className="font-medium text-[15px] leading-[21px] mt-[11px]">Jumpsuits & Rompers</p>
             <p className="font-medium text-[15px] leading-[21px] mt-[11px]">Skirts & Dresses</p>
             <p className="font-medium text-[15px] leading-[21px] mt-[12px]">Socks</p>
             <p className="font-medium text-[15px] leading-[21px] mt-[12px]">Accessories <br /> & Equipment</p>
           </div>
           <div className="w-[192px] h-[163px] border-t-[1px] border-[#00000060] mt-[40px] pt-[10px]">
             <div className="flex">
                <p className=" font-medium text-[16px] leading-6">Gender</p>
                <IoIosArrowUp className="ml-[100px] mt-[1px] w-[20px] h-[20px]" />
             </div>
             <div className="w-[196px] h-[80px] mt-[20px]">
               <div className="w-[188px] h-[24px] pt-[2px] flex">
                 <div className="w-[20px] h-[20px] rounded-[4px] ml-[3px] border-[1px] bg-[#CCCCCC] border-[#0000060]"></div>
                 <p className="font-normal text-[15px] leading-6 ml-[12px]">Men</p>
               </div>

               <div className="w-[188px] h-[24px] flex mt-[5px]">
                  <div className="w-[20px] h-[20px] rounded-[4px] ml-[3px] border-[1px] bg-[#CCCCCC] border-[#0000060]"></div>
                  <p className="font-normal text-[15px] leading-6 ml-[12px]">Women</p>
               </div>

               <div className="w-[188px] h-[24px] flex mt-[5px]">
                  <div className="w-[20px] h-[20px] rounded-[4px] ml-[3px] border-[1px] bg-[#CCCCCC] border-[#0000060]"></div>
                  <p className="font-normal text-[15px] leading-6 ml-[12px]">Unisex</p>
               </div>
             </div>
           </div>

           <div className="w-[192px] h-[134px] border-t-[1px] border-[#00000060] mt-[20px] pt-[9px]">
             <div className="flex">
                <p className=" font-medium text-[16px] leading-6">Kids</p>
                <IoIosArrowUp className="ml-[125px] mt-[1px] w-[20px] h-[20px]" />
             </div>
             <div className="w-[196px] h-[80px] mt-[20px]">
               <div className="w-[188px] h-[24px] pt-[2px] flex">
                 <div className="w-[20px] h-[20px] rounded-[4px] ml-[3px] border-[1px] bg-[#CCCCCC] border-[#0000060]"></div>
                 <p className="font-normal text-[15px] leading-6 ml-[12px]">Boys</p>
               </div>

               <div className="w-[188px] h-[24px] flex mt-[5px]">
                  <div className="w-[20px] h-[20px] rounded-[4px] ml-[3px] border-[1px] bg-[#CCCCCC] border-[#0000060]"></div>
                  <p className="font-normal text-[15px] leading-6 ml-[12px]">Girls</p>
               </div>
             </div>
           </div>

           <div className="w-[192px] h-[134px] border-t-[1px] border-[#00000060] mt-[20px] pt-[9px]">
             <div className="flex">
                <p className=" font-medium text-[16px] leading-6">Shop By Price</p>
                <IoIosArrowUp className="ml-[55px] mt-[1px] w-[20px] h-[20px]" />
             </div>
             <div className="w-[196px] h-[80px] mt-[10px]">
               <div className="w-[188px] h-[24px] pt-[2px] flex">
                 <div className="w-[20px] h-[20px] rounded-[4px] ml-[3px] border-[1px] bg-[#CCCCCC] border-[#0000060]"></div>
                 <p className="font-normal text-[15px] leading-6 ml-[12px]">Under ₹ 2 500.00</p>
               </div>

               <div className="w-[188px] h-[24px] flex mt-[5px]">
                  <div className="w-[20px] h-[20px] rounded-[4px] ml-[3px] border-[1px] bg-[#CCCCCC] border-[#0000060]"></div>
                  <p className="font-normal text-[15px] leading-6 ml-[12px]">₹ 2 501.00 - ₹ 7 500.00</p>
               </div>
             </div>
           </div>
        </div>
                                {/* RHS  */}
        <div className="w-[1092px] h-[6100px] ml-[80px] mt-[20px] grid grid-cols-3">
                            {/* 1st  */}
          <div className="w-[348px] h-[533px]">
             <Image src={pic1} alt="pics"  />
             <p className=" font-medium text-[15px] leading-7 text-[#9E3500] mt-[12px] mb-[4px]">Just In</p>
             <p className="font-medium text-[15px] leading-6">Nike Air Force 1 Mid '07</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">Men's Shoes</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">1 Colour</p>
             <p className="font-medium text-[15px] leading-7 mt-[5px]">MRP : ₹ 10 795.00</p>
          </div>
                             {/* 2  */}
          <div className="w-[348px] h-[533px]">
             <Image src={pic2} alt="pics"  />
             <p className=" font-medium text-[15px] leading-7 text-[#9E3500] mt-[12px] mb-[4px]">Just In</p>
             <p className="font-medium text-[15px] leading-6">Nike Court Vision Low Next Nature</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">Men's Shoes</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">1 Colour</p>
             <p className="font-medium text-[15px] leading-7 mt-[5px]">MRP : ₹ 4 995.00</p>
          </div>
                               {/* 3 */}
          <div className="w-[348px] h-[533px]">
             <Image src={pic3} alt="pics"  />
             <p className=" font-medium text-[15px] leading-7 text-[#9E3500] mt-[12px] mb-[4px]">Just In</p>
             <p className="font-medium text-[15px] leading-6">Nike Air Force 1 PLT.AF.ORM</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">Women's Shoes</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">1 Colour</p>
             <p className="font-medium text-[15px] leading-7 mt-[5px]">MRP : ₹ 8 695.00</p>
          </div>
                                 {/* 4 */}
          <div className="w-[348px] h-[533px]">
             <Image src={pic4} alt="pics"  />
             <p className=" font-medium text-[15px] leading-7 text-[#9E3500] mt-[12px] mb-[4px]">Just In</p>
             <p className="font-medium text-[15px] leading-6">Nike Air Force 1 React</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">Men's Shoes</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">1 Colour</p>
             <p className="font-medium text-[15px] leading-7 mt-[5px]">MRP : ₹ 13 295.00</p>
          </div>
                            {/* 5  */}
          <div className="w-[348px] h-[533px]">
             <Image src={pic5} alt="pics"  />
             <p className=" font-medium text-[15px] leading-7 text-[#9E3500] mt-[12px] mb-[4px]">Promo Exclusion</p>
             <p className="font-medium text-[15px] leading-6">Air Jordan 1 Elevate Low</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">Women's Shoes</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">1 Colour</p>
             <p className="font-medium text-[15px] leading-7 mt-[5px]">MRP : ₹ 11 895.00</p>
          </div>
                                   {/* 6 */}
          <div className="w-[348px] h-[533px]">
             <Image src={pic6} alt="pics"  />
             <p className=" font-medium text-[15px] leading-7 text-[#9E3500] mt-[12px] mb-[4px]">Just In</p>
             <p className="font-medium text-[15px] leading-6">Nike Standard Issue</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">Women's Basketball Jersey</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">1 Colour</p>
             <p className="font-medium text-[15px] leading-7 mt-[5px]">MRP : ₹ 2 895.00</p>
          </div>
                                   {/* 7 */}
          <div className="w-[348px] h-[533px]">
             <Image src={pic7} alt="pics"  />
             <p className=" font-medium text-[15px] leading-7 text-[#9E3500] mt-[12px] mb-[4px]">Promo Exclusion</p>
             <p className="font-medium text-[15px] leading-6">Nike Dunk Low Retro SE</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">Men's Shoes</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">1 Colour</p>
             <p className="font-medium text-[15px] leading-7 mt-[5px]">MRP : ₹ 9 695.00</p>
          </div>
                                   {/* 8 */}
          <div className="w-[348px] h-[533px]">
             <Image src={pic8} alt="pics"  />
             <p className=" font-medium text-[15px] leading-7 text-[#9E3500] mt-[12px] mb-[4px]">Sustainable Materials</p>
             <p className="font-medium text-[15px] leading-6">Nike Dri-FIT UV Hyverse</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">Men's Short-Sleeve Graphic Fitness Top</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">1 Colour</p>
             <p className="font-medium text-[15px] leading-7 mt-[5px]">MRP : ₹ 2 495.00</p>
          </div>
                                     {/* 9 */}
          <div className="w-[348px] h-[533px]">
             <Image src={pic9} alt="pics"  />
             <p className=" font-medium text-[15px] leading-7 text-[#9E3500] mt-[12px] mb-[4px]">Just In</p>
             <p className="font-medium text-[15px] leading-6">Nike Court Vision Low</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">Men's Shoes</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">1 Colour</p>
             <p className="font-medium text-[15px] leading-7 mt-[5px]">MRP : ₹ 5 695.00</p>
          </div>
                                     {/* 10 */}
          <div className="w-[348px] h-[533px]">
             <Image src={pic10} alt="pics"  />
             <p className=" font-medium text-[15px] leading-7 text-[#9E3500] mt-[12px] mb-[4px]">Just In</p>
             <p className="font-medium text-[15px] leading-6">Nike Dri-FIT Ready</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">Men's Short-Sleeve Fitness Top</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">3 Colours</p>
             <p className="font-medium text-[15px] leading-7 mt-[5px]">MRP : ₹ 2 495.00</p>
          </div>
                                    {/* 11 */}
          <div className="w-[348px] h-[533px]">
             <Image src={pic11} alt="pics"  />
             <p className=" font-medium text-[15px] leading-7 text-[#9E3500] mt-[12px] mb-[4px]">Just In</p>
             <p className="font-medium text-[15px] leading-6">Nike One Leak Protection: Period</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">Women's Mid-Rise 18cm (approx.) Biker Shorts</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">2 Colours</p>
             <p className="font-medium text-[15px] leading-7 mt-[5px]">MRP : ₹ 3 395.00</p>
          </div>
                                 {/* 12 */}
          <div className="w-[348px] h-[533px]">
             <Image src={pic12} alt="pics"  />
             <p className=" font-medium text-[15px] leading-7 text-[#9E3500] mt-[12px] mb-[4px]">Just In</p>
             <p className="font-medium text-[15px] leading-6">Nike Air Force 1 LV8 3</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">Older Kids' Shoe</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">1 Colour</p>
             <p className="font-medium text-[15px] leading-7 mt-[5px]">MRP : ₹ 7 495.00</p>
          </div>
                                  {/* 13 */}
          <div className="w-[348px] h-[533px]">
             <Image src={pic13} alt="pics"  />
             <p className=" font-medium text-[15px] leading-7 text-[#9E3500] mt-[12px] mb-[4px]">Just In</p>
             <p className="font-medium text-[15px] leading-6">Nike Blazer Low Platform</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">Women's Shoes</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">1 Colour</p>
             <p className="font-medium text-[15px] leading-7 mt-[5px]">MRP : ₹ 8 195.00</p>
          </div>
                                      {/* 14 */}
          <div className="w-[348px] h-[533px]">
             <Image src={pic14} alt="pics"  />
             <p className=" font-medium text-[15px] leading-7 text-[#9E3500] mt-[12px] mb-[4px]">Just In</p>
             <p className="font-medium text-[15px] leading-6">Nike Air Force 1 '07</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">Women's Shoe</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">2 Colours</p>
             <p className="font-medium text-[15px] leading-7 mt-[5px]">MRP : ₹ 8 195.00</p>
          </div>
                                        {/* 15 */}
          <div className="w-[348px] h-[533px]">
             <Image src={pic15} alt="pics"  />
             <p className=" font-medium text-[15px] leading-7 text-[#9E3500] mt-[12px] mb-[4px]">Just In</p>
             <p className="font-medium text-[15px] leading-6">Nike Pro Dri-FIT</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">Men's Tight-Fit Sleeveless Top</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">1 Colour</p>
             <p className="font-medium text-[15px] leading-7 mt-[5px]">MRP : ₹ 1 495.00</p>
          </div>
                                       {/* 16 */}
          <div className="w-[348px] h-[533px]">
             <Image src={pic16} alt="pics"  />
             <p className=" font-medium text-[15px] leading-7 text-[#9E3500] mt-[12px] mb-[4px]">Just In</p>
             <p className="font-medium text-[15px] leading-6">Nike Dunk Low Retro</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">Men's Shoes</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">1 Colour</p>
             <p className="font-medium text-[15px] leading-7 mt-[5px]">MRP : ₹ 8 695.00</p>
          </div>
                                        {/* 17 */}
          <div className="w-[348px] h-[533px]">
             <Image src={pic17} alt="pics"  />
             <p className=" font-medium text-[15px] leading-7 text-[#9E3500] mt-[12px] mb-[4px]">Just In</p>
             <p className="font-medium text-[15px] leading-6">Nike Air Max SC</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">Women's Shoes</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">2 Colour</p>
             <p className="font-medium text-[15px] leading-7 mt-[5px]">MRP : ₹ 5 995.00</p>
          </div>
                                       {/* 18 */}
          <div className="w-[348px] h-[533px]">
             <Image src={pic18} alt="pics"  />
             <p className=" font-medium text-[15px] leading-7 text-[#9E3500] mt-[12px] mb-[4px]">Just In</p>
             <p className="font-medium text-[15px] leading-6">Nike Dri-FIT UV Miler</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">Men's Short-Sleeve Running Top</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">1 Colour</p>
             <p className="font-medium text-[15px] leading-7 mt-[5px]">MRP : ₹ 1 695.00</p>
          </div>
                                          {/* 19 */}
          <div className="w-[348px] h-[533px]">
             <Image src={pic19} alt="pics"  />
             <p className=" font-medium text-[15px] leading-7 text-[#9E3500] mt-[12px] mb-[4px]">Just In</p>
             <p className="font-medium text-[15px] leading-6">Nike Air Max SYSTM</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">Older Kids' Shoes</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">1 Colour</p>
             <p className="font-medium text-[15px] leading-7 mt-[5px]">MRP : ₹ 6 495.00</p>
          </div>
                                          {/* 20 */}
          <div className="w-[348px] h-[533px]">
             <Image src={pic20} alt="pics"  />
             <p className=" font-medium text-[15px] leading-7 text-[#9E3500] mt-[12px] mb-[4px]">Just In</p>
             <p className="font-medium text-[15px] leading-6">Nike Alate All U</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">Women's Light-Support Lightly Lined U-Neck Printed Sports Bra</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">1 Colour</p>
             <p className="font-medium text-[15px] leading-7 mt-[5px]">MRP : ₹ 2 195.00</p>
          </div>
                                       {/* 21 */}
          <div className="w-[348px] h-[533px]">
             <Image src={pic21} alt="pics"  />
             <p className=" font-medium text-[15px] leading-7 text-[#9E3500] mt-[12px] mb-[4px]">Just In</p>
             <p className="font-medium text-[15px] leading-6">Nike Court Legacy Lift</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">Women's Shoes</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">1 Colour</p>
             <p className="font-medium text-[15px] leading-7 mt-[5px]">MRP : ₹ 7 495.00</p>
          </div>
                                             {/* 22 */}
          <div className="w-[348px] h-[533px]">
             <Image src={pic22} alt="pics"  />
             <p className=" font-medium text-[15px] leading-7 text-[#9E3500] mt-[12px] mb-[4px]">Just In</p>
             <p className="font-medium text-[15px] leading-6">Nike Swoosh</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">Women's Medium-support Padded Sports <br /> Bra Tank</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">2 Colour</p>
             <p className="font-medium text-[15px] leading-7 mt-[5px]">MRP : ₹ 3 095.00</p>
          </div>
                                    {/* 23 */}
          <div className="w-[348px] h-[533px]">
             <Image src={pic23} alt="pics"  />
             <p className=" font-medium text-[15px] leading-7 text-[#9E3500] mt-[12px] mb-[4px]">Just In</p>
             <p className="font-medium text-[15px] leading-6">Nike SB Zoom Janoski OG+</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">Shoes</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">1 Colour</p>
             <p className="font-medium text-[15px] leading-7 mt-[5px]">MRP : ₹ 8 595.00</p>
          </div>
                                       {/* 24 */}
          <div className="w-[348px] h-[533px]">
             <Image src={pic24} alt="pics"  />
             <p className=" font-medium text-[15px] leading-7 text-[#9E3500] mt-[12px] mb-[4px]">Just In</p>
             <p className="font-medium text-[15px] leading-6">Nike Dri-FIT Run Division Rise 365</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">Men's Running Tank</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">1 Colour</p>
             <p className="font-medium text-[15px] leading-7 mt-[5px]">MRP : ₹ 3 495.00</p>
          </div>
                                     {/* 25 */}
          <div className="w-[348px] h-[533px]">
             <Image src={pic25} alt="pics"  />
             <p className=" font-medium text-[15px] leading-7 text-[#9E3500] mt-[12px] mb-[4px]">Just In</p>
             <p className="font-medium text-[15px] leading-6">Nike Dri-FIT Challenger</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">Men's 18cm (approx.) 2-in-1 Versatile Shorts</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">1 Colour</p>
             <p className="font-medium text-[15px] leading-7 mt-[5px]">MRP : ₹ 2 495.00</p>
          </div>
                                       {/* 26 */}
          <div className="w-[348px] h-[533px]">
             <Image src={pic26} alt="pics"  />
             <p className=" font-medium text-[15px] leading-7 text-[#9E3500] mt-[12px] mb-[4px]">Just In</p>
             <p className="font-medium text-[15px] leading-6">Jordan Series ES</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">Jordan Series ES</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">2 Colour</p>
             <p className="font-medium text-[15px] leading-7 mt-[5px]">MRP : ₹ 7 495.00</p>
          </div>
                                        {/* 27 */}
          <div className="w-[348px] h-[533px]">
             <Image src={pic27} alt="pics"  />
             <p className=" font-medium text-[15px] leading-7 text-[#9E3500] mt-[12px] mb-[4px]">Just In</p>
             <p className="font-medium text-[15px] leading-6">Nike Outdoor Play</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">Older Kids' Oversized Woven Jacket</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">1 Colour</p>
             <p className="font-medium text-[15px] leading-7 mt-[5px]">MRP : ₹ 3 895.00</p>
          </div>
                                          {/* 28 */}
          <div className="w-[348px] h-[533px]">
             <Image src={pic28} alt="pics"  />
             <p className=" font-medium text-[15px] leading-7 text-[#9E3500] mt-[12px] mb-[4px]">Just In</p>
             <p className="font-medium text-[15px] leading-6">Nike Sportswear Trend</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">Older Kids' (Girls') High-waisted Woven Shorts</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">2 Colour</p>
             <p className="font-medium text-[15px] leading-7 mt-[5px]">MRP : ₹ 2 495.00</p>
          </div>
                                           {/* 29 */}
          <div className="w-[348px] h-[533px]">
             <Image src={pic29} alt="pics"  />
             <p className=" font-medium text-[15px] leading-7 text-[#9E3500] mt-[12px] mb-[4px]">Just In</p>
             <p className="font-medium text-[15px] leading-6">Nike Blazer Low '77 Jumbo</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">Women's Shoes</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">1 Colour</p>
             <p className="font-medium text-[15px] leading-7 mt-[5px]">MRP : ₹ 8 595.00</p>
          </div>
                                           {/* 30 */}
          <div className="w-[348px] h-[533px]">
             <Image src={pic30} alt="pics"  />
             <p className=" font-medium text-[15px] leading-7 text-[#9E3500] mt-[12px] mb-[4px]">Just In</p>
             <p className="font-medium text-[15px] leading-6">Nike SB Force 58</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">Skate Shoe</p>
             <p className="font-normal text-[15px] leading-6 text-[#757575]">1 Colour</p>
             <p className="font-medium text-[15px] leading-7 mt-[5px]">MRP : ₹ 5 995.00</p>
          </div>

        </div>
     </div>

     <div className="w-[1092] h-[259px] ml-[348px] mt-[2px] pt-[45px]">
       <p className="font-semibold text-[19px] leading-6">Related Categories</p>
       <div className="w-[1092] h-[174px] mt-[19px]">
          <button className="w-[160px] h-[34px] rounded-[20px] hover:border-white hover:text-white hover:bg-black font-medium text-[12px] leading-4 border-[#CCCCCC] border-[1px]">Best Selling Products</button>
          <button className="w-[104px] h-[34px] rounded-[20px] hover:border-white hover:text-white hover:bg-black font-medium text-[12px] leading-4 border-[#CCCCCC] border-[1px] ml-[10px]">Best Shoes</button>
          <button className="w-[165px] h-[34px] rounded-[20px] hover:border-white hover:text-white hover:bg-black font-medium text-[12px] leading-4 border-[#CCCCCC] border-[1px] ml-[10px]">New Basketball Shoes</button>
          <button className="w-[151px] h-[34px] rounded-[20px] hover:border-white hover:text-white hover:bg-black font-medium text-[12px] leading-4 border-[#CCCCCC] border-[1px] ml-[10px]">New Football Shoes</button>
          <button className="w-[139px] h-[34px] rounded-[20px] hover:border-white hover:text-white hover:bg-black font-medium text-[12px] leading-4 border-[#CCCCCC] border-[1px] ml-[10px]">New Men's Shoes</button>
          <button className="w-[153px] h-[34px] rounded-[20px] hover:border-white hover:text-white hover:bg-black font-medium text-[12px] leading-4 border-[#CCCCCC] border-[1px] ml-[10px]">New Running Shoes</button>
          <button className="w-[140px] h-[34px] rounded-[20px] hover:border-white hover:text-white hover:bg-black font-medium text-[12px] leading-4 border-[#CCCCCC] border-[1px] ml-[10px]">Best Men's Shoes</button>
          <button className="w-[145px] h-[34px] rounded-[20px] hover:border-white hover:text-white hover:bg-black font-medium text-[12px] leading-4 border-[#CCCCCC] border-[1px]">New Jordan Shoes</button>
          <button className="w-[159px] h-[34px] rounded-[20px] hover:border-white hover:text-white hover:bg-black font-medium text-[12px] leading-4 border-[#CCCCCC] border-[1px] ml-[10px]">Best Women's Shoes</button>
          <button className="w-[155px] h-[34px] rounded-[20px] hover:border-white hover:text-white hover:bg-black font-medium text-[12px] leading-4 border-[#CCCCCC] border-[1px] ml-[10px] mt-[20px]">Best Training & Gym</button>
       </div>
     </div>
  </div>
</div>
}
