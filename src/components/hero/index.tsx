import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HYPERGYM logo3.png";
import HomePageGraphic from "@/assets/HYPERGYMCorrected.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import styles from './Hero.module.css';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Hero = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="home" className="gap-16 bg-slate-dark text-slate-white py-10 md:h-full md:pb-0">

      {/*Image and main header*/}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/*Main header*/}
        <div className="z-10 mt-32 md:basis-3/5">
          {/*Headings*/}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="homepage-text" src={HomePageText} />
              </div>
            </div>

            <p className="mt-8 text-sm ">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the Body Shapes That you
              Dream of.. Get Your Dream Body Now.
            </p>
          </motion.div>

          {/*Actions*/}
          <div className="mt-8 flex items-center gap-8">
            <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>

        {/*Image*/}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img alt="homepage-graphic" src={HomePageGraphic} />
        </div>
      </motion.div>

      {/*Sponsors*/}
            <div className="h-[150px] w-full bg-slate-dark py-10 overflow-hidden">
              <div className="relative h-full">
                <div className={`${styles.sponsorSlide} absolute h-full w-[300%] flex items-center`}>
                  <img alt="redbull-sponsor" src={SponsorRedBull} className="h-12 md:h-4 mx-4 md:mx-8"/>
                  <img alt="forbes-sponsor" src={SponsorForbes} className="h-4 md:h-4 mx-4 md:mx-8"/>
                  <img alt="fortune-sponsor" src={SponsorFortune} className="h-4 md:h-4 mx-4 md:mx-8"/>
                  <img alt="redbull-sponsor" src={SponsorRedBull} className="h-4 md:h-4 mx-4 md:mx-8"/>
                  <img alt="forbes-sponsor" src={SponsorForbes} className="h-4 md:h-4 mx-4 md:mx-8"/>
                  <img alt="fortune-sponsor" src={SponsorFortune} className="h-4 md:h-4 mx-4 md:mx-8"/>
                </div>
              </div>
            </div>
          </section>
        );
      };


export default Hero;

