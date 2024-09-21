import styles from "./popup.module.scss"

export default function Popup({goBack, children})
{
    return (
        <div className={styles.popup}>
            <div className={styles.popupbg} onClick={goBack}/>
            <div className={styles.popupcontent} onClick={e => e.preventDefault()}>
                {children}
            </div>
        </div>
    );
}