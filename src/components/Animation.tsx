import { motion } from 'framer-motion'
import React from 'react'

type AnimationEffectProps = {
    children: React.ReactElement
    duration?: number
}

export default function Animation(props: AnimationEffectProps) {
    const variants = {
        hidden: { opacity: 0, x: -100, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 100, y: 0 },
    };

    return (
        <motion.div
            style={{ height: '100%' }}
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: props.duration ?? 0.2, type: "tween" }}
            className="relative">
            {props.children}
        </motion.div>
    )
}