import React from 'react'
import HeroTemplate from '@components/HeroTemplate/HeroTemplate'

import '@styles/global.scss'

interface indexProps {}

const Index = ({}: indexProps) => {
  return (
    <>
      <h1>Index</h1>
      <HeroTemplate />
    </>
  )
}

export default Index
