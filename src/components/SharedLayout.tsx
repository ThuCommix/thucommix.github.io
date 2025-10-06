import { AnimatePresence } from "framer-motion";
import React from "react";
import { useLocation, useOutlet } from "react-router";
import Animation from "./Animation"

export default function SharedLayout() {
    const location = useLocation();
    const element = useOutlet();

    const wrap = element
        ? <Animation style={{ height: '100%' }}>
            {element}
        </Animation>
        : undefined;

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <AnimatePresence mode="wait" initial={true}>
                {wrap && React.cloneElement(wrap, { key: location.pathname })}
            </AnimatePresence>
        </div>
    )
}