import SanityBlock from '@components/SanityBlock/SanityBlock'
import React from 'react'
import './TeamSection.css'
import Image from 'next/image'
import { LinkedinIcon } from '@components/SocialIcon/LinkedinIcon'

export const TeamSection = ({ teamMembers }) => {
  console.log('===team==>', teamMembers)

  return (
    <section className="team-cards-section">
      {teamMembers.map((member) => (
        <article key={member._id} className="team-member-card">
          <div className="profile-image">
            <Image
              src={member.profileImage}
              alt={member.name}
              fill
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
          <div className="hover-image">
            <Image
              src={member.profileHoverImage}
              alt={member.name + 'hover'}
              fill
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
          <div className="text-content">
            <h2>{member.name}</h2>
            <h3>{member.position}</h3>
            {member.bio.map((block) => (
              <div className="description" key={block._key}>
                <SanityBlock sanityContent={block} />
              </div>
            ))}

            <a href={member.linkedin}>
              <LinkedinIcon />
            </a>
          </div>
        </article>
      ))}
    </section>
  )
}
