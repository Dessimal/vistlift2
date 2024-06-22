import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Button from "./Button";
import { robot } from "../assets";

const Proposition = () => {
  return (
    <section className="h-auto w-full">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>It's True</p>
        <h2 className={styles.sectionHeadText}>
          Creativity Meets Data-Driven Insights
        </h2>
      </motion.div>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-12 mt-20 mb-20">
        <div className="flex-1">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
            Our combination of creativity and analytics ensures that every
            marketing strategy we create is not only visually appealing, but
            also strategically sound. We delve deeply into market trends,
            consumer behavior, and competitive insights to identify unique
            opportunities for your brand.
          </motion.p>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
            Our tailored marketing solutions ensure that your brand stands out
            in competitive markets, attracts prospects, and achieves impressive
            growth. It's about fostering a partnership built on trust,
            collaboration, and shared success. Let us work together to unlock
            your brand's full potential and push it to new vistas.
          </motion.p>
          <Button>Schedule a Consultation</Button>
        </div>

        <div className="flex-1 sm:p-10">
          <img className="object-contain w-50 h-50" src={robot} alt="robot" />
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Proposition, "proposition");
