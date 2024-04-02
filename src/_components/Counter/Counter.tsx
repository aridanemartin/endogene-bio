'use client'
import './Counter.css'
import { motion } from 'framer-motion'
import { AnimatedCounter } from '@components/AnimatedCounter/AnimatedCounter'

export const Counter = () => {
  return (
    <motion.section className="counterContainer">
      <article className="counterBox">
        <h2>
          <AnimatedCounter from={0} to={8} />
        </h2>
        <p>Team</p>
      </article>
      <article className="counterBox">
        <h2>
          <AnimatedCounter from={0} to={6} />
        </h2>
        <p>PhDs</p>
      </article>
      <article className="counterBox">
        <h2>
          <AnimatedCounter from={0} to={5} />
        </h2>
        <p>Languages</p>
      </article>
      <article className="counterBox">
        <h2>
          <AnimatedCounter from={0} to={7} />
          /<AnimatedCounter from={0} to={1} />
        </h2>
        <p>Female/male</p>
      </article>
    </motion.section>
  )
}
