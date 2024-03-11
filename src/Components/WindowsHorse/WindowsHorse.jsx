import stub_windows_horse from '../../shared/images/stub-windows-horse.png';
import { DataLine } from './DataLine/DataLine';
import { WindowsHorseButton } from '../../Components/WindowsHorse/WindowsHorseButton/WindowsHorseButton';
export const WindowsHorse = ({ isActive, data }) => (
    <div className='w-[300px] h-[693px] xl:w-[400px] xl:h-[1005px] border border-black bg-windows-horse-background font-display relative'>
        {isActive ? (
            <div>
                <div className='h-[200px] w-[150px] xl:h-[360px] xl:w-[270px] mt-[18px] mb-[10px] xl:mt-[20px] mx-auto xl:mb-[20px]  '>
                    {/* <img className='xl:h-[360px] xl:w-[270px]' src={data.avatarSrc?data.avatarSrc:stub_windows_horse} alt='Фото вашей лошади' /> */}
                <div className='xl:h-[360px] xl:w-[270px]'> {data.avatarSrc?data.avatarSrc:<img src= {stub_windows_horse}/>}</div>
                </div>
                <div className='w-[300px] h-[30px] bg-data-line-bg mx-auto mb-[30px]'>
                <p className='text-center font-display text-[24px] mb-[20px] xl:mb-[30px] leading-[27px]'>{data.name?data.name:'-'}</p>
                </div>
                <DataLine lineName='Пол' lineText={data.male? data.male:'-'} />
                <DataLine lineName='Год рождения' lineText={data.year? data.year:'-'} />
                <DataLine lineName='Масть' lineText={data.suit? data.suit:'-'} />
                <DataLine lineName='Владелец' lineText={data.master? data.master:'-'} />
                <DataLine lineName='Порода' lineText={data.breed? data.breed:'-'} className="mb-[6px]" />

                <div className='w-[260px] h-[80px] xl:w-[300px] xl:h-[150px] bg-data-line-bg block mx-auto mb-[6px] '>
                    <p className='text-[12px] opacity-50 mb-[10px] ml-[4px]'> Подробности</p>
                    <div className='overflow-hidden overflow-y-auto h-[48px] xl:h-[120px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
                        <p className='w-[248px] xl:w-[286px] block ml-[6px]'>
                            {data.more.length > 200 ? `${data.more.substring(0, 200)}...` : data.more}
                        </p>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <WindowsHorseButton buttonText={'Редактировать'} className={'bg-bg-button-edit mr-[20px]'} />
                    <WindowsHorseButton buttonText={'Удалить'} className={'bg-bg-button-delete'} />
                </div>
            </div>
        ) : (
            <div className='' >
                <p className='w-[280px] xl:ml-[60px] text-center font-display text-[24px] leading-[27px] absolute inset-y-1/3'>Для просмотра и редактирования информации кликните на карточку с интересующей вас лошадью</p>
            </div>)
        }



    </div>



)
