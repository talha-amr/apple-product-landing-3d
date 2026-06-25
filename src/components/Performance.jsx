import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { performanceImages, performanceImgPositions } from "../constants";
import { useMediaQuery } from "react-responsive";

const Performance = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
    const sectionRef = useRef(null);

    useGSAP(
        () => {
            const sectionEl = sectionRef.current;
            if (!sectionEl) return;

            // 1. Text Animation - Fades in and slides up
            gsap.fromTo(
                ".content p",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".content p",
                        start: "top 90%",
                        end: "top 50%",
                        scrub: 1,
                        invalidateOnRefresh: true,
                    },
                }
            );

            // 2. Image Burst Timeline (Desktop only)
            if (isMobile) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionEl,
                    start: "top bottom",
                    end: "center center", 
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            });

            // We create a custom "burst from center" effect that sets us apart from 
            // the standard instructor code.
            performanceImgPositions.forEach((item) => {
                // p5 is our center point (the macbook), so it stays static
                if (item.id === "p5") return;

                const selector = `.${item.id}`;
                
                // STARTING STATE: Clustered at the center, faded, and slightly smaller
                const startProps = {
                    bottom: "20%", // Starts near the macbook
                    opacity: 0.5,
                    scale: 0.8,
                };
                
                // Using 50% for either left or right centers them perfectly
                // and avoids GSAP snapping issues between left/right interpolation
                if (typeof item.left === "number") startProps.left = "50%";
                if (typeof item.right === "number") startProps.right = "50%";

                // ENDING STATE: Scattered to their positions from constants
                const endProps = {
                    bottom: `${item.bottom}%`,
                    opacity: 1,
                    scale: 1,
                    ease: "power2.out",
                };

                if (typeof item.left === "number") endProps.left = `${item.left}%`;
                if (typeof item.right === "number") endProps.right = `${item.right}%`;
                if (item.transform) endProps.transform = item.transform;

                tl.fromTo(selector, startProps, endProps, 0);
            });
        },
        { scope: sectionRef, dependencies: [isMobile] }
    );

    return (
        <section id="performance" ref={sectionRef}>
            <h2>Next-level graphics performance. Game on.</h2>

            <div className="wrapper">
                {performanceImages.map((item, index) => (
                    <img
                        key={item.id || index}
                        src={item.src}
                        className={item.id}
                        alt={item.id}
                    />
                ))}
            </div>

            <div className="content">
                <p>
                    Run graphics-intensive workflows with a responsiveness that keeps up
                    with your imagination. The M4 family of chips features a GPU with a
                    second-generation hardware-accelerated ray tracing engine that renders
                    images faster, so{" "}
                    <span className="text-white">
                        gaming feels more immersive and realistic than ever.
                    </span>{" "}
                    And Dynamic Caching optimizes fast on-chip memory to dramatically
                    increase average GPU utilization — driving a huge performance boost
                    for the most demanding pro apps and games.
                </p>
            </div>
        </section>
    );
};

export default Performance;