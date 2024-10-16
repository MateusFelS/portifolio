import { Box, Container, Grid, Typography, styled } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Typewriter from "typewriter-effect";

import Avatar from "../../../../assets/images/avatar.jpeg";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import CurriculumPDF from "../../../../assets/cv/Curriculo-Mateus.pdf";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
  }));

  const StyledImage = styled("img")(({ theme }) => ({
    width: "80%",
    height: "auto",
    borderRadius: "50%",
    border: `3px solid ${theme.palette.primary.contrastText}`,
    objectFit: "cover",
    aspectRatio: "1/1",
    "@media (max-width:700px)": {
      width: "70%",
    },
  }));

  const StyledTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    textAlign: "center",
    "@media (max-width:700px)": {
      fontSize: "1.8rem",
    },
  }));

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = CurriculumPDF;
    link.setAttribute("download", "Curriculo_Mateus.pdf");
    document.body.appendChild(link);
    link.click();
  };

  const handleContactMe = () => {
    const link = "https://wa.me/5514997692248?text=Ol%C3%A1%2C+tudo+bem%3F";
    window.open(link, "_blank");
  };

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Box position="relative">
              <Box position="absolute" width={"150%"} top={-100} right={0}>
                <AnimatedBackground />
              </Box>
              <Box position="relative" textAlign="center">
                <StyledImage src={Avatar} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <StyledTypography variant="h2">
              Mateus Felipe dos Santos
            </StyledTypography>
            <StyledTypography variant="h3">
              <Typewriter
                options={{
                  strings: ["I'm a Software Engineer"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </StyledTypography>
            <Grid container display={"flex"} justifyContent={"center"} spacing={3} marginTop={3}>
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <StyledButton onClick={handleDownloadCV}>
                  <DownloadIcon />
                  <Typography>Download CV</Typography>
                </StyledButton>
              </Grid>
              <Grid item xs={12} md={4} display={"flex"} justifyContent={"center"}>
                <StyledButton onClick={handleContactMe}>
                  <MailOutlineIcon />
                  <Typography>Contact Me</Typography>
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;
