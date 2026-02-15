"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel} from 'swiper/modules';
import 'swiper/css';
import styles from "./SwiperInfinityMenu.module.css";
import clsx from "clsx";

const SwiperInfinityMenu = () => {
    const headers: string[] = ["Header 1", "Header 2", "Header 3", "Header 4", "Header 5", "Header 6"];

    return (
        <section className={clsx(styles.swiperInfinityMenu)}>
            <div className={clsx(styles.swiper_menu__title)}>
                <h2>Swiper Infinity Menu</h2>
            </div>

            <Swiper
                modules={[Autoplay, Mousewheel]}
                slidesPerView={4}
                spaceBetween={20}
                loop={true}
                speed={500}
                mousewheel={{
                    forceToAxis: true, // Only horizontal scroll
                    sensitivity: 1, // Adjust sensitivity (higher = more sensitive)
                }}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }}
                className={clsx(styles.swiper_menu__header)}
            >
                {headers.map((header: string, index: number) => (
                    <SwiperSlide key={index}>
                        <span className={clsx(styles.swiper_menu__item)}>
                            {header}
                        </span>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default SwiperInfinityMenu;