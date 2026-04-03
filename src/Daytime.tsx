import { daytimeArray } from './utils/daytimeArray'
export default function Daytime() {
  return (
    <section className="bg-black bg-[url('./img/daytime_bg.jpeg')] bg-no-repeat bg-cover   bg-center ">
      <div className="mx-automax-w-275  ">
        <div id="items container" className="  h-[40vh] flex text-white text-center justify-evenly items-center ">
          {daytimeArray.map((item) => {
            return (
              <div className='bg-admber-500 flemx-1' key={item.id}>
                <img className='bg-dwhite mx-auto' src={item.imgurl} alt={item.name} />
                <h3 className='text-[32px] mt-5 mb-2.5'>{item.name}</h3>
                <p className='font-medium'>{item.fromto}</p>

              </div>
            )
          })}
        </div>
      </div>

    </section>
  )
}