import { notFound } from 'next/navigation'

const CatchAll = ({ params }) => {
  console.log('===params==>', params)
  return notFound()
}

export default CatchAll
