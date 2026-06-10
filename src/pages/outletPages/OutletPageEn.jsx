import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import linksContext from "../../data/Links";
import Footer from "../../components/Footer";

const OutletPageEn = () => {
  const links = linksContext.EN;
  return (
    <>
      <Header links={links} logoLink="/en" />
      <Outlet />
      <Footer text={" © 2024 All rights Reserved. MQ Hotel Suites "} />
    </>
  );
};

export default OutletPageEn;
