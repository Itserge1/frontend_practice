"use client"

import { motion, useMotionValue, useAnimationControls } from 'framer-motion';
import { useState, useEffect } from 'react';
import styles from "./FramerInfinityMenu.module.css";
import clsx from "clsx";

const FramerInfinityMenu = () => {
    const headers: string[] = ["Header 1", "Header 2", "Header 3", "Header 4", "Header 5", "Header 6"];
    const duplicatedHeaders = [...headers, ...headers, ...headers]; // Triple for better loop

    const [containerWidth, setContainerWidth] = useState(0);
    const x = useMotionValue(0);

    useEffect(() => {
        const itemWidth = (window.innerWidth * 0.9) / 4;
        const width = itemWidth * headers.length;
        setContainerWidth(width);

        // Start in the middle set for seamless looping
        x.set(-width);
    }, [headers.length, x]);

    // Handle infinite loop when dragging
    useEffect(() => {
        const unsubscribe = x.on("change", (latest) => {
            if (containerWidth === 0) return;

            // If scrolled too far right, jump to middle
            if (latest > 0) {
                x.set(-containerWidth);
            }
            // If scrolled too far left, jump to middle
            else if (latest < -containerWidth * 2) {
                x.set(-containerWidth);
            }
        });

        return () => unsubscribe();
    }, [x, containerWidth]);

    return (
        <section className={clsx(styles.framerInfinityMenu)}>
            <div className={clsx(styles.framer_menu__title)}>
                <h2>Framer Infinity Menu</h2>
            </div>

            <div className={clsx(styles.framer_menu__container)}>
                <motion.div
                    className={clsx(styles.framer_menu__header)}
                    style={{ x }}
                    drag="x"
                    dragConstraints={{ left: -containerWidth * 2, right: 0 }}
                    dragElastic={0.1}
                    dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
                >
                    {duplicatedHeaders.map((header: string, index: number) => (
                        <motion.div
                            key={index}
                            className={clsx(styles.framer_menu__item)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>{header}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default FramerInfinityMenu;