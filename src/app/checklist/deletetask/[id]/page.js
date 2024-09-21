'use client'
import { useRouter} from "next/navigation";
import styles from "../../../styles/deletetask-page.module.scss"
import Popup from "@/components/popup/popup";

export default function DeleteTaskPage({params})
{
    const router = useRouter();

    const goBack = (e) => {
        e.preventDefault();
        router.push('/checklist');
    }

    const removeTask = async (e) => {
        e.preventDefault();
        let checklist = JSON.parse(localStorage?.getItem('checklist') ?? '[]');
        localStorage.setItem('checklist', JSON.stringify(checklist.filter(item => item.id != params.id)));
        router.push('/checklist?refresh=1');
    }

    return (
        <Popup goBack={goBack}>
            <div className={styles.deletetask}>
                <div className={styles.title}>
                    <span>Deletar tarefa</span>
                </div>
                <div className={styles.text}>
                    <span>Tem certeza que deseja deletar essa tarefa?</span>
                </div>
                <div className={styles.buttons}>
                    <button onClick={goBack}>Cancelar</button>
                    <button onClick={removeTask}>Deletar</button>
                </div>
            </div>
        </Popup>
    );
}