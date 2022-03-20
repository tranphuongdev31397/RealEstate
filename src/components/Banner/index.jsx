import { Box, Button, Container } from "@mui/material";
import React from 'react'
function Banner({banner, isHome}) {
  console.log(banner)
  console.log(isHome)
  return (
    <Container
      maxWidth="100%"
      sx={{
        background: ` linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("${banner.bannerUrl}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "0!important",
        height: `${isHome? '690px': '300px'}`
      }}
    >
      <Container fixed sx={{height: "100%"}}>
        <Box sx={{ display: "flex", flexDirection: "row", alignItems:"center", justifyContent:"start", padding: 0, m: 0, height: "100%", color: 'white' }}>
          <Box sx={{width: "50%", textAlign: 'left', height: "100%", alignItems:"center", display: "flex"}}>
            <Box>
            <p>{banner?.infor}</p>
            <h1>{banner.title}</h1>
            <h3>{banner.descreption}</h3>
            <p>{banner?.price}</p>
            {isHome && (<Button>View property</Button>)}
            </Box>
        </Box>
        </Box>
      </Container>
    </Container>
  );
}
export default Banner;
