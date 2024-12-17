import Image from "next/image"
import deliver from "@/app/images/deliver.png"
import pic1 from "@/app/images/home6.png"
import pic2 from "@/app/images/home4.png"
import { MdLocationPin } from "react-icons/md";
import payment from "@/app/images/payment.png"

export default function Checkout(){
 return <div className="font-sans">
   <div className="lg:w-[880px] lg:h-[2376px] lg:ml-[289px] lg:flex lg:gap-[118px]">
               {/* LHS  */}
     <div className="lg:w-[440px] lg:h-[2206px] lg:mt-[70px]">
        <div className="lg:w-[440px] ex:w-[auto] h-[386px] pt-[20px]">
          <p className="font-semibold lg:text-[21px] leading-6">How would you like to get your order?</p>
          <p className="font-normal text-[14px] mt-[10px] leading-5">Customs regulation for India require a copy of the recipient's KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information. Learn More</p>
          <div className="lg:w-[440px] ex:w-[360px] lg:h-[82px] ex:h-[50px] border-[2px] mt-[60px] rounded-[12px] flex border-black lg:py-[29px] ex:py-[10px] lg:pr-[307px] pl-[21px]">
             <Image src={deliver} alt="deliver" className="lg:w-[19px] lg:h-[19px] ex:w-[15px] ex:h-[15px] lg:mt-0 ex:mt-[5px]" />
             <p className="font-medium text-[15px] leading-6 ml-[20px]">Deliver It</p>
          </div>
        </div> 
        <div className="lg:w-[440px] h-[1504px] m-[2px]">
          <p className="font-semibold text-[21px] leading-6">Enter your name and address:</p>
          <div className="lg:w-[440px] ex:w-[380px] h-[720px] mt-[20px]">
             <input type="text" placeholder="First Name" className="lg:w-[440px] ex:w-[360px] h-[56px] text-[#757575] rounded-[4px] py-[16px] pr-[20.19px] pl-[16px] outline-none border-[2px] border-[#00000060]" />
             <input type="text" placeholder="Last Name" className="lg:w-[440px] ex:w-[360px] h-[56px] text-[#757575] rounded-[4px] py-[16px] pr-[20.19px] pl-[16px] outline-none border-[2px] border-[#00000060] mt-[35px]" />
             <input type="text" placeholder="Address Line 1" className="lg:w-[440px] ex:w-[360px] h-[56px] text-[#757575] rounded-[4px] py-[16px] pr-[20.19px] pl-[16px] outline-none border-[2px] border-[#00000060] mt-[35px]" />
              <p className="text-[#757575] font-normal text-[11px] leading-5 ml-[20px]">We do not ship to P.O. boxes</p>
             <input type="text" placeholder="Address Line 2" className="lg:w-[440px] ex:w-[360px] h-[56px] text-[#757575] rounded-[4px] py-[16px] pr-[20.19px] pl-[16px] outline-none border-[2px] border-[#00000060] mt-[35px]" />
             <input type="text" placeholder="Address Line 3" className="lg:w-[440px] ex:w-[360px] h-[56px] text-[#757575] rounded-[4px] py-[16px] pr-[20.19px] pl-[16px] outline-none border-[2px] border-[#00000060] mt-[35px]" />
             <div className="lg:w-[440px] ex:w-[380px] h-[56px] flex  mt-[35px]">
               <input type="text" placeholder="Postal Code" className="lg:w-[211.19px] ex:w-[160px] h-[56px] text-[#757575] rounded-[4px] py-[16px] pr-[20.19px] pl-[16px] border-[2px] border-[#00000060] outline-none" />
               <input type="text" placeholder="Locality" className="lg:w-[211.19px] ex:w-[160px] h-[56px] text-[#757575] ml-[17px] rounded-[4px] py-[16px] pr-[20.19px] pl-[16px] border-[2px] border-[#00000060] outline-none" />
             </div>
             <div className="lg:w-[440px] ex:w-[380px] h-[56px] flex mt-[35px] text-[#757575]">
                <input type="text" placeholder="State/Territory" className="lg:w-[211.19px] ex:w-[160px] h-[56px] text-[#757575] rounded-[4px] py-[16px] pl-[16px] border-[2px] border-[#00000060] outline-none" />
                <input type="text" placeholder="pakistan" className="lg:w-[211.19px] ex:w-[160px] h-[56px] text-[#757575] ml-[17px] rounded-[4px] py-[16px] pr-[20.19px] pl-[16px] border-[2px] border-[#00000060] outline-none" />
             </div>
             <div className="w-[440px] h-[24px] mt-[20px] flex text-[#757575]">
                <div className="w-[18px] h-[18px] border-[1px] border-[#00000068] rounded mt-[3px] ml-[3px]"></div>
                <p className="font-medium text-[15px] leading-6 ml-[10px]">Save this address to my profile</p>
             </div>

             <div className="w-[440px] h-[24px] mt-[20px] flex">
                <div className="w-[18px] h-[18px] bg-[#CCCCCC] rounded mt-[3px] ml-[3px]"></div>
                <p className="font-medium text-[15px] leading-6 ml-[10px]">Make this my preferred address</p>
             </div>
          </div>
          <div className="w-[440px] h-[256px] pt-[10px]">
            <p className="font-semibold text-[21px] leading-6">What's your contact information?</p>
            <input type="text" placeholder="Email" className="lg:w-[440px] ex:w-[360px] h-[56px] text-[#757575] border-[2px] border-[#00000060] mt-[30px] py-[16px] lg:pr-[13px] pl-[16px] outline-none rounded-[4px]" />
             <p className="text-[#757575] font-normal text-[11px] leading-5 ml-[20px]">A confirmation email will be sent after checkout.</p>
            <input type="text" placeholder="Phone Number" className="lg:w-[440px] ex:w-[360px] h-[56px] text-[#757575] border-[2px] border-[#00000060] mt-[40px] py-[16px] pr-[83px] pl-[16px] outline-none rounded-[4px]" />
            <p className="text-[#757575] font-normal text-[11px] leading-5 ml-[20px]">A carrier might contact you to confirm delivery.</p>
          </div>
          <div className="w-[440px] h-[248px] pt-[20px]">
             <p className="font-semibold text-[21px] leading-6">What's your PAN?</p>
             <input type="text" placeholder="PAN" className="lg:w-[440px] ex:w-[360px] h-[56px] border-[1px] text-[#757575] mt-[10px] mb-[5px] border-[#00000060] outline-none pl-[16px] pr-[20.19px] py-[16px]" />
             <p className="text-[#757575] lg:w-[440px] ex:w-[380px] text-[15px] mt-[4px]">Enter your PAN to enable payment with UPI, Net Banking or local card methods</p>
             <div className="w-[440px] h-[30px] mt-[14px] flex">
                <div className="w-[17px] h-[17px] rounded border-[1px] border-[#00000060] mt-[4px] ml-[3px]"></div>
                <p className="leading-6 text-[12px] font-normal ml-[10px]">Save PAN details to Nike Profile</p>
             </div>
          </div>
          <div className="lg:w-[440px] w-[380px] h-[42px] flex">
            <div className="w-[18px] h-[18px] rounded-[4px] border-[1px] ml-[4px] mt-[5px] border-[#00000060] mr-[10px]"></div>
            <p className="lg:w-[400px] ex:w-[300px] lg:ml-0 ex:ml-[10px] text-[13px] font-medium">I have read and consent to eShopWorld processing my information in accordance with the Privacy Statement and Cookie Policy. eShopWorld is a trusted Nike partner.</p>
          </div>
          <div className="lg:w-[440px] ex:w-[300px] h-[60px] lg:ml-0 ex:ml-[20px] rounded-[30px] bg-[#F5F5F5] mt-[100px] pt-[15px]">
             <p className="font-medium text-[#757575] text-[15px] leading-7 text-center">Continue</p>
          </div>
        </div>
        <div className="w-[440px] h-[316px]">
           <input type="text" placeholder="Delivery" className="lg:w-[440px] ex:w-[360px] h-[57px] border-[1px] border-[#00000060] text-black outline-none rounded-[4px] py-[16px] pl-[16px] pr-[20.19px] mt-[25px]" />
           <input type="text" placeholder="Shipping" className="lg:w-[440px] ex:w-[360px] h-[57px] border-[1px] border-[#00000060] text-[#757575] outline-none rounded-[4px] py-[16px] pl-[16px] pr-[20.19px] mt-[21px]" />
           <input type="text" placeholder="Billing" className="lg:w-[440px] ex:w-[360px] h-[57px] border-[1px] border-[#00000060] text-[#757575]  outline-none rounded-[4px] py-[16px] pl-[16px] pr-[20.19px] mt-[21px]" />
           <input type="text" placeholder="Payment" className="lg:w-[440px] ex:w-[360px] h-[57px] border-[1px] border-[#00000060] text-[#757575]  outline-none rounded-[4px] py-[16px] pl-[16px] pr-[20.19px] mt-[21px]" />
        </div>
     </div>

                {/* RHS  */}
     <div className="w-[320px] h-[721px] mt-[70px]">
       <p className="font-semibold text-[21px] leading-6">Order Summary</p>
       <div className="w-[320px] h-[135px] mt-[10px]">
          <div className="w-[320.06px] h-[34px] flex items-center text-[#8D8D8D]  justify-between px-[13px]">
            <p>Subtotal</p>
            <p>₹ 20 890.00</p>
          </div>
          <div className="w-[320.06px] h-[34px] mt-[2px] flex items-center text-[#8D8D8D] justify-between px-[13px]">
            <p>Delivery/Shipping</p>
            <p>Free</p>
          </div>
          <div className="w-[320px] h-[54px] border-t-[2px] border-b-[2px] border-black mt-[10px] flex items-center justify-between px-[13px] font-medium text-[15px] leading-6">
            <p>Total</p>
            <p>₹ 20 890.00</p> 
          </div>
          <p className="text-[10px] font-normal leading-5 mt-[10px]">(The total reflects the price of your order, including all duties and taxes)</p>
       </div>
       <div className="w-[320px] h-[474px] mt-[80px]">
          <p className="font-semibold text-[15px] leading-7">Arrives Mon, 27 Mar - Wed, 12 Apr</p>
            <div className="w-[320px] h-[208px] flex">
               <Image src={pic1} alt="pics" className="w-[208px] h-[208px] mt-[10px]" />
               <div className="ml-[5px]">
                 <p className="text-[13px] w-[85.53px] h-[120px] leading-5 font-medium mt-[10px]">Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top</p>
                 <div className="text-[13px] leading-5 font-medium text-[#8D8D8D]">
                   <p>Qty 1</p>
                   <p>Size L</p>
                   <p>₹ 3 895.00</p>
                  </div>
               </div>
            </div>
            <div className="w-[320px] h-[208px] flex">
              <Image src={pic2} alt="pics" className="w-[208px] h-[208px] mt-[20px]" />
              <div className="ml-[5px]">
                 <p className="text-[13px] w-[80.26px] h-[72px] leading-5 font-medium mt-[30px]">Nike Air Max 97 SE Men's Shoes</p>
                 <div className="text-[13px] leading-5 font-medium text-[#8D8D8D]">
                   <p>Qty 1</p>
                   <p>Size UK 8</p>
                   <p>₹ 16 995.00</p>
                  </div>
               </div>
            </div>
       </div>
     </div>
   </div>

   <div className="lg:w-[1411px] ex:w-[380px] lg:h-[51px] ex:h-[150px] bg-black pt-[12px] lg:mt-0 ex:mt-[90px] lg:flex">
     <div className="w-[268.3px] h-[27px] flex lg:ml-0 ex:ml-[30px]">
       <div className="w-[80px] h-[24px] flex mt-[2px]">
          <a href="https://www.google.com/maps"><MdLocationPin className="text-white hover:text-[#7E7E7E]" /></a>
         <p className="font-semibold text-white text-[13px]">Pakistan</p>
       </div>
       <p className="font-medium text-[11px] leading-6 text-white">© 2023 NIKE, Inc. All Rights Reserved</p>
     </div>
     <div className="w-[240px] h-[27px] lg:ml-[25px] ex:ml-[44px] lg:mt-0 ex:mt-[10px] flex justify-between ">
       <p className="font-medium text-[11px] leading-6 text-[#8D8D8D]">Terms of Use</p>
       <p className="font-medium text-[11px] leading-6 text-[#8D8D8D]">Terms of Sale</p>
       <p className="font-medium text-[11px] leading-6 text-[#8D8D8D]">Privacy Policy</p>
     </div>
     <div className="lg:w-[601px] ex:w-[380px] h-[27px] lg:ml-[240px] lg:mt-0 ex:mt-[40px]">
       <Image src={payment} alt="payment"/>
     </div>
   </div>
</div>
}