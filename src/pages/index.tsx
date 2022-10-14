import type { NextPage } from 'next'
import { FC } from 'react'
import { trpc } from '../utils/trpc'
import { motion } from 'framer-motion'

const Home: NextPage = () => {
  return (
    <div>
      {/* Layout */}
      <Specials />
    </div>
  )
}

export default Home

const Specials: FC = () => {
  const specials = trpc.game.specials.useQuery()

  if (specials.data == undefined) {
    return <div>Handle undefined specials with spinner</div>
  }

  return (
    <motion.div layout>
      {[1, 2, 3, 4].map((key) => {
        return (
          <div key={key}>
            {specials.data.map(({ name, image, price }, key) => {
              return (
                <div key={key}>
                  <h1>{name}</h1>
                  <h2>{price}</h2>
                </div>
              )
            })}
          </div>
        )
      })}
    </motion.div>
  )
}
