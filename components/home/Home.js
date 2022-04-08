import Image from 'next/image'
import { useTranslations } from '../../context/i18nContext'
import styles from './styles.module.css'
export function HomePage(){
    const { t } = useTranslations()
    return(
        <section className={styles.SecHome}>
            <div className={styles.Home}>
                <div className={styles.HomeImg}>
                    <Image className={styles.AvatarMe} src="/OC.png" width="300" height="300" layout='responsive' objectPosition='center' alt='Oscar Carranza'/>
                </div>
                <div className={styles.HomeTextCont}>
                    <h1 className={styles.HomeText}><span>Oscar Carranza</span><br/>
                    {t('FRONT-END_DEVELOPER')}
                    </h1>
                </div>
            </div>
        </section>
    )
}