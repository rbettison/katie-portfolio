'use client';

import { motion } from "framer-motion";

export default function Rocket({message, subMessage=""} : {message: string, subMessage?: string}) {



    return(
        <motion.div
            variants={{
                show: {opacity: 1},
                hidden: {opacity: 0}
            }}
            whileHover={{scale: 2}}
            className="relative">
        <div>{message}</div>
        {subMessage != "" && <p className="font-normal text-lg">{subMessage}</p>}
        

        </motion.div>
    )
}



