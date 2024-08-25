'use client'
import './Counter.css'
import { motion } from 'framer-motion'
import { AnimatedCounter } from '@components/AnimatedCounter/AnimatedCounter'

export const Counter = ({ translationKeys, teamMembersInfo }) => {
  const countScientists = teamMembersInfo.filter(
    (member) => member.isScientist,
  ).length
  const countFemale = teamMembersInfo.filter((member) => member.isFemale).length

  return (
    <motion.section className="counterContainer">
      <article className="counterBox">
        <h2>
          <AnimatedCounter from={0} to={teamMembersInfo.length} />
        </h2>
        <p>{translationKeys.team}</p>
      </article>
      <article className="counterBox">
        <h2>
          <AnimatedCounter from={0} to={countScientists} />
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
          <AnimatedCounter from={0} to={countFemale} />
          /
          <AnimatedCounter from={0} to={teamMembersInfo.length - countFemale} />
        </h2>
        <p>{translationKeys.femaleMale}</p>
      </article>
    </motion.section>
  )
}
