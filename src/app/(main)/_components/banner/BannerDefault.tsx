"use client"
import { motion, Variants } from 'motion/react'
import { BannerData } from '../../_data/sample/BannerData'
import Image from 'next/image'
import Link from 'next/link'
import { ButtonPrimary } from '../buttons/ButtonPrimary'

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  },
}

export default function BannerDefault() {
  const { image, title, description, href, btnTitle } = BannerData.one

  return (
    <section className="relative w-full h-[98vh] overflow-hidden bg-linear-to-bl from-blue-800 to-blue-950">

      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}>
        <Image
          src={image}
          fill
          priority
          className="object-cover"
          alt=""
        />
      </motion.div>
      <div className="absolute inset-0 bg-linear-to-tr from-black/70 to-transparent z-10" />

      <motion.div
        className="absolute inset-0 z-20 flex flex-col justify-center items-start px-12 pb-12 pt-30 text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold lg:w-1/2 mb-4 text-shadow-xl">
            {title}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-xl font-light max-w-lg mb-8 text-shadow-md">
          {description}
        </motion.p>

        <motion.div variants={itemVariants}>
          <Link href={href}>
            <ButtonPrimary title={btnTitle} css="text-lg py-3 px-8" />
          </Link>
        </motion.div>
      </motion.div>

    </section>
  )
}