import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";

export type PlatformSelectorType = {
  className?: string;
};

const PlatformSelector: FunctionComponent<PlatformSelectorType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0 box-border max-w-full ${className}`}
    >
      <footer className="flex-1 bg-goldenrod flex flex-row items-start justify-between pt-8 pb-[94.6px] pl-[130px] pr-[120px] box-border max-w-full gap-5 text-left text-sm text-white font-inter mq750:pl-[65px] mq750:pr-[60px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1275:flex-wrap">
        <Box className="h-[318px] w-[1438px] relative bg-goldenrod hidden max-w-full" />
        <Box className="w-[496px] flex flex-col items-start justify-start pt-[33px] pb-0 pl-0 pr-3 box-border max-w-full text-17xl">
          <Typography
            className="m-0 relative z-[1] mq750:text-10xl mq450:text-3xl"
            variant="inherit"
            component="h1"
            sx={{ fontWeight: "700" }}
          >
            "Empowering smarter workplaces with innovative solutions – InTech."
          </Typography>
        </Box>
        <Box className="flex flex-col items-start justify-start gap-[21.7px]">
          <Box className="self-stretch relative font-semibold z-[1]">
            Quick Links
          </Box>
          <Box className="flex flex-row items-start justify-start py-0 pl-[18px] pr-0">
            <Box className="w-[79.4px] flex flex-col items-start justify-start gap-[25px]">
              <Box className="self-stretch relative font-medium z-[1]">
                Home
              </Box>
              <Box className="self-stretch relative font-medium z-[1]">
                Products
              </Box>
              <Box className="self-stretch relative font-medium z-[1]">
                About Us
              </Box>
              <Box className="self-stretch relative font-medium z-[1]">
                Contact
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="w-[400px] flex flex-col items-start justify-start gap-[16.4px] max-w-full">
          <Box className="w-[180px] relative font-semibold inline-block z-[1]">
            Contact Us
          </Box>
          <Box className="self-stretch flex flex-row items-start justify-start py-0 pl-[23px] pr-0 box-border max-w-full">
            <Box className="flex-1 flex flex-col items-start justify-start gap-[25px] max-w-full">
              <Box className="relative font-medium z-[1]">
                Green Arcade 1, 2 And 3, Thmey Village, Chambak Commune, Phnom
                Srouch District, Kampong Speu Province, Cambodia"
              </Box>
              <Box className="w-[146px] relative font-medium inline-block z-[1]">
                012 345 678
              </Box>
              <Box className="flex flex-row items-start justify-start gap-[13px]">
                <img
                  className="h-[38px] w-[38px] relative z-[1]"
                  loading="lazy"
                  alt=""
                  src="/group-89.svg"
                />
                <Box className="h-[38px] w-[38px] relative rounded-7xl border-white-font border-[1px] border-solid box-border z-[1]">
                  <img
                    className="absolute top-[4px] left-[4px] w-[30px] h-[30px] overflow-hidden"
                    loading="lazy"
                    alt=""
                    src="/icons8instagram-1.svg"
                  />
                  <Box className="absolute top-[0px] left-[0px] rounded-7xl border-white-font border-[1px] border-solid box-border w-full h-full hidden" />
                </Box>
                <Box className="h-[38px] w-[38px] relative rounded-7xl border-white-font border-[1px] border-solid box-border z-[1]">
                  <Box className="absolute top-[0px] left-[0px] rounded-7xl border-white-font border-[1px] border-solid box-border w-full h-full hidden" />
                  <img
                    className="absolute h-[69.21%] w-[69.47%] top-[15.79%] right-[14.74%] bottom-[15%] left-[15.79%] max-w-full overflow-hidden max-h-full z-[1]"
                    alt=""
                    src="/vector-12.svg"
                  />
                </Box>
                <img
                  className="h-[38px] w-[38px] relative object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/group-87@2x.png"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </footer>
    </section>
  );
};

export default PlatformSelector;
