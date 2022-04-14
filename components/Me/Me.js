import { useTranslations } from '../../context/i18nContext'

export function Me () {
  const { t } = useTranslations()
  return (
        <section>
            <div>
                <h1>{t('ABOUT_ME')}</h1>
            </div>
            <div>
                <div>
                    <p>{t('ABOUT_DESCRIPTION')}
                    </p>
                </div>
                <div>
                </div>
            </div>
        </section>
  )
}
