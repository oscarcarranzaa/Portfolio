import styles from './styles.module.css'

import { GitHub } from '../Icons/GitHub'
import { Linkedin } from '../Icons/Linkedin.js'
import { Facebook } from '../Icons/Facebook'

export function SocialNetworks ({ colorEdit, backgroundEdit }) {
  return (
        <>
            <ul className={styles.SocialRedesFlex}>
                <li>
                    <a href="https://github.com/os-carranza" target="_blank" rel="noreferrer"><GitHub color={colorEdit}/></a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/os-carranza" target="_blank" rel="noreferrer"><Linkedin color={colorEdit} background={backgroundEdit}/></a>
                </li>
                <li>
                    <a href="https://facebook.com/oscarandres.carranza" target="_blank" rel="noreferrer"><Facebook color={colorEdit} background={backgroundEdit}/></a>
                </li>
            </ul>
        </>

  )
}
