import Checkbox from "../checkbox/checkbox";
import Image from "next/image";
import trashCan from "@/public/trash-can.svg"
import style from "./checklist-item.module.scss"
import Link from "next/link";

export default function ChecklistItem({item, setChecklist})
{
    const toggleListItemCheck = (e) => {
        e.preventDefault();
        setChecklist(prevChecklist =>   {
            let aux = [...prevChecklist];
            const idx = aux.findIndex(el => el.id === item.id)
            if(idx !== -1)
            {
                aux[idx] = {...aux[idx], isFinished: !aux[idx].isFinished};
            }
            return aux;
        });
        
    };

    return (
        <div key={item.id} className={`${style.item} ${item.isFinished ? style.checked : ''}`} onClick={toggleListItemCheck}>
            <Checkbox isChecked={item.isFinished}/>
            <div className={style.text}>
                <span>{item.text}</span>
            </div>
            <Link className={style.trash} href={`checklist/deletetask/${item.id}`} onClick={(e) => e.stopPropagation()} replace>
                <Image src={trashCan} alt="Lata de lixo" height={16} width={16}/>
            </Link>
        </div>
    );
}