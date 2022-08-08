import Image from "next/image";
import Pro from "./Projects";
import { useTranslations } from "../../context/i18nContext";
import { useState } from "react";
import { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import ArrowChevron from "../Icons/Arrow-chevron";

export function Projects() {
  const { t } = useTranslations();
  /*const [change, setChange] = useState(0);
  const total_projects = Pro.length - 1;
  const next = () =>
    change !== total_projects ? setChange(change + 1) : setChange(0);
  const prev = () =>
    change !== 0 ? setChange(change - 1) : setChange(total_projects);
  const delay = 10000;
  const timeoutRef = useRef(null);
  const projects = Pro.map((p) => {
    const pq = p.technologies;
    return pq;
  });
  useEffect(() => {
    const projects = Array.from(document.querySelectorAll(".project"));
    const projectsItem = Array.from(document.querySelectorAll(".projectclick"));
    const f = () => {
      projects[change].classList.add(styles.visible);
      projectsItem[change].classList.add(styles.Active);
      projects.forEach((p) => {
        if (projects.indexOf(p) !== change) {
          p.classList.remove(styles.visible);
        }
      });
      projectsItem.forEach((p) => {
        if (projectsItem.indexOf(p) !== change) {
          p.classList.remove(styles.Active);
        }
      });
    };
    f();
  }, [change]);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setChange((setNext) => (setNext === total_projects ? 0 : setNext + 1)),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [change]);*/
  return (
    <section id="projects" className={styles.Projects}>
      <div className={styles.ProjectsTitle}>
        <h2>{t("PROJECTS")}</h2>
      </div>
      <div className={styles.ProjectsSlider}>
        {Pro.map((project) => {
          return (
            <div key={project.id} className={`${styles.ProjectsItems} project`}>
              <div className={styles.ProjectInfo}>
                <h3>
                  <a
                    className={styles.ProjectName}
                    href={project.url}
                    target="_blank"
                    rel="noreferer"
                  >
                    {project.name}
                  </a>
                </h3>
                <div>
                  <a
                    className={styles.ProjectSource}
                    href={project.repo}
                    target="_blank"
                    rel="noreferer"
                  >
                    {t("SOURCE_CODE")}
                  </a>
                </div>
                <div className={styles.TechnologiesIconCont}>
                  {t("CREATED_WITH")}:
                  <ul className={styles.ContTechnologies}>
                    {project.technologies.map((t, index) => {
                      return (
                        <li key={index}>
                          <div>
                            {t.icon}

                            <span>{t.name}</span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className={styles.ContProjectsImage}>
                <div className={styles.ProjectsImage}>
                  <a href={project.url} target="_blank" rel="noreferrer">
                    <img className={styles.ProjectsImae} src={project.image} />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
