import horse_candle from '../../images/horse_in_a_candle.svg'
import rocking_horse from '../../images/rocking_horse.svg'
import { Button } from './Button/Button'
export const Card = ({ HorseName }) => (
    <div className='w-[150px] h-[240px] xl:w-[200px] border border-black pb-[15px] bg-card-background'>
        {HorseName ? (
            <>
                <img className='mx-auto mt-[10px] mb-[2px]' src={horse_candle} alt='active_horse' />
                <p className='font-display text-[24px] leading-[29px] mb-[20px]'>{HorseName}</p>
                <Button className='mb-[20px]'  title={'Кормление'}/>
                {/* to do ждем исправления макетов*/}
                <Button title={'Подробнее'}/>
            </>
        ) : (
            <>
                <img className='mx-auto mt-[47px] mb-[9px]' src={rocking_horse} alt='inactive_horse' />
                <p className='font-display mx-auto  text-[24px] leading-[29px] mb-[21px]'>Cвободно</p>
                <Button className='h-[50px] mx-auto '  title={'Добавить'}/>
            </>
        )
        }



    </div>
);
