import styles from './styles.module.css'
import { useTranslations } from '../../context/i18nContext'
import Link from 'next/link'
import { Container } from '../../styles/container'

export function Cv () {
  const { t } = useTranslations()
  return (
        <>
            <Container>
                <p>{t('DOWNLOAD_MY_RESUME')}</p>
                <div className={styles.Cv_link}>
                    <Link href="/" locale="en">
                        <a>CV ➡</a>
                    </Link>
                </div>
            </Container>
        </>
  )
}
