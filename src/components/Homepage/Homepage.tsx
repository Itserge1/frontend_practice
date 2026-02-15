"use client";

import styles from "./HomePage.module.css";
import clsx from 'clsx';

const HomePage = () => {
    return (
        <section className={clsx(
            styles.homepage,
        )}>
            <p>Hello From HomePage!</p>
        </section>
    );
};

export default HomePage;