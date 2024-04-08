import React from 'react'
import headerImage from '../../_assets/pictures/teamShape.webp'
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
      <div>
        <Image
          src={headerImage}
          alt="Join us"
          width={500}
          height={500}
          layout="responsive"
        />
      </div>
    </div>
  )
}
