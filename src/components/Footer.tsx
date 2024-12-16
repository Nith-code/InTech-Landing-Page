import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <section
      className={`flex flex-row items-start justify-start py-0 px-[155px] box-border max-w-full text-left text-29xl text-black font-inter mq750:pl-[77px] mq750:pr-[77px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <Box className="flex-1 rounded-8xs bg-paleturquoise flex flex-row items-start justify-start pt-[63px] pb-[45px] pl-[70px] pr-[57px] box-border gap-[35px] max-w-full mq750:gap-[17px] mq750:pt-[41px] mq750:pb-[29px] mq750:box-border mq1275:flex-wrap mq1275:pl-[35px] mq1275:pr-7 mq1275:box-border">
        <Box className="h-[561px] w-[1117px] relative rounded-8xs bg-paleturquoise hidden max-w-full" />
        <img
          className="h-[453px] flex-1 relative rounded-3xs max-w-full overflow-hidden object-cover min-w-[379px] z-[1] mq1100:min-w-full"
          loading="lazy"
          alt=""
          src="/intech@2x.png"
        />
        <Box className="w-[372px] flex flex-col items-start justify-start pt-[61px] px-0 pb-0 box-border max-w-full mq1100:min-w-full mq1275:flex-1">
          <Box className="self-stretch flex flex-col items-start justify-start gap-[33px] max-w-full mq450:gap-4">
            <Typography
              className="m-0 relative z-[1] mq750:text-19xl mq450:text-10xl"
              variant="inherit"
              component="h1"
              sx={{ fontWeight: "700" }}
            >
              About InTech
            </Typography>
            <Box className="self-stretch flex flex-row items-start justify-start py-0 pl-3 pr-0 box-border max-w-full text-13xl">
              <Box className="flex-1 flex flex-col items-start justify-start gap-[25px] max-w-full">
                <Box className="relative z-[1]">
                  <Typography
                    className="m-0"
                    variant="inherit"
                    sx={{ fontWeight: "600" }}
                  >
                    Mission
                  </Typography>
                  <Typography
                    className="m-0"
                    variant="inherit"
                    sx={{ fontWeight: "500", fontSize: "12px" }}
                  >
                    Revolutionize workplace efficiency and security through
                    innovative smart technology solutions.
                  </Typography>
                </Box>
                <Box className="relative z-[1]">
                  <Typography
                    className="m-0"
                    variant="inherit"
                    sx={{ fontWeight: "600" }}
                  >
                    Vision
                  </Typography>
                  <Typography
                    className="m-0"
                    variant="inherit"
                    sx={{ fontWeight: "500", fontSize: "12px" }}
                  >
                    Be the leading provider of cutting-edge smart technology,
                    creating smarter, more efficient, and secure work
                    environments for businesses of all sizes.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Footer;
