import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { TiSocialInstagram } from "react-icons/ti";
import { MdLocationPin } from "react-icons/md";

export default function Footer(){
 return <div className="font-sans">
   <div className="lg:w-[1411px] lg:h-[331px] ex:w-[380px] ex:h-[780px] bg-black lg:pt-[30px] ex:pt-[5px]">
                 {/* info side  */}
      <div className="lg:w-[1007px] lg:h-[213px] lg:ml-[20px] lg:flex ex:w-[380px] ex:h-[500px]">
         <div className="lg:w-[239.81px] lg:h-[169.63px] ex:w-[380px] ex:h-[auto] ex:pl-[12px] lg:pl-0">
            <div className="font-medium lg:text-[11px] ex:text-[13px] text-white leading-[32.67px] lg:mt-0 ex:mt-[20px]">
               <p>Find A Store</p>
               <p>Become A Member</p>
               <p>Sign Up for Email</p>
               <p>Send Us Feedback</p>
               <p>Student Discounts</p>
            </div>
         </div>

         <div className="lg:w-[239.81px] lg:h-[213px] ex:w-[380px] ex:h-[auto] ml-[10px]">
            <div className="font-medium lg:text-[11px] ex:text-[13px] leading-6 text-white lg:mt-0 ex:mt-[20px]">
                <p>Get Help</p>
                <p className="text-[#7E7E7E]">Order Status</p>
                <p className="text-[#7E7E7E]">Delivery</p>
                <p className="text-[#7E7E7E]">Returns</p>
                <p className="text-[#7E7E7E]">Payment Options</p>
                <p className="text-[#7E7E7E]">Contact Us On Nike.com Inquiries</p>
                <p className="text-[#7E7E7E]">Contact Us On All Other Inquiries</p>
            </div>
         </div>

         <div className="lg:w-[239.81px] lg:h-[151px] ex:w-[380px] ex:h-[auto] ml-[10px]">
            <div className="font-medium lg:text-[11px] ex:text-[13px] leading-6 text-white lg:mt-0 ex:mt-[20px]">
                <p>About Nike</p>
                <p className="text-[#7E7E7E]">News</p>
                <p className="text-[#7E7E7E]">Careers</p>
                <p className="text-[#7E7E7E]">Investors</p>
                <p className="text-[#7E7E7E]">Sustainability</p>
            </div>
         </div>
      </div>

                   {/* social icons bar */}
      <div className="lg:w-[329px] lg:h-[37px] ex:w-[380px] h-[37px] lg:ml-[1030px] lg:mt-[-210px] ex:mt-[30px] lg:gap-[20px] ex:gap-[30px] flex">
        <div className="w-[32px] h-[32px] bg-[#7E7E7E] rounded-[100%] lg:ml-[120px] ex:ml-[10px] hover:bg-white">
         <a href=""><FaTwitter className="w-[20px] h-[20px] mt-[6px] ml-[7px]" /></a>
        </div>
        <div className="w-[32px] h-[32px] bg-[#7E7E7E] rounded-[100%] hover:bg-white">
          <a href=""><FaFacebookF className="w-[20px] h-[22px] mt-[5px] ml-[6px]" /></a>
        </div>
        <div className="w-[32px] h-[32px] bg-[#7E7E7E] rounded-[100%] hover:bg-white">
          <a href=""><TfiYoutube className="w-[22px] h-[22px] ml-[5px] mt-[4px]" /></a>
        </div>
        <div className="w-[32px] h-[32px] bg-[#7E7E7E] rounded-[100%] hover:bg-white">
          <a href=""><TiSocialInstagram className="w-[22px] h-[22px] ml-[5px] mt-[5px]" /></a>
        </div>
      </div>

                        {/* down part  */}
      <div className="lg:w-[1343px] h-[62px] ex:w-[380px] lg:mt-[196px] ex:mt-[30px] lg:ml-[20px] flex pt-[15px]">
              {/* L side  */}
        <div className="lg:w-[657.5px] ex:w-[380px] h-[32px] lg:mt-[12px] lg:pt-[15px] flex">
           <div className="lg:w-[72.28px] h-[15px] flex">
              <a href="https://www.google.com/maps"><MdLocationPin className="text-white hover:text-[#7E7E7E]" /></a>
              <p className="font-medium text-[13px] text-white">pakistan</p>
           </div>
           <p className="lg:w-[600px] ex:w-[380px] font-medium lg:text-[12px] ex:text-[10px] text-[#7E7E7E] lg:mt-[2px] ex:mt-[4px] ml-[6px]">© 2023 Nike, Inc. All Rights Reserved</p>
        </div>
                {/* R side  */}
        <div className="lg:w-[665px] lg:h-[46px] ex:w-[380px] ex:mt-[30px] lg:mt-0 ex:ml-[-370px] lg:ml-[20px]">
           <div className="font-medium lg:text-[15px] ex:text-[11px] text-[#7E7E7E] leading-7 flex lg:gap-[30px] ex:gap-[15px] mt-[10px]">
              <p className="lg:ml-[200px]">Guides</p>
              <p>Terms of Sale</p>
              <p>Terms of Use</p>
              <p>Nike Privacy Policy</p>
           </div>
        </div>
      </div>
   </div>
</div>
}