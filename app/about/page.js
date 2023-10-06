import Banner from "@/components/About/Banner/Banner";
import styles from "./About.module.scss";
import Counter from "@/components/About/Counter/Counter";

import Discriber from "@/components/About/Discriber/Discriber";
import Quote from "@/components/About/Quote/Quote";
import Galery from "@/components/About/Galery/Galery";
import Benefits from "@/components/About/Benefits/Benefits";
import Cooperation from "@/components/About/Cooperation/Cooperation";
export default function About() {
  return (
    <div className={styles.container}>
      <Banner />
      <Counter />
      <Discriber />
      <Quote />
      <Galery />
      <Benefits />
      <Cooperation />
    </div>
  );
};