import { motion } from "framer-motion"
import HeroImage from "../../assets/heroImage.jpg"



const Image = () => {
    return (
        <motion.div initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 1, duration: 0.6, ease: "easeIn" },
            }}
        >
            <motion.div initial={{ opacity: 0 }}
                animate={{
                    opacity: 1, transition: { delay: 1, duration: 0.6, ease: "easeInOut" },
                }}>
                <img src={HeroImage}
                    alt="Darius profile picture"
                    width={127}
                    height={103}
                    loading="lazy"
                    className="rounded-2xl relative object-contain object-center w-full pt-6 sm:w-96 z-50" />
            </motion.div>
        </motion.div>
    )
}

export default Image