import { useTranslation } from 'react-i18next';
import { MobileNav } from '../components/MobileNav';

export default function Contact() {
    const { t } = useTranslation();

    return (
        <div className="fullpage generic">
            <header>
                <MobileNav />
                <h1 className="page-name">{t('contact')}</h1>
            </header>
        </div>
    )
}

