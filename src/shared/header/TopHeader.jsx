
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
const TopHeader = () => {
    return (
        <div className=" py-2 ">

            <div className="flex flex-wrap justify-between items-center container mx-auto px-4 sm:px-8 md:px-12 lg:px-24  text-[#5CAF90] ">
                <div className="flex items-center gap-4 sm:gap-8 md:gap-12 ct ">
                    <div className="flex items-center gap-2">
                        <MdOutlinePhoneInTalk />
                        <p className="text-[12px] ct ">01755686905</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <BsWhatsapp />
                        <p className="text-[12px] ">013205857463</p>
                    </div>
                </div>
                <div className="hidden md:block">
                    <p className="text-[12px] ct">World's Fastest Online Shopping Destination</p>
                </div>
                <div className="hidden md:flex items-center ct text-[12px] gap-5">
                    <p>Help?</p>
                    <p>Trac Order?</p>
                    <p>English</p>
                    <p>Contact Us</p>
                </div>
            </div>

        </div>
    );
};

export default TopHeader;
