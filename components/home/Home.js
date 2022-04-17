import Image from 'next/image'
import { useTranslations } from '../../context/i18nContext'
import { SocialMedia } from '../SocialMedia'
import { Avatar } from './Avatar'

import styles from './styles.module.css'

export function HomePage () {
  const { t } = useTranslations()
  return (
    <>
      <section id='home' className={styles.Home}>
        <div className={styles.HomeBg}>
        </div>
        <div className={styles.BgFront}></div>
          <div className={styles.HomeCont}>
            <div className={styles.Me}>
              <div className={styles.PointsCont}>
                <div className={styles.Points}></div>
              </div>
              <div className={styles.Portada}>
                <Image src='/guwpo.jpg' layout='responsive' objectFit='cover' width='300px' height='200px'></Image>
              </div>
              <div className={styles.TextCont}>
                <h3 className={styles.TextPrimary}>Oscar A. Carranza</h3>
                <p className={styles.Text}>{t('TEXT_ME')} <a href='https://www.unah.edu.hn' target='_blank' rel='noreferrer'>{t('UNAH')}</a>.</p>
              </div>
              <div className={styles.SocialCont}>
                <SocialMedia colorEdit='#fff'/>
              </div>
            </div>
            <Avatar Network={t('SOCIAL_MEDIA')}/>
          </div>
      </section>
    </>
  )
}
