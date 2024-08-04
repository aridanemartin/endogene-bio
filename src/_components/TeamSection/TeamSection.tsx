'use client'

import SanityBlock from '@components/SanityBlock/SanityBlock'
import React, { useEffect, useState } from 'react'
import './TeamSection.css'
import Image from 'next/image'
import { LinkedinIcon } from '@components/SocialIcon/LinkedinIcon'
import teamShape from '../../_assets/shapes/teamShapeTurquouise.svg'
import { useHasScrolled } from 'src/_hooks/useHasScrolled'

export const TeamSection = ({ teamMembers }) => {
  const [fullyVisibleCardIds, setFullyVisibleCardIds] = useState<Set<string>>(
    new Set(),
  )
  const hasScrolled = useHasScrolled()
  const cardRefs = React.useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!hasScrolled) return

        const newFullyVisibleCardIds = new Set(fullyVisibleCardIds)
        entries.forEach((entry) => {
          const cardId = entry.target.getAttribute('data-id')
          if (entry.isIntersecting && entry.intersectionRatio === 1) {
            newFullyVisibleCardIds.add(cardId)
          } else if (entry.intersectionRatio < 1) {
            newFullyVisibleCardIds.delete(cardId)
          }
        })
        setFullyVisibleCardIds(newFullyVisibleCardIds)
      },
      { threshold: [0, 1] },
    )

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card)
      })
    }
  }, [fullyVisibleCardIds, hasScrolled])

  return (
    <section className="team-cards-section">
      {teamMembers.map((member, index) => (
        <article
          ref={(el) => (cardRefs.current[index] = el)}
          key={member._id}
          data-id={member._id}
          className={`team-member-card ${
            fullyVisibleCardIds.has(member._id) ? 'fully-visible' : ''
          }`}
        >
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
