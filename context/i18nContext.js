import { useRouter } from "next/router"
import { createContext, useContext, useCallback } from "react"
import es from "../translations/es.json"
import en from "../translations/en.json"

const I18NContext = createContext()
const Languages = { es, en }

export function I18nProvider({ children }){
    const {locale} = useRouter()

    const t = useCallback((lit, ...num) => {
        let translations = Languages[locale][lit]
        if(num.length === 0) return translations

        num.forEach((value, index) => {
            translations = translations.replace(`\${${index + 1}}`, value)
        })
        return translations
    }, [locale])

    return (
        <I18NContext.Provider value={{t}}>
            {children}
        </I18NContext.Provider>
    )
}
export function useTranslations () {
    const _context = useContext(I18NContext)
    if (_context === undefined){
        throw new Error("add I18NProvider to _app.js")
    }
    return(_context)
}