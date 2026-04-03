import { gallaryArray } from "./utils/gallaryArray"
export default function Gallary() {
  return (
    <section id="Gallary" className="h-[80vh]   py-10   bg-cover  bg-center bg-no-repeat bg-[url('./img/offer-background.jpg')]">
      <div className="max-w-275   mx-auto ">
        <h2 className="text-center font-semibold text-white text-4xl pb-8">Our Food Gallary</h2>
        <div id="imgas container" className=" flex justify-center items-center flex-wrap gap-5 ">
          {gallaryArray.map((item) => {
            return (
              <div key={item} className="w-70 h-50">
                <img className="inline-block lg:hover:opacity-100 lg:opacity-90 border-2 w-70 h-50 rounded-[15px]" src={item} alt="gallary " />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}