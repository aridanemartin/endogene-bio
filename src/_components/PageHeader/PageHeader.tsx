'use client'

import Image from 'next/image'
import './PageHeader.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation } from 'swiper/modules'
import team1Image from '../../_assets/pictures/joinUs/team1.webp'
import team2Image from '../../_assets/pictures/joinUs/team2.webp'
import team3Image from '../../_assets/pictures/joinUs/team3.webp'
import team4Image from '../../_assets/pictures/joinUs/team4.webp'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export const PageHeader = () => {
  return (
    <div className="pageHeader">
      <div className="image">
        <>
          <Swiper
            spaceBetween={30}
            effect={'fade'}
            loop={true}
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            modules={[Autoplay, EffectFade, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image src={team2Image} alt="Join us" fill />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={team3Image} alt="Join us" fill />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={team4Image} alt="Join us" fill />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={team1Image} alt="Join us" fill />
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </div>
  )
}
