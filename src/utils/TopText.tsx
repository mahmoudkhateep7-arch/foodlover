export default function TopTextC({ title, h2color, ptext }: { title: string, h2color: string, ptext?: string }) {
  return (
    <div className=' text-center bg-amber-30d0  mb-16'>
      <h2 className={`text-[40px] ${h2color} font-semibold mb-5`}>{title}</h2>
      <p className="text-[14px] text-[#9a9a9a] font-semibold">{ptext || 'more than 20+ years of experience'}</p>
    </div>
  )
}


