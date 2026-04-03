import { iconsArray } from "./iconsArray";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function LeftSide() {
  return (
    <div id="left" className="bg-gdreen-500 p-2 [&_p]:text-[#9a9a9a] [&_p]:flex [&_p]:gap-2.5 [&_p]:items-center  w-[50%] flex flex-col gap-7.5 leading-[1.7]">

      <div className="bg-amberc-200 [&_svg]:text-brand">
        <h3 className="text-[28px] pb-2.5">ADDRESS</h3>
        <p>
          <FontAwesomeIcon icon={iconsArray.faLocationDot}></FontAwesomeIcon>
          <span>Hosary Mosque, 6 october, Egypt</span>
        </p>
        <p >
          <FontAwesomeIcon icon={iconsArray.faPhone}></FontAwesomeIcon>
          <span>Phone: 123456789</span>
        </p>
        <p>
          <FontAwesomeIcon icon={iconsArray.faEnvelope}></FontAwesomeIcon>
          <span>support@foodlover.com</span>
        </p>
      </div>

      <div>
        <h3 className="text-[28px] pb-2.5">WORKING HOURS</h3>
        <p>Weekdays: 11:00 am - 10:00 pm</p>
        <p>Weekends: 10:00 am - 11:00 pm</p>
      </div>

      <div>
        <h3 className="text-[28px] pb-2.5">FOLLOW US</h3>
        <div className="flex gap-2 text-xl text-white!">
          <a href="#"><FontAwesomeIcon className="bg-gray-600 p-3 rounded-[50%] lg:hover:rounded-none transition-all duration-150" icon={iconsArray.faFacebookF}></FontAwesomeIcon></a>
          <a href="#"><FontAwesomeIcon className="bg-gray-600 p-3 rounded-[50%] lg:hover:rounded-none transition-all duration-150" icon={iconsArray.faTwitter}></FontAwesomeIcon></a>
          <a href="#"><FontAwesomeIcon className="bg-gray-600 p-3 rounded-[50%] lg:hover:rounded-none transition-all duration-150" icon={iconsArray.faInstagram}></FontAwesomeIcon></a>
        </div>

      </div>

    </div>
  )
}