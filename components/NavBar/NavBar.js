import { useState } from 'react'
import { Langs } from './Langs'
import { Close } from '../Icons/Close'
import { Navegation } from './Navegation'
import { Cv } from './Cv'
import { SocialRedes } from './SocialRedes'
import Bars from '../Icons/Bars'

import styles from './styles.module.css'

export function NavBar () {
  const [isOpen, setIsOpen] = useState(false)
  const openMenu = () => setIsOpen(!isOpen)
  const classOpen = isOpen === true
    ? 'show'
    : 'hide'
  const OpenMenuClass = isOpen === true
    ? 'ContMenu'
    : ''
  return (
        <>
        <Cv/>
            <header className={`${styles.NavBar}`}>
                <div className={styles.NavWrapper}>
                    <div className={styles.NavMe}>
                        <h3 className={styles.NavLogo}>OSCAR</h3>

                    </div>
                    <div className={styles.NavegationLink}>
                        <Navegation/>
                    </div>
                        <Langs/>
                    <div className={styles.OpenMenu} title="Menú" onClick={openMenu}>
                        <Bars color="#fff"/>
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
                                <SocialRedes colorEdit="#000" backgroundEdit="transparent"/>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
            <style jsx>{`
                .show{
                    display: block;
                    
                }
                .hide{
                    display: none;
                }
                .ContMenu{
                    display: flex;
                    justify-content: flex-end;
                    animation: MenuShow 200ms linear;
                }
                @keyframes MenuShow{
                    from{
                        margin-top: -200px;
                        opacity: 0;
                    }to{
                        margin-top: 0px;
                        opacity: 1;
                    }
                }
                @media screen and (min-width: 769px) {
                    .show{
                        display: none;
                    }
                }    
            `}</style>
        </>
  )
}
