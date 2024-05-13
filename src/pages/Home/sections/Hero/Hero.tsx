import {Box, Container, Grid, Typography, styled} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import Avatar from "../../../../assets/images/avatar.jpg";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import CurriculumPDF from "../../../../assets/cv/Currículo.pdf";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {
    const StyledHero = styled("div")(({theme})=>({
      backgroundColor: theme.palette.primary.main,
      height: "100vh",
      display: "flex",
      alignItems: "center",
    }));

    const StyledImage = styled("img")(({theme})=>({
      width: "80%",
      borderRadius: "50%",
      border: `3px solid ${theme.palette.primary.contrastText}`
    }));

    const handleDownloadCV = () => {
      const link = document.createElement('a');
      link.href = CurriculumPDF;
      link.setAttribute('download', 'Curriculo_Mateus.pdf');
      document.body.appendChild(link);
      link.click();
    };

    const handleContactMe = () => {
      const link = "https://wa.me/5514997692248?text=Ol%C3%A1%2C+tudo+bem%3F";
  
      window.open(link, "_blank");
    };

    return (
      <>
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
                <Typography color="primary.contrastText" variant="h2" textAlign="center">Mateus Felipe dos Santos</Typography>
                <Typography color="primary.contrastText" variant="h3" textAlign="center">I'm a Software Engineer</Typography>
                
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
      </>
    )
  }
  
  export default Hero
  