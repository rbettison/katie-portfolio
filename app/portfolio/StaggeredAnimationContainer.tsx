'use client'

import { motion } from "framer-motion"

export default function StaggeredAnimationContainer({ delay, childrenDelay, containerClassName, children}: 
        {delay: number, childrenDelay: number, containerClassName: string, children: React.ReactNode}) {

    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delayChildren: delay,
            staggerChildren: childrenDelay
          }
        }
      }

    return (
        <motion.ul
            variants={container}
            initial="hidden"
            animate="show"
            className={containerClassName}>
            {children}
        </motion.ul>
    )
}