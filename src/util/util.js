export const LOCALE = 'pt-BR'
export const formatTime = (date) => new Intl.DateTimeFormat(LOCALE, { hour: 'numeric', minute: 'numeric' }).format(date)
