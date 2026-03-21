import { useThemeLanguage } from '../hooks/useThemeLanguage';
import { getTranslation } from '../translations';

export default function MiComponente() {
  const { isDark, language } = useThemeLanguage();
  
  return (
    <div className={isDark ? 'bg-slate-950' : 'bg-white'}>
      <h1>{getTranslation('projects.titulo', language)}</h1>
    </div>
  );
}