import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Property from "components/Property";
function PropertyBox({ subTitle1, subTitle2, properties }) {
  return (
    <Container maxWidth="xl" sx={{ marginY: "40px" }}>
      <Box sx={{ bgcolor: "#fff", width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          m="1"
          p="1"
        >
          <Box sx={{ width: "100%", height: "auto", textAlign: "center" }}>
            <Typography variant="h4" gutterBottom fontWeight={"500"}>
              {subTitle1}
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              mx={"450px"}
              fontWeight={"300"}
            >
              {subTitle2 || ""}
            </Typography>
          </Box>
          <Box sx={{ width: "100%", height: "auto", textAlign: "center" }}>
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {properties.map((property) => {
                return (
                  <SwiperSlide>
                    <Property property={property} key={property.id}/>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default PropertyBox;
