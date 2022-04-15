import Image from 'next/image'
import { SocialNetworks } from '../SocialNetworks'
import { Avatar } from './Avatar'
import styles from './styles.module.css'
export function HomePage () {
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
              <h3 className={styles.TextPrimary}>Oscar A. Carranza</h3>
              <p className={styles.Text}>Hola soy desarrollador Front-End, actualmente estudiando ING. en sistemas en la <a href='https://www.unah.edu.hn' target='_blank' rel='noreferrer'>Universidad Nacional Autónoma de Honduras</a>.</p>
              <div className={styles.SocialCont}>
                <SocialNetworks colorEdit='#fff'/>
              </div>
            </div>
            <Avatar/>
          </div>
      </section>
    </>
  )
}
