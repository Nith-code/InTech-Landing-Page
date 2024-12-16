import { FunctionComponent } from "react";
import { Box, Typography, Button } from "@mui/material";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-5 box-border max-w-full text-left text-29xl text-black font-inter ${className}`}
    >
      <Box className="flex-1 bg-oldlace flex flex-row items-start justify-center pt-14 pb-12 pl-[172px] pr-[29px] box-border gap-[27px] max-w-full mq750:pl-[86px] mq750:pt-9 mq750:pb-[31px] mq750:box-border mq450:pl-5 mq450:box-border mq1275:flex-wrap">
        <Box className="h-[640px] w-[1440px] relative bg-oldlace hidden max-w-full" />
        <Box className="w-[394px] flex flex-col items-start justify-start pt-[79px] px-0 pb-0 box-border max-w-full mq750:min-w-full mq450:pt-[51px] mq450:box-border mq1275:flex-1">
          <Box className="self-stretch flex flex-col items-start justify-start gap-[26px] max-w-full">
            <Box className="self-stretch flex flex-col items-start justify-start gap-[5px] max-w-full">
              <Typography
                className="m-0 relative z-[1] mq750:text-19xl mq450:text-10xl"
                variant="inherit"
                component="h1"
                sx={{ fontWeight: "700" }}
              >
                Ready to Upgrade Your Business?
              </Typography>
              <Box className="w-[344px] flex flex-row items-start justify-start py-0 pl-1 pr-[3px] box-border max-w-full text-base">
                <Box className="flex-1 relative font-medium inline-block max-w-full z-[1]">
                  Request a demo today and discover how InTech can transform
                  your workplace!
                </Box>
              </Box>
            </Box>
            <Box className="w-[197px] flex flex-row items-start justify-start py-0 px-1 box-border">
              <Button
                className="h-[45px] flex-1 z-[1]"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "14",
                  background: "#00dede",
                  borderRadius: "28px",
                  "&:hover": { background: "#00dede" },
                  width: 189,
                  height: 45,
                }}
              >
                Request Demo Now
              </Button>
            </Box>
          </Box>
        </Box>
        <Box className="flex-1 overflow-hidden flex flex-row items-start justify-start pt-[15.5px] px-[38px] pb-[27.4px] box-border min-w-[532px] max-w-full z-[1] mq750:pt-5 mq750:pb-5 mq750:box-border mq750:min-w-full">
          <img
            className="w-[419.3px] relative max-h-full hidden max-w-full"
            alt=""
            src="/background-simple.svg"
          />
          <Box className="h-[493.1px] flex-1 relative max-w-full">
            <img
              className="absolute top-[0px] left-[0px] w-[735.7px] h-[472.8px]"
              alt=""
              src="/background-complete.svg"
            />
            <img
              className="absolute top-[472.2px] left-[1.1px] w-[738.2px] h-[0.6px] z-[1]"
              alt=""
              src="/floor.svg"
            />
            <img
              className="absolute top-[271.9px] left-[484.5px] w-[117.2px] h-[200.6px] z-[2]"
              alt=""
              src="/plant.svg"
            />
            <img
              className="absolute top-[49.4px] left-[217.4px] w-[300.2px] h-[423.1px] z-[3]"
              alt=""
              src="/device.svg"
            />
            <img
              className="absolute top-[55.3px] left-[534px] w-[60.1px] h-[59.1px] z-[1]"
              alt=""
              src="/speech-bubble-2.svg"
            />
            <Box className="absolute top-[81.7px] left-[132.9px] w-[64.1px] h-[60.1px] z-[1]">
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group-11.svg"
              />
              <img
                className="absolute top-[27.2px] left-[19.7px] w-[5.8px] h-[5.7px] z-[1]"
                alt=""
                src="/group-12.svg"
              />
              <img
                className="absolute top-[27.2px] left-[31.3px] w-[5.8px] h-[5.7px] z-[1]"
                alt=""
                src="/group-13.svg"
              />
              <img
                className="absolute top-[27.2px] left-[43.2px] w-[5.8px] h-[5.7px] z-[1]"
                alt=""
                src="/group-14.svg"
              />
            </Box>
            <img
              className="absolute top-[64.2px] left-[583.9px] w-[120.2px] h-[424.2px] z-[3]"
              loading="lazy"
              alt=""
              src="/character-2.svg"
            />
            <img
              className="absolute top-[81.7px] left-[20.8px] w-[169.3px] h-[411.4px] z-[2]"
              alt=""
              src="/character-1.svg"
            />
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default FrameComponent;
