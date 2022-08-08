import GmailSVG from "../Icons/Gmail";
import PhoneSVG from "../Icons/Phone";
import WhatsappSolid from "../Icons/Whatsapp";
import { SocialMedia } from "../SocialMedia";
import styles from "./footer.module.css";
import { useTranslations } from "../../context/i18nContext";

export default function Footer() {
  const { t } = useTranslations();
  return (
    <>
      <footer id="contact">
        <div className={styles.FooterWrapper}>
          <div className={styles.footerCont}>
            <div className={styles.FooterItem}>
              <p className={styles.FooterName}>{t("CONTACT")}</p>
              <div className={styles.contactCont}>
                <a
                  href="mailto:oscarcarranza504@gmail.com"
                  className={styles.gmail}
                  target="_blank"
                  rel="norerferrer"
                >
                  <GmailSVG size={20} />
                  oscarcarranza504@gmail.com
                </a>
                <p className={styles.footerWhatsapp}>
                  <span>
                    <PhoneSVG size={20} />
                    +504 9815-8066
                  </span>
                </p>
              </div>
            </div>
            <div className={styles.FooterItem}>
              <p className={styles.FooterName}>{t("SOCIAL_MEDIA")}</p>
              <div className={styles.SocialMediaCOnt}>
                <SocialMedia colorEdit="#000" backgroundEdit="transparent" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
