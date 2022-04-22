import { Technologies } from "./Technologies";
import styles from './styles.module.css'
export function Skills () {
    return (
        <>
        <section id='skills' className={styles.Skills}>
            <div className={styles.SkillsTitle}>
                <h2>SKILLS</h2>
            </div>
            <div className={styles.SkillsCont}>
                <div className={styles.SkillsContText}>
                    <p className={styles.SkillsText}>Estas son las tecnologias que suelo usar en mis proyectos.</p>
                </div>
                <div className={styles.TechnologiesIconCont}>
                    <Technologies/>
                </div>
            </div>
        </section>
   
        </>
    )
}