import en from './en.json'
import uk from './uk.json'

export const languages = ['en', 'uk'] as const

export type Language = (typeof languages)[number]

export const translations = { en, uk } as const

export const languageNames: Record<Language, string> = {
  en: 'EN',
  uk: 'UA',
}
