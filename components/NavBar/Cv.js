import styles from "./styles.module.css"
import { useTranslations } from "../../context/i18nContext"

export function Cv (){
    const {t} = useTranslations()
    return (
        <>
            <div className={styles.Cv_cont}>
                <p>{t('DOWNLOAD_MY_RESUME')}</p>
                <div className={styles.Cv_link}>
                    <a href="./conoceme" target="_blank">CV ➡</a>
                </div>
            </div>
        </>
    )
}