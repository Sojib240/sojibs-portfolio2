import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { use, useEffect, useRef, useState } from "react";
import Marquee from "../Components/Marquee";

const AboutPage = () => {
    document.title = "About ― Mejbaul Alom";
    // time
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    const firstTextsRef = useRef([]);
    const secondTextsRef = useRef([]);
    const thirdTextsRef = useRef([]);
    const fourthTextsRef = useRef([]);
    const fifthTextsRef = useRef([]);
    const sixthTextsRef = useRef([]);
    const seventhTextRef = useRef();
    const eighthTextsRef = useRef();
    useGSAP(() => {
        const aboutTl = gsap
            .timeline({
                delay: 0.9,
                duration: 0.5,
            })
            .from(
                firstTextsRef.current,
                {
                    y: "100%",
                    stagger: 0.005,
                },
                "st"
            )
            .from(
                secondTextsRef.current,
                {
                    y: "100%",
                    stagger: 0.005,
                },
                "st"
            )
            .from(
                thirdTextsRef.current,
                {
                    y: "100%",
                    stagger: 0.005,
                },
                "st"
            )
            .from(
                fourthTextsRef.current,
                {
                    y: "100%",
                    stagger: 0.005,
                },
                "st"
            )
            .from(
                fifthTextsRef.current,
                {
                    y: "100%",
                    stagger: 0.005,
                },
                "st"
            )
            .from(
                sixthTextsRef.current,
                {
                    y: "100%",
                    stagger: 0.004,
                    // duration: 0.3,
                },
                "st"
            )
            .from(
                seventhTextRef.current,
                {
                    y: "100%",
                },
                "st"
            )
            .from(
                eighthTextsRef.current,
                {
                    opacity: 0,
                    y: "30%",
                },
                "st"
            );
    }),
        [];

    return (
        <>
            <section className="bg-color-black px-4 sm:px-6 md:px-8 lg:px-10 pb-16 lg:pb-20 xl:pb-26 pt-27 md:pt-32 lg:pt-35 xl:pt-45 text-color-white select-none min-h-[60vh] h-full flex justify-center items-center relative z-50">
                <div className="flex lg:flex-row flex-col gap-12 lg:gap-0 text-[19px] xs:text-xl sm:text-[22px] xl:text-2xl 2xl:text-[26px] uppercase">
                    <div className="w-full sm:w-[70%] md:w-[53%] lg:w-[45%] pr-0 lg:pr-[10vw] xl:pr-[12vw] 2xl:pr-[16vw]">
                        {/*  */}
                        <div className="mb-6 pr-[1vw]">
                            {"Currently available for collaborations 🚀"
                                .split(" ")
                                .map((words, idx) => {
                                    return (
                                        <div
                                            key={idx}
                                            className="overflow-hidden inline-block"
                                        >
                                            <span
                                                ref={(el) =>
                                                    (firstTextsRef.current[
                                                        idx
                                                    ] = el)
                                                }
                                                className="font-font2 inline-block"
                                            >
                                                {words}
                                            </span>
                                            &nbsp;
                                        </div>
                                    );
                                })}
                        </div>
                        {/*  */}
                        <div
                            ref={eighthTextsRef}
                            className="w-36 aspect-square rounded-full overflow-hidden group mb-8"
                        >
                            <img
                                className="w-full h-full object-cover object-top scale-110"
                                src="/Images/Others/me.jpg"
                                alt=""
                            />
                        </div>
                        {/*  */}
                        <div className="">
                            {"MY LOCAL TIME".split(" ").map((words, idx) => {
                                return (
                                    <div
                                        key={idx}
                                        className="overflow-hidden inline-block"
                                    >
                                        <span
                                            ref={(el) =>
                                                (secondTextsRef.current[idx] =
                                                    el)
                                            }
                                            className="font-font2 inline-block"
                                        >
                                            {words}
                                        </span>
                                        &nbsp;
                                    </div>
                                );
                            })}
                            <div className="overflow-hidden  mb-4 lg:mb-6">
                                <p ref={seventhTextRef} className="font-font2">
                                    {time.toLocaleTimeString()}
                                </p>
                            </div>
                        </div>
                        {/*  */}
                        <div className="">
                            {"Whether it's a bold new idea or refining an existing product, I’m here to help turn your vision into a responsive, high-quality web experience."
                                .split(" ")
                                .map((words, idx) => {
                                    return (
                                        <div
                                            key={idx}
                                            className="overflow-hidden inline-block"
                                        >
                                            <span
                                                ref={(el) =>
                                                    (thirdTextsRef.current[
                                                        idx
                                                    ] = el)
                                                }
                                                className="font-font2 inline-block"
                                            >
                                                {words}
                                            </span>
                                            &nbsp;
                                        </div>
                                    );
                                })}
                        </div>
                        {/*  */}
                    </div>
                    <div className="w-full lg:w-[55%] pl-0 xl:pl-[1vw] 2xl:pl-[3vw]">
                        {/*  */}
                        <div className="pr-0 xl:pr-[5vw]">
                            {"Hi, I'm Mejbaul alom, a Front-End Web Developer who enjoys building clean, responsive, and engaging websites."
                                .split(" ")
                                .map((words, idx) => {
                                    return (
                                        <div
                                            key={idx}
                                            className="overflow-hidden inline-block"
                                        >
                                            <span
                                                ref={(el) =>
                                                    (fourthTextsRef.current[
                                                        idx
                                                    ] = el)
                                                }
                                                className="font-font2 inline-block"
                                            >
                                                {words}
                                            </span>
                                            &nbsp;
                                        </div>
                                    );
                                })}
                        </div>
                        {/*  */}
                        <div className="mt-4 lg:mt-5 pr-0 xl:pr-[5vw]">
                            {"I focus on writing clean code, crafting responsive layouts, and developing smooth user experiences that work across all screen sizes."
                                .split(" ")
                                .map((words, idx) => {
                                    return (
                                        <div
                                            key={idx}
                                            className="overflow-hidden inline-block"
                                        >
                                            <span
                                                ref={(el) =>
                                                    (fifthTextsRef.current[
                                                        idx
                                                    ] = el)
                                                }
                                                className="font-font2 inline-block"
                                            >
                                                {words}
                                            </span>
                                            &nbsp;
                                        </div>
                                    );
                                })}
                        </div>
                        {/*  */}
                        <div className="mt-8 lg:mt-10">
                            {"I'm always learning and exploring new technologies to improve my craft. I enjoy solving problems and turning creative ideas into real products. I work with HTML, CSS, JavaScript, and modern tools like React to bring ideas to life. My goal is to build web experiences that are fast, accessible, and visually impactful. Every project is an opportunity to grow, collaborate, and create meaningful digital solutions that truly connect with users."
                                .split(" ")
                                .map((words, idx) => {
                                    return (
                                        <div
                                            key={idx}
                                            className="overflow-hidden inline-block"
                                        >
                                            <span
                                                ref={(el) =>
                                                    (sixthTextsRef.current[
                                                        idx
                                                    ] = el)
                                                }
                                                className="text-xl lg:text-[22px] xl:text-2xl 2xl:text-[26px] font-font1 inline-block"
                                            >
                                                {words}
                                            </span>
                                            &nbsp;
                                        </div>
                                    );
                                })}
                        </div>
                        {/*  */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutPage;
