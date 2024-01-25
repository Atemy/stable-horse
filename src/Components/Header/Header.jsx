import { HeaderButton } from './HeaderButton/HeaderButton'

export function Header({ title }) {
    return (
        <div className='w-full h-[75px] flex items-center justify-between bg-header-background' >
            <div></div>
            <p className='font-display text-2xl'>{title}</p>
            <HeaderButton />
        </div>
    );
}
