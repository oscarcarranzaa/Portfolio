import Image from "next/image"
import { Pro } from "./Projects"
import { useState } from "react"
import { useEffect, useRef } from "react"
import { Nodejs } from "../Icons/Nodejs"
import { Reactjs } from "../Icons/Reactjs"
import { Typescript } from "../Icons/Typescript"
import { Vitejs } from "../Icons/vitejs"
import styles from './styles.module.css'
import ArrowChevron from "../Icons/Arrow-chevron"

export function Projects () {
    const [change, setChange] = useState(0)
    const total_projects = Pro.length -1
    const next = () => change !== total_projects ? setChange(change +1) : setChange(0)
    const prev = () => change !== 0 ? setChange(change -1) : setChange(total_projects)
    const delay = 5000;
    const timeoutRef = useRef(null);

    useEffect(() => {
        const projects = Array.from(document.querySelectorAll('.project'))
        function f () {
            projects[change].classList.add(styles.visible)
            projects.forEach(p => {
                if(projects.indexOf(p) !== change){
                    p.classList.remove(styles.visible)
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
        <section id="projects">
            <div className={styles.ProjectsTitle}>
                <h1>Projects</h1>
            </div>
            <div className={styles.ProjectsSlider}>
                {Pro.map((project) => {
                   return(
                    <div key={project.id} className={`${styles.ProjectsItems} project`}>
                        <div>
                            <a href={project.url} target="_blank" rel="noreferer">{project.name}</a>
                            <div>
                                <div>Creado con:</div>
                            </div>
                            <a href={project.repo}>Ver codigo</a>
                        </div>
                        <div>
                            <div>
                                <div className={styles.ProjectsImage}>
                                    <Image src={project.image} width='200px' height='100px' layout='responsive' objectFit="cover"></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                   )
                })}
                <div className={styles.ProjectsChanges}>
                    <div className={styles.ProjectsArrow}>
                        <button onClick={prev} className={styles.BtnNextProject}><ArrowChevron/></button>
                        <button onClick={next} className={styles.BtnNextProject}><ArrowChevron/></button>
                    </div>
                </div>
            </div>
        </section>
    )
}