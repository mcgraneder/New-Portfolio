import type { GetStaticProps, NextComponentType, PageConfig } from "next";

import Home from "@app/container/Home/Home";
import About from "@app/container/About/About";
import Knowledge from "@app/container/Knowledge/Knowledge";
import Certifications from "@app/container/Certifications/Certifications";
import Work from "@app/container/Work/Work";
import Skills from "@app/container/Skills/Skills";
import Testimonial from "@app/container/Testimonial/Testimonial";
import Contact from "@app/container/Contact/Contact";
import Publications from "@app/container/Publications/Publications";


import commonStyle from "@app/styles/module/common.module.scss";
import { NavLink } from "@app/constants";
import { MainLayout } from "@app/layouts/MainLayout";
import Youtube from "@app/container/Youtube/Youtube";

const withSection = (Component: NextComponentType, id: NavLink) => {
  return (
    <section id={id} className={commonStyle["app__container"]}>
      <Component />
    </section>
  );
};

// export const config: PageConfig = {
//   unstable_runtimeJS: false,
// };

const LandingPage = () => {
  return (
    <MainLayout>
      {withSection(Home, "home")}
      {withSection(About, "about")}
      {withSection(Knowledge, "knowledge")}
      {withSection(Work, "work")}
      {withSection(Publications, "publications")}
      {withSection(Skills, "skills")}
      {withSection(Youtube, "youtube")}
      {withSection(Certifications, "certifications")}
      {withSection(Contact, "contact")}
    </MainLayout>
  );
};

export default LandingPage;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      title: "Home",
    },
  };
};
