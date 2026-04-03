import LearnMoreLink from "./utils/LearnMoreLinkC";
import TopTextC from "./utils/TopText";
import menuArray from './utils/menuArray'
export default function Menu() {
  return (
    <section className="bg-[#f4f4f4] py-10" id="Menu">
      <div id="menu" className=' max-w-275  mx-auto '>
        <TopTextC h2color="text-[#9a9a9a]" title="Our Special menu" ptext="order two get third for free"></TopTextC>

        <div id="parent of left and right" className="  flex flex-col  gap-20 ">
          {menuArray.map((item) => {
            if (item.id > 6) { return }
            return (
              <div className="    flex gap-25 " key={item.id}>
                <div className="flex-1 flex gap-1  items-center ">
                  <img className="w-20 rounded-[50%] mr-5 " src={item.imgUrl} alt={item.name} />
                  <div className="">
                    <h3 className="pb-2.5 bg-amber-7m00 flex justify-between font-semibold text-[#383848] border-b border-dashed border-[#c2bdbd]">{item.name} <span className="text-brand">${item.price}</span></h3>

                    <p className="mt-2.5">{item.description}</p>
                  </div>
                </div>
                <div className="flex-1   flex gap-1 items-center ">
                  <img className="w-20 rounded-[50%] mr-5 " src={menuArray[item.id + 5].imgUrl} alt={menuArray[item.id + 5].name} />
                  <div className=" flex-1 h-full">
                    <h3 className="pb-2.5 bg-amber-7m00 flex justify-between font-semibold text-[#383848] border-b border-dashed border-[#c2bdbd]">{menuArray[item.id + 5].name} <span className="text-brand">${menuArray[item.id + 5].price}</span></h3>

                    <p className="mt-2.5">{menuArray[item.id + 5].description}</p>
                  </div>
                </div>
              </div>
            )
          })}


        </div>
        <div className=" flex justify-center items-center">
          <LearnMoreLink text="Explore Full Menu"></LearnMoreLink>
        </div>
      </div>

    </section>
  )
}