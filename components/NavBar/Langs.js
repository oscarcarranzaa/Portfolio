import { useRouter } from 'next/router'
import { LanguageIcon } from '../Icons/Lang'
import Link from 'next/link'

import styles from './styles.module.css'

export function Langs () {
  const { locale, locales } = useRouter()
  const SHOW_LANGUAGUES = locales.filter(l => l !== locale)

  return (
    <>
      <Link href='/' locale={SHOW_LANGUAGUES[0]}>
        <a className={styles.Languages}>
          <ul className={styles.ListLang}>
            <li><LanguageIcon color='#fff'/></li>
            <li>{SHOW_LANGUAGUES}</li>
          </ul>
        </a>
      </Link>
    </>
  )
}
