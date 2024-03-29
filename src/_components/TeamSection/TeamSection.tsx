import SanityBlock from '@components/SanityBlock/SanityBlock'
import React from 'react'
import './TeamSection.css'
import Image from 'next/image'

export const TeamSection = ({ teamMembers }) => {
  return (
    <section className="team-cards-section">
      {teamMembers.map((member) => (
        <article key={member._id} className="team-member-card">
          <Image
            src={member.profileImage}
            alt={member.name}
            fill
            style={{
              objectFit: 'cover',
            }}
          />
          <h3>{member.name}</h3>
          {member.bio.map((block) => (
            <>
              <SanityBlock key={block._key} sanityContent={block} />
            </>
          ))}
          <a href={member.linkedin}>Linkedin</a>
        </article>
      ))}
    </section>
  )
}
