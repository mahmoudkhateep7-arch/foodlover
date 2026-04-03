import imgLogo from './img/logo.png'
import FiveLinksC from './utils/FiveLinksC'
import MiddleTetx from './utils/MiddleContent'
export default function NavC() {
  return (
    <header id='header' className='h-screen bg-[url("./img/home_bg.jpeg")] bg-cover bg-center bg-no-repeat relative  '>
      <div className="absolute  h-full bg-[rgb(0,0,0,0.6)] w-full  top-0"></div>

      {/* logo and links */}
      <div className='flex relative z-10 justify-between  items-center'>
        <img className='w-20  ml-20 ' src={imgLogo} alt="Food Lover Logo" />
        <ul className='flex  text-white font-semibold  mr-20'>
          <FiveLinksC></FiveLinksC>
        </ul>
      </div>

      {/* content */}
      <MiddleTetx></MiddleTetx>

    </header>
  )
}