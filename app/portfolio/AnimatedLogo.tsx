'use client';

import { motion } from "framer-motion";

export default function AnimatedLogo() {
    return (
        <motion.div
            className="w-10 h-10 rounded-full bg-black"

            variants={{
                hidden: {
                    opacity: 0, scale: 0.5
                },
                show: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                        duration: 0.3,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                        type: "spring",
                        damping: 5,
                        stiffness: 100,
                        restDelta: 0.001
                        }
                    }
                }
            }}
        />
    )
}