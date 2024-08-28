'use client'

import React, { useState, useMemo } from 'react'
import englishFlag from '@assets/flags/english.webp'
import spanishFlag from '@assets/flags/spanish.webp'
import frenchFlag from '@assets/flags/french.webp'
import Image from 'next/image'
import './LanguageSelector.css'

const languages = [
  { code: 'en', flag: englishFlag, alt: 'English flag' },
  { code: 'es', flag: spanishFlag, alt: 'Spanish flag' },
  { code: 'fr', flag: frenchFlag, alt: 'French flag' },
]

export const LanguageSelector = ({ onChangeLanguage, lng }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(lng)

  const reorganizeLanguage = (lng) => {
    if (lng === selectedLanguage) return
    setSelectedLanguage(lng)
    onChangeLanguage(lng)
  }

  const reorderedLanguages = useMemo(() => {
    return languages
      .slice()
      .sort((a, b) =>
        a.code === selectedLanguage ? -1 : b.code === selectedLanguage ? 1 : 0,
      )
  }, [selectedLanguage])

  return (
    <div className="languageSelector">
      <div className="languageSelectorContent">
        {reorderedLanguages.map((lang) => (
          <div
            key={lang.code}
            className="languageFlag"
            onClick={() => reorganizeLanguage(lang.code)}
          >
            <Image src={lang.flag} alt={lang.alt} width={30} height={30} />
          </div>
        ))}
      </div>
    </div>
  )
}
