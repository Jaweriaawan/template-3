import Image from "next/image"
import pic from "@/app/images/pp.png"
import { IoCartOutline } from "react-icons/io5";

export default function Productdetail(){
  return <div className="lg:w-[1200px] lg:h-[1125px] ex:w-[390px] ex:h-[900px] lg:pt-[200px] ex:pt-[20px] lg:ml-[150px] lg:flex">
      <Image src={pic} alt="pic" className="lg:w-[653px] lg:h-[653px] ex:w-[390px] h-[390px]" />
      <div className="w-[376px] h-[1041px] ml-[170px]">
         <p className="lg:w-[367px] lg:h-[96px] ex:ml-[-160px] ex:mt-[20px] lg:mt-0 lg:ml-0 font-medium text-[48px] leading-[48px]">Nike Air Force 1 PLT.AF.ORM</p>
         <div className="w-[374px] h-[413px] mt-[10px]">
             <p className="font-normal lg:text-[15px] ex:w-[360px] ex:h-[252px] ex:text-[13px] lg:w-[374px] lg:h-[252px] lg:mt-[30px] lg:ml-0 leading-7 mt-[30px] ex:ml-[-160px] ex:mt-[20px]">Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.</p>
             <p className="font-medium text-[36px] leading-7 lg:mt-[40px] lg:ml-0 ex:mt-[-25px] ex:ml-[-160px]">₹ 8 695.00</p>
             <div className="w-[174px] h-[44px] bg-black rounded-[30px] flex text-white lg:mt-[60px] lg:ml-0 ex:ml-[-160px] ex:mt-[30px]">
                <IoCartOutline className="w-[29px] h-[29px] ml-[20px] mt-[7px]" />
                <p className="font-medium text-[15px] leading-6 mt-[10px] ml-[3px]">Add To Cart</p>
             </div>
         </div>
      </div>
</div>
}