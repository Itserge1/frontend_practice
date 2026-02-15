"use client"

import styles from "./InfinityMenu.module.css";
import clsx from "clsx";
import { useRef, useEffect } from "react";

const InfinityMenu = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const headers: string[] = [
        "Header 1",
        "Header 2",
        "Header 3",
        "Header 4",
        "Header 5",
        "Header 6",
        "Header 7",
        "Header 8",
        "Header 9",
        "Header 10",
        "Header 11",
        "Header 12",
        "Header 13",
        "Header 14",
        "Header 15",
    ];

    // Duplicate headers for infinite loop effect
    const duplicatedHeaders: string[] = [...headers, ...headers, ...headers, ...headers, ...headers, ...headers];

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const handleScroll = (): void => {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
            const singleSetWidth = scrollWidth / 3;

            // If scrolled to the end, jump back to the middle set
            if (scrollLeft >= singleSetWidth * 2) {
                scrollContainer.scrollLeft = singleSetWidth;
            }
            // If scrolled to the beginning, jump to the middle set
            else if (scrollLeft <= 0) {
                scrollContainer.scrollLeft = singleSetWidth;
            }
        };

        scrollContainer.addEventListener('scroll', handleScroll);

        // Start at the middle set for seamless looping
        scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3;

        return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }, []);

    // const scroll = (direction: 'left' | 'right'): void => {
    //     const container = scrollRef.current;
    //     if (!container) return;
    //
    //     const scrollAmount = container.clientWidth / 4; // Scroll by 1 item
    //     container.scrollBy({
    //         left: direction === 'left' ? -scrollAmount : scrollAmount,
    //         behavior: 'smooth'
    //     });
    // };

    return (
        <section className={clsx(styles.infinityMenu)}>
            <div className={clsx(styles.menu__title)}>
                <h2>Infinity Menu</h2>
            </div>

            <div
                ref={scrollRef}
                className={clsx(styles.menu__header)}
            >
                {duplicatedHeaders.map((header: string, index: number) => (
                    <span key={index} className={clsx(styles.menu__item)}>
                        {header}
                    </span>
                ))}
            </div>
            {/*<div>*/}
            {/*    <button onClick={() => scroll('left')}>←</button>*/}
            {/*    <button onClick={() => scroll('right')}>→</button>*/}
            {/*</div>*/}
        </section>
    )
}

export default InfinityMenu;