import styles from "./styles.module.css"

export function Cv (){
    return (
        <>
            <div className={styles.Cv_cont}>
                <p>Descarga mi hoja de vida</p>
                <div className={styles.Cv_link}>
                    <a href="./conoceme" target="_blank">CV ➡</a>
                </div>
            </div>
        </>
    )
}