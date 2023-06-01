interface ItemIpInfoProps {
  title: string
  content: string
  isBordered?: boolean
}

const ItemIpInfo = ({ title, content, isBordered }: ItemIpInfoProps) => {
  return (
    <div className={`flex flex-col items-center md:items-start w-[297px] md:w-[213px] h-[57px] md:h-full md:gap-[32px]  relative
        ${isBordered === true ? 'custom-border' : ''} `}>
      <span className='text-[10px] text-[#2C2C2C] font-bold opacity-[0.5] leading-3 tracking-[1.45833px] uppercase text-center md:text-start'>{title}</span>
      <span className='text-[18px] text-[#2B3442] font-medium leading-6 tracking-[-0.178571px] text-center md:text-start'>{content}</span>
    </div>
  )
}

export default ItemIpInfo
