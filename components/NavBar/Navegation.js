import { useTranslations } from "../../context/i18nContext"

const NAVEGATION_ITEMS = [
    {
        id: "1",
        nav: "Inicio",
        link: "#home" 
    },
    {
        id: "2",
        nav: "Sobre mi",
        link: "#me" 
    },
    {
        id: "3",
        nav: "Formación",
        link: "#formation" 
    },
    {
        id: "4",
        nav: "Contacto",
        link: "#about" 
    }
]

export function Navegation (){
    const { t } = useTranslations()
    const ty = (t('NAVEGATION_LINKS'))
    console.log(ty)
    return(
        <>
        <ul>
            {ty.map((Nav) => {
                return(
                    
                        <li key={Nav.ID}>
                            <a href={`#`+`${Nav.PATH}`}>{Nav.NAME}</a>
                        </li>
                    
                )
            })}
        </ul>
        </>
    )
}