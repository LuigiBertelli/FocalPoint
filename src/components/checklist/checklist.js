import style from "./checklist.module.scss"
import ChecklistItem from "../checklist-item/checklist-item";

export default function Checklist({checklist, setChecklist})
{
    return (
        <div className={style.checklist}>
            <div className={style.title}>
                <span>Suas Tarefas de hoje</span>
            </div>

            <div className={style.items}>
                {
                    Array.isArray(checklist) && checklist.filter(item => !item.isFinished).map((item) => (
                        <ChecklistItem key={item.id} item={item} setChecklist={setChecklist}/>
                    ))
                }
            </div>

            <div className={style.title}>
                <span>Tarefas finalizadas</span>
            </div>

            <div className={style.items}>
                {
                    Array.isArray(checklist) && checklist.filter(item => item.isFinished).map((item) => (
                        <ChecklistItem key={item.id} item={item} setChecklist={setChecklist}/>
                    ))
                }
            </div>
        </div>
    );
}