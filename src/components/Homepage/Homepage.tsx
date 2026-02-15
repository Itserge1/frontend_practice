"use client";

import styles from "./HomePage.module.css";
import clsx from 'clsx';

// Components
import InfinityMenu from "@/components/InfinityMenu/InfinityMenu";
import SwiperInfinityMenu from "@/components/SwiperInfinityMenu/SwiperInfinityMenu";
import FramerInfinityMenu from "@/components/FramerInfinityMenu/FramerInfinityMenu";

const HomePage = () => {
    return (
        <section className={clsx(
            styles.homepage,
        )}>
            <div className={clsx(styles.container)}>
                <InfinityMenu />
                <SwiperInfinityMenu />
                <FramerInfinityMenu />
            </div>
        </section>
    );
};

export default HomePage;