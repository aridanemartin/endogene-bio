import SanityBlock from '@components/SanityBlock/SanityBlock'
import React from 'react'
import './TeamSection.css'
import Image from 'next/image'
import { LinkedinIcon } from '@components/SocialIcon/LinkedinIcon'
import teamShape from '../../_assets/shapes/teamShapeTurquouise.svg'

export const TeamSection = ({ teamMembers }) => {
  return (
    <section className="team-cards-section">
      {teamMembers.map((member) => (
        <article key={member._id} className="team-member-card">
          <div className="content-wrapper">
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
            <div className="text-content">
              {member.bio &&
                member.bio.map((block) => (
                  <div className="description" key={block._key}>
                    <SanityBlock sanityContent={block} />
                  </div>
                ))}
            </div>
            <div className="team-shape">
              <Image
                src={teamShape}
                alt="team shape"
                fill
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
            <a
              className="linkedinIcon"
              href={member.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon />
            </a>
          </div>
          <div className="title">
            <h2>{member.name}</h2>
            <h3>{member.position}</h3>
          </div>
        </article>
      ))}
    </section>
  )
}
