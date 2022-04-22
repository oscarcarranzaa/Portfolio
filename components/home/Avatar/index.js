import Image from 'next/image'
import { SocialMedia } from '../../SocialMedia'

import styles from './styles.module.css'

export function Avatar ({ Network }) {
  return (
        <>
            <div className={styles.ImageCard}>
                <Image src='/AMIGA_MAYLLIN_EN_ANIME.jpg' width='500px' height='500px' layout='responsive' objectFit='cover'></Image>
                <div className={styles.PlusNetworks}>
                  <h4 className={styles.PlusNetworksText}>{Network}</h4>
                  <div>
                    <SocialMedia colorEdit="#fff" backgroundEdit="transparent"/>
                  </div>
                </div>
            </div>
        </>
  )
}
