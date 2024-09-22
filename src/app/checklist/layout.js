'use client'
import Checklist from "@/components/checklist/checklist";
import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg"
import styles from "../styles/checklist-page.module.scss"
import { useSearchParams, useRouter } from "next/navigation";

const nome = 'Marcos';
const MINUTE_MS = 60000;
const WEEK_DAYS = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
const MONTHS = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
  'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

const getChecklistStoraged = () => {
  let aux = [];
  if(localStorage !== undefined)
    aux = JSON.parse(localStorage.getItem('checklist') || '[]');
  
  return aux;
};

const formatDate = (date) => {
  let weekDay = WEEK_DAYS[date.getDay()],
      day  = date.getDate().toString().padStart(2, '0'),
      month  = MONTHS[date.getMonth()],
      year  = date.getFullYear();

  return `${weekDay}, ${day} de ${month} de ${year}`;
};

function ChecklistContainer() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  let [checklist, setChecklist] = useState(() => getChecklistStoraged());

  useEffect(() => {
    if(searchParams.get('refresh') === null)
      return;
    
    router.replace('/checklist', {shallow: true});
    setChecklist(getChecklistStoraged());
  }, [searchParams, router]);

  useEffect(() => {
    localStorage.setItem('checklist', JSON.stringify(checklist));
  }, [checklist]);

  return (<>
    <div className={styles.container}>
            <Checklist checklist={checklist} setChecklist={setChecklist}/>
            <Link className={styles.btn2} href={'/checklist/newtask'}>Adicionar nova tarefa</Link>
      </div>
  </>);
}

export default function TasksLayout({ children }) {  
  let [todayDate, setTodayDate] = useState(new Date());

  useEffect(() => {
      const interval = setInterval(() => {
      let now = new Date();
      if(todayDate.getDate() !== now.getDate())
      {
        setTodayDate(now);
      }
    }, MINUTE_MS);
    return () => clearInterval(interval);
  }, [todayDate]);

  return (
    <section>
      <nav>
        <div className={styles.navcontainer}>
          <Image src={logo} alt="FocalPoint logo" width={150} height={36}/>
          <div className={styles.welcome}>
            <span>
              Bem vindo de volta, {nome}
            </span>
          </div>

          <div className={styles.date}>
            <span>
              { formatDate(todayDate) }
            </span>
          </div>
        </div>
      </nav>
      <Suspense>
        <ChecklistContainer/>
      </Suspense>
      {children}
    </section>
  );
}
