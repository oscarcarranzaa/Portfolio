import { useRouter } from 'next/router'
import { useTranslations } from '../../context/i18nContext'
import Link from 'next/link'
import { LanguageIcon } from '../Icons/Lang'

import { Arrow } from '../Icons/arrow'
import styles from './styles.module.css'
import h from './j.module.css'
export function Toggle_langs () {

    const {locale, locales} = useRouter()
    const SHOW_LANGUAGUES  = locales.filter(l => l === locale)
    
    const {t} = useTranslations()
    return (
        <>
                <div className={styles.Languages}>
                    <div className={h.nhicfrhihifh}><LanguageIcon/></div>
                    <div>k</div>
                    <div><Arrow/></div>
                </div>
            
            <div className={styles.ContLang}>
                {locales.map((languages, index) => {
                    return (
                        <div key={index} className={`${languages == locale ?  "active" : ""} ${styles.LangI}`}>
                            <Link href='/' locale={languages}>
                                <a className={styles.Lang}>
                                    {t(`${languages}`)}
                                </a>
                            </Link>
                        </div>
                    )
                })}
                
            </div>
        </>
    )
}