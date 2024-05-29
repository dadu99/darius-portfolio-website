import { motion } from "framer-motion"
import HeroImage from "../../assets/heroImage.jpg"



const Image = () => {
    return (
        <motion.div initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2, duration: 0.4, ease: "easeIn" },
            }}
        >
            <motion.div initial={{ opacity: 0 }}
                animate={{
                    opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
                }}>
                <img src={HeroImage} alt="Darius profile picture"
                    width={127}
                    height={103}
                    className="rounded-2xl relative object-contain object-center w-full pt-6 sm:w-96 z-50" />
            </motion.div>
        </motion.div>
    )
}

export default Image