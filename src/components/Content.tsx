import { FunctionComponent } from "react";
import { Button, Box, Typography } from "@mui/material";

export type ContentType = {
  className?: string;
};

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  return (
    <section
      className={`w-[1424px] flex flex-row items-start justify-center pt-0 px-5 pb-[42px] box-border max-w-full text-left text-xs text-black font-inter mq750:pb-[27px] mq750:box-border ${className}`}
    >
      <Box className="h-[587px] w-[1106px] relative max-w-full">
        <a className="[text-decoration:none] absolute top-[31px] left-[571px] font-semibold text-[inherit] inline-block w-[54px] h-[15px] min-w-[54px] z-[1]">
          Products
        </a>
        <a className="[text-decoration:none] absolute top-[31px] left-[737px] font-semibold text-[inherit] inline-block w-12 h-[15px] min-w-[48px] z-[1]">
          Contact
        </a>
        <Button
          className="absolute top-[20.7px] left-[962px] z-[1]"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "10",
            background: "#f5b650",
            borderRadius: "28px",
            "&:hover": { background: "#f5b650" },
            width: 110,
            height: 35.6,
          }}
        >
          {" "}
          Request Demo
        </Button>
        <Box className="absolute top-[0px] left-[0px] w-[481px] flex flex-col items-start justify-start gap-[67px] max-w-full text-29xl">
          <header className="w-[459px] flex flex-row items-start justify-start py-0 px-px box-border max-w-full text-left text-xs text-black font-inter">
            <Box className="flex-1 flex flex-row items-start justify-between max-w-full gap-5">
              <Box className="w-[142px] flex flex-col items-start justify-start">
                <img
                  className="w-[77px] h-[77px] relative object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/intech-logoclearbqqbyhg-1@2x.png"
                />
              </Box>
              <Box className="flex flex-col items-start justify-start pt-[31px] px-0 pb-0">
                <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[36px] z-[1]">{`Home `}</a>
              </Box>
              <Box className="flex flex-col items-start justify-start pt-[31px] px-0 pb-0">
                <a className="[text-decoration:none] relative font-semibold text-[inherit] z-[1]">
                  About Us
                </a>
              </Box>
            </Box>
          </header>
          <Box className="self-stretch flex flex-col items-start justify-start gap-[26px] max-w-full">
            <Box className="self-stretch flex flex-col items-start justify-start gap-[3px] max-w-full">
              <Box className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
                <Typography
                  className="m-0 flex-1 relative inline-block max-w-full z-[1] mq750:text-19xl mq450:text-10xl"
                  variant="inherit"
                  component="h1"
                  sx={{ fontWeight: "700" }}
                >
                  Revolutionizing Workplace Efficiency with Smart Technology!
                </Typography>
              </Box>
              <Box className="relative text-3xs font-medium inline-block max-w-full z-[1]">
                Explore our cutting-edge solutions designed to simplify and
                secure your business operations.
              </Box>
            </Box>
            <Box className="w-28 flex flex-row items-start justify-start py-0 px-px box-border">
              <Button
                className="h-[35.6px] flex-1 z-[1]"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "10",
                  background: "#f5b650",
                  borderRadius: "28px",
                  "&:hover": { background: "#f5b650" },
                  width: 110,
                  height: 35.6,
                }}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        </Box>
        <Box className="absolute top-[125px] left-[536px] w-[570px] h-[462px]">
          <Box className="absolute top-[0px] left-[41px] shadow-[50px_-50px_1px_#fddfae] bg-goldenrod w-[529px] h-[368px] z-[1]" />
          <img
            className="absolute top-[54px] left-[0px] w-[524px] h-[408px] object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/intech-picture-1@2x.png"
          />
        </Box>
      </Box>
    </section>
  );
};

export default Content;
