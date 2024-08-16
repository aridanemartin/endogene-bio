import React from 'react'
import headerImage from '../../_assets/pictures/matesTalking.webp'
import Image from 'next/image'
import './PageHeader.css'

export const PageHeader = () => {
  return (
    <div className="pageHeader">
      <div>
        <h1>Let's build something together</h1>
        <p>
          Come innovate, collaborate, and take part on the endometriosis
          innovation.
        </p>
        <button>Find your next job!</button>
      </div>
      <div className="image">
        <Image src={headerImage} alt="Join us" fill />
      </div>
    </div>
  )
}
