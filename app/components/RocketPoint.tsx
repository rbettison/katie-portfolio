'use client';

import { motion } from "framer-motion";

export default function Rocket({message, subMessage=""} : {message: string, subMessage?: string}) {



    return(
        <motion.div
            variants={{
                show: {opacity: 1, scale: 1},
                hidden: {opacity: 0, scale: 0.2}
            }}
            whileHover={{scale: 1.1}}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="relative">
        <div className="font-highlightFont text-xl sm:text-4xl">{message}</div>
        {subMessage != "" && <p className="font-normal sm:text-md text-sm">{subMessage}</p>}
        

        </motion.div>
    )
}



