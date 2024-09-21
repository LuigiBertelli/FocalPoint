import Image from "next/image";
import check from "@/public/check.svg"
import style from "./checkbox.module.scss"

export default function Checkbox({isChecked})
{
    return (
        <div className={`${style.checkbox} ${isChecked ? style.checked : ''}`}>
            {
                isChecked &&
                <div className={style.check}>
                    <Image src={check} alt="Checado" className={style.checkImage}/>
                </div>
            }
        </div>
    );
}