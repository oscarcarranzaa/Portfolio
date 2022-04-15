import { useState } from 'react'
import { Langs } from './Langs'
import { Close } from '../Icons/Close'
import { Navegation } from './Navegation'
import { Cv } from './Cv'
import Bars from '../Icons/Bars'

import styles from './styles.module.css'
import { SocialNetworks } from '../SocialNetworks/'

export function NavBar () {
  const [isOpen, setIsOpen] = useState(false)
  const openMenu = () => setIsOpen(!isOpen)
  const classOpen = isOpen === true
    ? styles.Show
    : styles.Hide
  const OpenMenuClass = isOpen === true
    ? styles.ContMenu
    : ''
  return (
        <>
        <Cv/>
            <header className={`${styles.NavBar}`}>
                <div className={styles.NavWrapper}>
                    <div className={styles.NavMe}>
                        <h3 className={styles.NavLogo}>OSCAR</h3>

                    </div>
                    <div className={`${styles.NavegationLink} ${styles.FlexCenter}`}>
                        <Navegation/>
                    </div>
                        <Langs/>
                    <div className={styles.OpenMenu} title="Menú">
                        <div className={`${styles.BarsOpen} ${styles.FlexCenter}`} onClick={openMenu}>
                            <Bars color="#fff"/>
                        </div>
                    </div>
                </div>
                <div className={`${styles.MenuWrapper} ${classOpen}`}>
                    <div className={`${OpenMenuClass}`}>
                        <div className={styles.Menu}>
                            <div className={styles.MenuClose}>
                                <div title="Cerrar" className={styles.MenuPd} onClick={openMenu} >
                                    <Close color="#000"/>
                                </div>
                            </div>
                            <div>
                                <div className={styles.MenuLink}>
                                    <Navegation/>
                                </div>
                            </div>
                            <div className={styles.SocialCont}>
                                <SocialNetworks colorEdit="#000" backgroundEdit="transparent"/>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
        </>
  )
}
