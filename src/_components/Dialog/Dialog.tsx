import React from 'react'
import './Dialog.css'
import Image from 'next/image'
import teamShape from '../../_assets/shapes/teamShapeTurquouise.svg'
import SanityBlock from '@components/SanityBlock/SanityBlock'

const Dialog = ({ isOpen, onClose, selectedMember }) => {
  if (!isOpen || !selectedMember) return null

  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
        <div className="dialog-image-section">
          <div className="dialog-image">
            <Image
              src={selectedMember?.profileImage}
              alt={selectedMember?.name}
              fill
              style={{
                objectFit: 'contain',
                zIndex: 2,
              }}
            />
            <Image
              className="dialog-team-shape"
              src={teamShape}
              alt="team shape"
              fill
              style={{
                objectFit: 'cover',
                zIndex: 1,
              }}
            />
          </div>
        </div>

        <div className="dialog-body">
          <h2 className="dialog-title">{selectedMember?.name}</h2>
          <p className="dialog-position">{selectedMember?.position}</p>
          {selectedMember.bio &&
            selectedMember.bio.map((block) => (
              <div className="description" key={block._key}>
                <SanityBlock sanityContent={block} />
              </div>
            ))}
          <div className="dialog-actions">
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialog
