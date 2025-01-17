'use client'

import SanityBlock from '@components/SanityBlock/SanityBlock'
import React, { useEffect, useState } from 'react'
import './TeamSection.css'
import Image from 'next/image'
import { LinkedinIcon } from '@components/SocialIcon/LinkedinIcon'
import teamShape from '../../_assets/shapes/teamShapeTurquouise.svg'
import { useHasScrolled } from 'src/_hooks/useHasScrolled'
import Dialog from '@components/Dialog/Dialog'

export const TeamSection = ({ teamMembers }) => {
  const [fullyVisibleCardIds, setFullyVisibleCardIds] = useState<Set<string>>(
    new Set(),
  )
  const fullyVisibleCardIdsRef = React.useRef(fullyVisibleCardIds)
  const hasScrolled = useHasScrolled()
  const cardRefs = React.useRef<(HTMLElement | null)[]>([])

  /** Modal State **/
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedMember, setSelectedMember] = useState(null)

  useEffect(() => {
    fullyVisibleCardIdsRef.current = fullyVisibleCardIds
  }, [fullyVisibleCardIds])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!hasScrolled) return

        const newFullyVisibleCardIds = new Set(fullyVisibleCardIdsRef.current)
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
  }, [hasScrolled])

  const handleOpenDialog = (member) => {
    setSelectedMember(member)
    setIsModalOpen(true)
  }

  return (
    <section className="team-cards-section">
      <Dialog
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedMember={selectedMember}
      />
      {teamMembers.map((member, index) => (
        <div key={member._id}>
          <article
            ref={(el) => (cardRefs.current[index] = el)}
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
                <button
                  className="readMoreButton"
                  onClick={() => handleOpenDialog(member)}
                >
                  Read more
                </button>
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
                <LinkedinIcon color="white" />
              </a>
            </div>
          </article>
          <div className="title">
            <h2>{member.name}</h2>
            <h3>{member.position}</h3>
          </div>
        </div>
      ))}
    </section>
  )
}
