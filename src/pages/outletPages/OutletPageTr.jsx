import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import linksContext from "../../data/Links";
import Footer from "../../components/Footer";

const OutletPageTr = () => {
  const links = linksContext.TR;
  return (
    <>
      <Header links={links} logoLink="/" />
      <Outlet />
      <Footer text={" © 2024 Tüm Hakları Saklıdır. MQ Hotel Suites "} />
    </>
  );
};

export default OutletPageTr;
