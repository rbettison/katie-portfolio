'use client';
import { motion } from "framer-motion";
import { useFollowPointer } from "./use-follower-pointer";
import { useRef } from "react";

export default function MouseTracker() {

        const ref = useRef(null);
        const { x, y } = useFollowPointer(ref);

        return (
            <motion.div
            ref={ref}
            className="w-5 h-5 rounded-full bg-red-50 z-0"
            animate={{ x, y }}
            transition={{
                type: "spring",
                damping: 3,
                stiffness: 50,
                restDelta: 0.001
            }}
            />
        );
    
}

