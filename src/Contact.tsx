import LeftSide from "./utils/ContactLeft";

export default function Contact() {
  return (
    <section id="Contact" className="bg-[#f4f4f4] py-10 ">
      <div className="max-w-225 mx-auto">
        <div id="left and rigth parent flex " className="bg-amber-80s0 pq-3 flex justify-evenly" >
          <LeftSide></LeftSide>
          <form className="bg-axmber-300 w-[50%] flex flex-col gap-5 ">
            <input className="flex  w-full p-5 border-none outline-0 bg-[#e3e2dd]" type="text" name="name" placeholder="Andy denis" id="name" required />
            <input className="flex  w-full p-5 border-none outline-0 bg-[#e3e2dd]" type="email" name="emai" placeholder="Andydenis123@gmail.com" id="email" required />
            <input className="flex  w-full p-5 border-none outline-0 bg-[#e3e2dd]" type="text" name="subject" placeholder="CHEESE PIZZA" id="subject" required />
            <input className="flex  w-full p-5 border-none outline-0 bg-[#e3e2dd]" name="message" id="message" required placeholder="would like to aks about the price of CHEESE PIZZA" />
            <button className="text-white mt-4 rounded-2xl lg:hover:rounded-none mx-auto py-2 px-4 text-xl   duration-150 transition-all  bg-[#383848] lg:hover:cursor-pointer w-fit border-0 outline-none " type="button">Send Message</button>
          </form>



        </div>
      </div>
    </section>
  )
}