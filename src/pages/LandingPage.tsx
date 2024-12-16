import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import Content from "../components/Content";
import SolutionsGrid from "../components/SolutionsGrid";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import PlatformSelector from "../components/PlatformSelector";

const LandingPage: FunctionComponent = () => {
  return (
    <Box className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[35px] px-0 pb-0 box-border gap-8 leading-[normal] tracking-[normal] text-left text-29xl text-black font-inter mq750:gap-4">
      <img
        className="w-full h-[598.5px] absolute !m-[0] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0"
        alt=""
        src="/rectangle-4.svg"
      />
      <Content />
      <Box className="flex flex-row items-start justify-start pt-0 pb-[22px] pl-[161px] pr-40 box-border max-w-full mq1100:pl-20 mq1100:pr-20 mq1100:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <Typography
          className="m-0 relative mq750:text-19xl mq450:text-10xl"
          variant="inherit"
          component="h1"
          sx={{ fontWeight: "700" }}
        >
          Our Smart Solutions
        </Typography>
      </Box>
      <SolutionsGrid />
      <FrameComponent />
      <Footer />
      <PlatformSelector />
    </Box>
  );
};

export default LandingPage;
