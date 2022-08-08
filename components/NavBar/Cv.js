import Link from "next/link";
import { useTranslations } from "../../context/i18nContext";
import { Arrow } from "../Icons/arrow";

import styles from "./styles.module.css";

export function Cv() {
  const { t } = useTranslations();
  return (
    <>
      <div className={styles.Cv_cont}>
        <div className={styles.Cv_link}>
          <Link href="/CV_Oscar_Carranza.pdf" locale="en">
            <a>
              <span>{t("DOWNLOAD_MY_RESUME")}</span>
              <Arrow color="#fff" />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
