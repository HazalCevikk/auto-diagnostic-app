import { motion, AnimatePresence } from "framer-motion";

export default function MainContextAndMotion({ component, currentStep }) {

    const variants = {
        initial: direction => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        animate: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        },
        exit: direction => ({
            x: direction > 0 ? -1000 : 1000,
            opacity: 0,
            transition: { duration: 0.5 }
        })
    };

    return (
        <div className="relative">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentStep}
                    custom={currentStep}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    {Object.values(component)[currentStep]}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}