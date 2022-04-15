import Image from 'next/image'
import { SocialNetworks } from '../../SocialNetworks'
import styles from './styles.module.css'

export function Avatar () {
  return (
        <>
            <div className={styles.ImageCard}>
                <Image src='/Image.jpg' width='500px' height='500px' layout='responsive' objectFit='cover'></Image>
                <div className={styles.PlusNetworks}>
                  <h4 className={styles.PlusNetworksText}>Redes Sociales</h4>
                  <div>
                    <SocialNetworks colorEdit="#fff" backgroundEdit="transparent"/>
                  </div>
                </div>
            </div>
        </>
  )
}
