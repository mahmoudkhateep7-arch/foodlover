import { pastaMenu } from './utils/pastaMenu.ts'
import TopTextC from "./utils/TopText";

export default function Offers() {
  return (
    <div className="   py-10   bg-cover  bg-center bg-no-repeat bg-[url('./img/offer-background.jpg')]    flex justify-center  h-screen ">
      <div className=' max-w-275   mx-auto bsg-red-500 '>
        <div id='pchanges'>
          <TopTextC title={'Our Special Offers'} h2color={`text-brand`}></TopTextC>
        </div>
        {/* 3 offers container */}
        <div className='  flex justify-center   items-center text-white text-center'>

          {pastaMenu.map((item) => {
            return (
              <div key={item.id} className='   '>
                <img className='w-50  mx-auto' src={item.imgUrl} alt={item.name} />
                <div>
                  <h3 className='text-[25px] my-3.75'>{item.name}</h3>
                  <p className='text-[14px] px-5 font-light mb-3.75'>{item.description}</p>
                  <div className=''>
                    <del>{item.oldPrice}</del>
                    <span className='text-brand text-[18px] font-semibold ml-1.25'>{item.price}</span>
                  </div>
                </div>
              </div>
            )
          })}



        </div>
      </div>

    </div>
  )
}