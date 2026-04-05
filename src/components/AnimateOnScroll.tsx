import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface Props {
    children: React.ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "zoom";
    duration?: number;
    className?: string;
}

const variants = {
    up: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
    zoom: { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1 } },
};

export default function AnimateOnScroll({
    children,
    delay = 0,
    direction = "up",
    duration = 0.6,
    className = "",
}: Props) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants[direction]}
            transition={{ duration, delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}