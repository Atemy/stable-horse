export const DataLine = ({lineText, lineName, className}) => (
   <div className={`w-[300px] h-[30px] bg-data-line-bg mx-auto mb-[30px] flex justify-between ${className}`}>
    <p className="font-display text-[16px] ml-[20px] align-middle" >{lineName}</p>
    <p className="font-display text-[16px] mr-[20px] align-middle">{lineText}</p>
   </div>
)