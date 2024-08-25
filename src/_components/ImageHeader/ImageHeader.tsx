import Image from 'next/image'
import React from 'react'
import './ImageHeader.css'

export const ImageHeader = ({ image, alt, width, height }) => {
  return (
    <div
      className="imageHeaderContainer"
      style={{ backgroundImage: `url(${image.src})` }}
    ></div>
  )
}
