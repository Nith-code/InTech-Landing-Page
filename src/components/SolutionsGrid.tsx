import { FunctionComponent } from "react";
import { Box } from "@mui/material";

export type SolutionsGridType = {
  className?: string;
};

const SolutionsGrid: FunctionComponent<SolutionsGridType> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-[1423px] flex flex-row items-start justify-center pt-0 px-5 pb-[35px] box-border max-w-full text-center text-base text-black font-inter ${className}`}
    >
      <Box className="w-[1023px] flex flex-row items-start justify-start flex-wrap content-start gap-[31px] max-w-full mq750:gap-[15px]">
        <Box className="w-[316px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
          <Box className="self-stretch shadow-[0px_4px_25px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-gainsboro flex flex-col items-start justify-start pt-[43px] pb-[39px] pl-[38px] pr-[11px] gap-3 mq450:pt-7 mq450:pb-[25px] mq450:box-border">
            <Box className="w-[241px] flex flex-row items-start justify-start pt-[223px] px-0 pb-0 box-border relative">
              <img
                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden"
                loading="lazy"
                alt=""
                src="/65665968-9571057-1.svg"
              />
              <Box className="flex-1 relative font-medium z-[1]">
                Mobile Attendance System
              </Box>
            </Box>
            <Box className="self-stretch flex flex-row items-start justify-start py-0 pl-1.5 pr-0 text-left text-3xs">
              <Box className="flex-1 relative font-medium">
                An intuitive mobile app that makes clocking in and out seamless
                for employees.
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-[13px] box-border min-w-[214px] max-w-full">
          <Box className="self-stretch shadow-[0px_4px_25px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-gainsboro flex flex-col items-start justify-start pt-[36.6px] px-[27px] pb-10 gap-[11px] mq450:pt-6 mq450:pb-[26px] mq450:box-border">
            <Box className="self-stretch flex flex-row items-start justify-start py-0 pl-[50px] pr-[51px] mq450:pl-5 mq450:pr-5 mq450:box-border">
              <Box className="h-[199.4px] flex-1 flex flex-row items-start justify-start relative">
                <Box className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                  <img
                    className="absolute top-[80px] left-[59.3px] w-[81.2px] h-[119.4px]"
                    alt=""
                    src="/icon-component.svg"
                  />
                  <img
                    className="absolute top-[92px] left-[59.3px] w-[58.7px] h-[70.8px] z-[1]"
                    alt=""
                    src="/group.svg"
                  />
                  <img
                    className="absolute top-[70.2px] left-[25px] w-[31.6px] h-[25.9px]"
                    alt=""
                    src="/group-1.svg"
                  />
                  <img
                    className="absolute top-[12.9px] left-[43.2px] w-[74.6px] h-[147.8px] z-[2]"
                    alt=""
                    src="/group-2.svg"
                  />
                  <img
                    className="absolute top-[49.6px] left-[49.7px] w-[61.6px] h-[61.6px] z-[3]"
                    alt=""
                    src="/group-3.svg"
                  />
                  <img
                    className="absolute top-[130.7px] left-[28px] w-[24.1px] h-[20.4px] z-[3]"
                    alt=""
                    src="/group-4.svg"
                  />
                  <img
                    className="absolute top-[111.6px] left-[26.8px] w-[25.8px] h-[21.7px] z-[4]"
                    alt=""
                    src="/group-5.svg"
                  />
                  <img
                    className="absolute top-[92.4px] left-[26.9px] w-[27.2px] h-[22.8px] z-[5]"
                    alt=""
                    src="/group-6.svg"
                  />
                  <img
                    className="absolute top-[81.3px] left-[130.7px] w-[5.4px] h-[15.3px] z-[1]"
                    alt=""
                    src="/vector-1.svg"
                  />
                  <img
                    className="absolute top-[151.6px] left-[68.4px] w-[24.1px] h-px z-[3]"
                    alt=""
                    src="/vector-2.svg"
                  />
                  <img
                    className="absolute top-[124.9px] left-[59.4px] w-[42.2px] h-[7.9px] z-[3]"
                    alt=""
                    src="/vector-3.svg"
                  />
                  <img
                    className="absolute top-[87.5px] left-[76.2px] w-[8.5px] h-[1.4px] z-[4]"
                    alt=""
                    src="/vector-4.svg"
                  />
                  <img
                    className="absolute top-[84px] left-[78.1px] w-[4.8px] h-[1.5px] z-[4]"
                    alt=""
                    src="/vector-5.svg"
                  />
                  <img
                    className="absolute top-[76.6px] left-[73.2px] w-[5.2px] h-[5px] z-[4]"
                    alt=""
                    src="/group-7.svg"
                  />
                  <img
                    className="absolute top-[76.6px] left-[82.6px] w-[5.2px] h-[5px] z-[4]"
                    alt=""
                    src="/group-8.svg"
                  />
                  <img
                    className="absolute top-[67.1px] left-[80.6px] w-1.5 h-[7.6px] z-[4]"
                    alt=""
                    src="/vector-6.svg"
                  />
                  <img
                    className="absolute top-[57.6px] left-[57.6px] w-[45.7px] h-[45.7px] z-[5]"
                    alt=""
                    src="/group-9.svg"
                  />
                  <img
                    className="absolute top-[47.4px] left-[47.5px] w-[66.1px] h-[66.1px] z-[6]"
                    alt=""
                    src="/vector-7.svg"
                  />
                  <img
                    className="absolute top-[36.5px] left-[36.6px] w-[87.9px] h-[87.9px] z-[7]"
                    alt=""
                    src="/vector-8.svg"
                  />
                  <img
                    className="absolute top-[24.7px] left-[24.8px] w-[111.5px] h-[111.5px] z-[8]"
                    alt=""
                    src="/vector-9.svg"
                  />
                  <img
                    className="absolute w-[calc(100%_-_24.4px)] top-[12.1px] right-[12.2px] left-[12.2px] max-w-full overflow-hidden h-[136.6px] z-[9]"
                    alt=""
                    src="/vector-10.svg"
                  />
                  <img
                    className="absolute top-[0px] left-[0px] w-[161px] h-[161px] z-[10]"
                    alt=""
                    src="/vector-11.svg"
                  />
                </Box>
              </Box>
            </Box>
            <Box className="self-stretch flex flex-row items-start justify-start py-0 pl-[45px] pr-[46px] mq450:pl-5 mq450:pr-5 mq450:box-border">
              <Box className="flex-1 relative font-medium">
                Face Recognition Attendance System
              </Box>
            </Box>
            <Box className="relative text-3xs font-medium">
              Advanced face recognition technology for accurate attendance
              tracking.
            </Box>
          </Box>
        </Box>
        <Box className="w-[316px] shadow-[0px_4px_25px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-gainsboro flex flex-col items-start justify-start pt-[34px] px-[15px] pb-[48.5px] box-border gap-[17px] text-left mq450:pt-[22px] mq450:pb-8 mq450:box-border">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/group-10@2x.png"
          />
          <Box className="flex flex-row items-start justify-start py-0 px-[55px] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <Box className="relative font-medium">Smart Laundry System</Box>
          </Box>
          <Box className="self-stretch flex flex-row items-start justify-start py-0 px-3 text-3xs">
            <Box className="flex-1 relative font-medium">
              Receive weekly QR codes to activate laundry machines with ease.
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default SolutionsGrid;
