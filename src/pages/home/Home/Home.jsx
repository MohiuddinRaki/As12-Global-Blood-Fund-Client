import { Helmet } from "react-helmet-async";
import Banner from "../banner/Banner";
import ContactUs from "../contactUs/ContactUs";
import Featured from "../featured/Featured";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Global Blood Fund || Home</title>
      </Helmet>
      <Banner></Banner>
      <Featured></Featured>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
