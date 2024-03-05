import { useState } from "react";
export const Forma = () => {
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const handleSubmit = (e) => {
        eп.preventDefault();
console.log('event', e)
   } 

return(
    <form className="flex flex-col w-[300px] m-[5px] border bg-green-100 border border-green-400 rounded" onSubmit={handleSubmit}>
        <input className="border border-black m-[5px] rounded" placeholder="имя" value={name}
          onChange={(e) => setName(e.target.value)} >
        </input>
        <textarea className="border border-black m-[5px] rounded" placeholder="текст" value={text}
          onChange={(e) => setText(e.target.value)} >
        </textarea>
        <input type="submit" className="border border-black m-[5px] w-[200px] self-center bg-red-100 rounded"/>
    </form>
    )
}