import Image from 'next/image'
import React from 'react'
import './ImageHeader.css'

export const ImageHeader = ({ image, alt, width, height }) => {
  console.log('===image==>', image)

  return (
    <div
      className="imageHeaderContainer"
      style={{ backgroundImage: `url(${image.src})` }}
    >
      {/* <Image
        src={image}
        alt={alt}
        width={width}
        height={height}
        sizes="100vw"
        style={{
          width: '100%',
          height: 'auto',
        }}
      /> */}
    </div>
  )
}
