export default function LearnMoreLink({ text }: { text?: string }) {
  return (
    <a className='flex mt-8 lg:hover:bg-brand lg:hover:text-black duration-300 py-3.75 px-7.5 border border-white w-fit rounded-[15px] text-white bxg-amber-300 bg-[#383848]' href="#">
      {text || 'LEARN MORE'}
    </a>

  )
}