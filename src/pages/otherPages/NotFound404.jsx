import linksContext from "../../data/Links";
import classes from "./NotFound404.module.css";
import Header from "../../components/Header";
import notFound from "../../assets/Pictures/not-found.jpg";
import ShadowWrapper from "../main-page/main-page-components/components/ShadowWrapper";

const NotFound404 = ({ lan }) => {
  const links = linksContext[lan.toUpperCase()];
  return (
    <ShadowWrapper img={notFound}>
      <Header links={links} logoLink={lan !== "tr" ? `/${lan}` : "/"} />
    </ShadowWrapper>
  );
};

export default NotFound404;
