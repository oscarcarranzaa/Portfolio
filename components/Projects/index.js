import Image from "next/image"
import { Pro } from "./Projects"
import { useState } from "react"
import { useEffect, useRef } from "react"
import styles from './styles.module.css'
import ArrowChevron from "../Icons/Arrow-chevron"

export function Projects () {
    const [change, setChange] = useState(0)
    const total_projects = Pro.length -1
    const next = () => change !== total_projects ? setChange(change +1) : setChange(0)
    const prev = () => 
    change !== 0 ? setChange(change -1) : setChange(total_projects)
    const delay = 10000;
    const timeoutRef = useRef(null)
    const projects = Pro.map(p => {
        const pq = p.technologies
        return (
            pq
        )
    })
    useEffect(() => {
        const projects = Array.from(document.querySelectorAll('.project'))
        const projectsItem = Array.from(document.querySelectorAll('.projectclick'))
        const f = () => {
            projects[change].classList.add(styles.visible)
            projectsItem[change].classList.add(styles.Active)
            projects.forEach(p => {
                if(projects.indexOf(p) !== change){
                    p.classList.remove(styles.visible)
                }    
            })
            projectsItem.forEach(p => {
                if(projectsItem.indexOf(p) !== change){
                    p.classList.remove(styles.Active)
                }    
            })
        }
        f()
    }, [change])
    function resetTimeout() {
        if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        }
    }
    useEffect(() => {
        resetTimeout()
        timeoutRef.current = setTimeout(() =>
            setChange((setNext) =>
            setNext === total_projects ? 0 : setNext + 1
        ),delay)
        return () => {resetTimeout()}
    }, [change])
    return (
        <section id="projects" className={styles.Projects}>
            <div className={styles.ProjectsTitle}>
                <h2>PROYECTOS</h2>
            </div>
            <div className={styles.ProjectsSlider}>
                {Pro.map((project,  index) => {
                   return(
                        <div key={project.id} className={`${styles.ProjectsItems} project`}>
                            <div className={styles.ProjectInfo}>
                                <h3>
                                    <a className={styles.ProjectName} href={project.url} target="_blank" rel="noreferer">{project.name}</a>
                                </h3>
                                <div>
                                    <a className={styles.ProjectSource} href={project.repo} target="_blank" rel="noreferer">Codigo fuente</a>
                                </div>
                                <div className={styles.TechnologiesIconCont}>Creado con:
                                    <ul className={styles.ContTechnologies}>
                                    {projects[index].map((t, index) => {
                                        return (
                                            <li key={index}>
                                                <div>
                                                    <img  className={styles.IconTechnologies} src={t.icon}/><span>{t.name}</span>
                                                </div>
                                            </li>
                                        )
                                    })}
                                    </ul>
                                </div>            
                            </div>
                            <div className={styles.ContProjectsImage}>
                                    <div className={styles.ProjectsImage}>
                                        <a href={project.url} target="_blank" rel="noreferrer">
                                            <Image className={styles.ProjectsImae} src={project.image} layout="responsive" width="350px" height="200px" objectFit="cover"></Image>
                                        </a> 
                                    </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={styles.ProjectsChanges}>
                    <div className={styles.ProjectsArrow}>
                        <button onClick={prev} className={styles.BtnNextProject}><ArrowChevron/></button>
                        <div className={styles.ContDirectProjectChange}>
                            {Pro.map((count, index ) => {
                                return(
                                    <div key={count.id} className={`${styles.DirectProjectChange} ` } >
                                        <div className={`${styles.BarProject} projectclick`} onClick={()=> setChange(index)}></div>
                                    </div>
                                )
                            })}
                        </div>
                        <button onClick={next} className={styles.BtnNextProject}><ArrowChevron/></button>
                    </div>
                </div>
        </section>
    )
}