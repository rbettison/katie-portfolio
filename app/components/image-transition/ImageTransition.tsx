import { motion } from "framer-motion";
import { useState } from "react";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

export default function ImageTransition({id}: {id:String}) {
        const [isLoaded, setIsLoaded] = useState(false);
        const [isInView, setIsInView] = useState(false);
      
        return (
            <motion.div
              className="w-full h-full"
              initial={false}
              animate={
                isLoaded && isInView
                  ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                  : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
              }
              transition={{ duration: 1, delay: 0 }}
              viewport={{ once: true }}
              onViewportEnter={() => setIsInView(true)}
            >
              <img className="w-full h-full" src={`/${id}`} alt="" onLoad={() => setIsLoaded(true)} />
            </motion.div>
        );
}