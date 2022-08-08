import { useTranslations } from "../../context/i18nContext";
import CssIcon from "../Icons/Css3";
import ExpressIcon from "../Icons/Express";
import HtmlIcon from "../Icons/Html5";
import JavascriptIcon from "../Icons/Javascript";
import Mongodb from "../Icons/Mongodb";
import NextjsIcon from "../Icons/Nextjs";
import NodejsIcon from "../Icons/Nodejs";
import ReactIcon from "../Icons/React";
import TailwindcssIcon from "../Icons/Tailwindcss";
import TypescriptIcon from "../Icons/Typescript";
import ViteIcon from "../Icons/Vite";

import styles from "./styles.module.css";

export function Me() {
  const { t } = useTranslations();
  const TIME_LINE_TRANSLATIONS = t("TIME_LINE");
  return (
    <section id="about">
      <div className={styles.TitleCont}>
        <h1>{t("ABOUT_ME")}</h1>
      </div>
      <div className={styles.AboutCont}>
        <div>
          <p>
            {" "}
            Hola, soy desarrollador en Javascript. me apasiona mucho la
            programación es por eso que todos los días aprendo algo nuevo y
            disfruto el momento cuando estoy programando, eso me hace llevar al
            maximo mi imaginacion y ser muy creativo. Espero poder formar parte
            de tu equipo o proyecto...
          </p>
        </div>
        <div className={styles.MyTimeLine}>
          <HtmlIcon />
          <CssIcon />
          <JavascriptIcon />
          <TypescriptIcon />
          <ReactIcon />
          <NextjsIcon />
          <ViteIcon />
          <TailwindcssIcon />
          <NodejsIcon />
          <ExpressIcon />
          <Mongodb />
          <div className={styles.TimeLineCont}>
            {TIME_LINE_TRANSLATIONS.map((TIME_I) => {
              return (
                <div key={TIME_I.ID} className={styles.TimeItem}>
                  <div className={styles.TimeDateCont}>
                    <h4 className={styles.TimeDate}>{TIME_I.DATE}</h4>
                  </div>
                  <div className={styles.ContTime}>
                    <h5 className={styles.Time}>{TIME_I.TITLE}</h5>
                    <p className={styles.TextTime}>{TIME_I.DESCRIPTION}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
