import { useTranslations } from '../../context/i18nContext'
import { CSS3 } from '../Icons/CSS3'
import { Expressjs } from '../Icons/Express'
import { HTML5 } from '../Icons/HTML5'
import { Javascript } from '../Icons/Javascript'
import { Mongodb } from '../Icons/Mongodb'
import { Nextjs } from '../Icons/Nextjs'
import { Nodejs } from '../Icons/Nodejs'
import { Reactjs } from '../Icons/Reactjs'
import { Tailwindcss } from '../Icons/Tailwindcss'
import { Typescript } from '../Icons/Typescript'
import { Vitejs } from '../Icons/vitejs'

import styles from './styles.module.css'

export function Me () {
  const { t } = useTranslations()
  const TIME_LINE_TRANSLATIONS = t('TIME_LINE')
  return (
        <section id='about'>
            <div className={styles.TitleCont}>
                <h1>{t('ABOUT_ME')}</h1>
            </div>
            <div className={styles.AboutCont}>
                <div>
                    <p> Hola, soy desarrollador en Javascript. me apasiona mucho la programación es por eso que todos los días aprendo algo nuevo y disfruto el momento cuando estoy programando, eso me hace llevar al maximo mi imaginacion y ser muy creativo. Espero poder formar parte de tu equipo o proyecto...</p>
                </div>
                <div className={styles.MyTimeLine}>
                    <HTML5/>
                    <CSS3/>
                    <Javascript/>
                    <Typescript/>
                    <Reactjs/>
                    <Nextjs/>
                    <Vitejs/>
                    <Tailwindcss/>
                    <Nodejs/>
                    <Expressjs/>
                    <Mongodb/>
                    <div className={styles.TimeLineCont}>
                       {TIME_LINE_TRANSLATIONS.map((TIME_I) => {
                         return (
                            <div key={TIME_I.ID} className={styles.TimeItem}>
                                <div className={styles.TimeDateCont}>
                                    <h4 className={styles.TimeDate}>{TIME_I.DATE}</h4>
                                </div>
                                <div className={styles.ContTime}>
                                    <h5 className={styles.Time}>{TIME_I.TITLE}</h5>
                                    <p className={styles.TextTime}>{TIME_I.DESCRIPTION}</p>
                                </div>
                            </div>
                         )
                       })}
                    </div>
                </div>
            </div>
        </section>
  )
}
