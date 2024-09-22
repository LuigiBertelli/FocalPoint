'use client'
import { useEffect } from "react";
import styles from "./page.module.scss";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => router.push('/checklist') , [])
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      </main>
    </div>
  );
}
