import { Box, Typography } from "@mui/material";
import React from "react";
import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
function Property({ property }) {
  const { price, title, title_l1, rooms, baths, coverPhoto } = property;
  return (
    <Box sx={{ width: "100%", height: "auto", p: 2 }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ width: "100%", height: "220px", overflow: "hidden" }}>
          <img
            src={coverPhoto.url}
            alt={coverPhoto.title}
            style={{
              maxWidth: "100%",
              height: "auto",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "auto",
            p: 2,
            border: "1px solid #beccd6",
            textAlign: "left",
          }}
        >
          <Typography variant="h6" gutterBottom color="text.secondary">
            $ {price}
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </Typography>
          <Typography variant="caption" gutterBottom>
            {title_l1}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "auto",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            border: "1px solid #beccd6",
            borderTop: "none",
            p: 2,
          }}
        >
          <Box sx={{ width: "30%", height: "auto" }}>
            <HotelIcon />
            <Typography variant="caption" component={"span"}>
              {rooms} bedroom
            </Typography>
          </Box>
          <Box sx={{ width: "30%", height: "auto" }}>
            <BathtubIcon />
            <Typography variant="caption" component={"span"}>
              {baths} bathroom
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default Property;
