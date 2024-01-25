export const Button = ({ title, className}) => (
    <button className={`w-[140px] h-[40px] rounded-[10px] bg-button-background ${className}`}>
           <p className="font-display text-[16px] text-button-text">{title}</p>
    </button>
)