import { Card } from '../Card/Card';
export const LayoutCardHorse = ({ data }) => (

    <div className="w-[725px] h-[618px] border border-black bg-windows-horse-background">
        <h1 className="text-center p-[8px] font-display text-[24px] h-[58px] bg-data-line-bg">План конюшни</h1>
        
        <div className="flex flex-wrap justify-around gap-y-[50px] mt-[10px] ml-[20px] mr-[20px] mb-[10px]">

            {data.map((item) => (<Card HorseName={item.name} />))}

        </div>



    </div>

);
{/* <div className="flex flex-wrap justify-around gap-y-[50px] mt-[10px] ml-[20px] mr-[20px] mb-[10px]">
        {data.map((item)=>(<Card HorseName={item.name}/> ))}
    
        </div> */}
// <div className="grid grid-cols-4 grid-rows-[260px_40px_260px] place-self-center">
{/* <div className="w-[725px] h-[30px] bg-data-line-bg" relative></div> */}