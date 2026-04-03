import imgAbout from './img/about_img.png'
import LearnMoreLink from './utils/LearnMoreLinkC'
import TopTextC from './utils/TopText'
import TowPTagsC from './utils/TowPTagsC'
export default function About() {
  return (
    <div id="About" className=" bg-[#f4f4f4] py-10   flex justify-center ">
      <div className=' max-w-275  mx-auto'>

        <TopTextC h2color='text-[#383848]' title={'The Food Lover history'}></TopTextC>

        <div className=' flex justify-between'>
          <div className=''>
            <TowPTagsC></TowPTagsC>
            <LearnMoreLink></LearnMoreLink>
          </div>

          <img className=' w-112.5' src={imgAbout} alt="pizza" />
        </div>

      </div>
    </div>
  )
}