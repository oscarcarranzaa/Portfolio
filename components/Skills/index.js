import { Technologies } from "./Technologies";
import { useTranslations } from "../../context/i18nContext";
import styles from "./styles.module.css";
export function Skills() {
  const { t } = useTranslations();
  return (
    <>
      <section id="skills" className={styles.Skills}>
        <div className={styles.SkillsTitle}>
          <h2>SKILLS</h2>
        </div>
        <div className={styles.SkillsCont}>
          <div className={styles.SkillsContText}>
            <p className={styles.SkillsText}>{t("TECHNOLOGY_DESC")}</p>
          </div>
          <div className={styles.TechnologiesIconCont}>
            <Technologies />
          </div>
        </div>
      </section>
    </>
  );
}
