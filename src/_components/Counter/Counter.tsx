'use client'
import './Counter.css'
import { motion } from 'framer-motion'
import { AnimatedCounter } from '@components/AnimatedCounter/AnimatedCounter'

export const Counter = ({ translationKeys }) => {
  return (
    <motion.section className="counterContainer">
      <article className="counterBox">
        <h2>
          <AnimatedCounter from={0} to={8} />
        </h2>
        <p>{translationKeys.team}</p>
      </article>
      <article className="counterBox">
        <h2>
          <AnimatedCounter from={0} to={6} />
        </h2>
        <p>{translationKeys.scientists}</p>
      </article>
      <article className="counterBox">
        <h2>
          <AnimatedCounter from={0} to={5} />
        </h2>
        <p>{translationKeys.languages}</p>
      </article>
      <article className="counterBox">
        <h2>
          <AnimatedCounter from={0} to={7} />
          /<AnimatedCounter from={0} to={1} />
        </h2>
        <p>{translationKeys.femaleMale}</p>
      </article>
    </motion.section>
  )
}
