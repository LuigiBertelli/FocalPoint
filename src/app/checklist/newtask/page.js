'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "../../styles/newtask-page.module.scss"
import Popup from "@/components/popup/popup";
import { revalidateTag } from 'next/cache';


export default function NewTaskPage()
{
    const router = useRouter();
    let [text, setText] = useState('');

    const goBack = (e) => {
        e.preventDefault();
        router.push('/checklist');
    }

    const addTask = (e) =>
    {
        e.preventDefault();
        let checklist = JSON.parse(localStorage.getItem('checklist') ?? '[]');
        checklist.push({ id: (checklist.length + 1), text: text, isFinished: false});
        localStorage.setItem('checklist', JSON.stringify(checklist));
        router.push('/checklist?refresh=1');
    }

    return (
        <Popup goBack={goBack}>
            <div className={styles.newtask}>
                <div className={styles.title}>
                        <span>Nova tarefa</span>
                </div>
                <div className={styles.textentry}>
                    <label htmlFor="textinput">Título</label>
                    <input id="textinput" datatype="text" placeholder="Digite" value={text} onChange={(e) => setText(e.target.value)}/>
                </div>
                <div className={styles.buttons}>
                    <button onClick={goBack}>Cancelar</button>
                    <button onClick={addTask}>Adicionar</button>
                </div>
            </div>
        </Popup>
    );
}