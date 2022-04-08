import { useTranslations } from "../../context/i18nContext"

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