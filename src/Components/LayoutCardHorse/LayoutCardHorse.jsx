import { Card } from '../Card/Card';
export const LayoutCardHorse = ({ data }) => (

    <div className="lg:w-[725px] lg:h-[618px] xl:w-[1040px] xl:h-[905px] sm:w-[390px] sm:h-[1200px] border border-black bg-windows-horse-background">
        <h1 className="justify-center flex items-center font-display text-[24px] h-[58px] xl:h-[77px] bg-data-line-bg">План конюшни</h1>
        
        <div className="flex flex-wrap justify-around gap-y-[50px] xl:gap-y-[178px] p-[10px] ml-[10px] mr-[10px]  xl:p-[25px] xl:m-[0px]  xl:ml-[5px] xl:mr-[5px] ">

            {data.map((item) => (<Card HorseName={item.name} />))}

        </div>



    </div>

);
{/* <div className="flex flex-wrap justify-around gap-y-[50px] mt-[10px] ml-[20px] mr-[20px] mb-[10px]">
        {data.map((item)=>(<Card HorseName={item.name}/> ))}
    
        </div> */}
// <div className="grid grid-cols-4 grid-rows-[260px_40px_260px] place-self-center">
{/* <div className="w-[725px] h-[30px] bg-data-line-bg" relative></div> */}