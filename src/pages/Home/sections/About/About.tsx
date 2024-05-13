import { Container, Grid, Link, Typography, styled } from "@mui/material";

const About = () => {
  const StyledAbout = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.contrastText,
    display: "flex",
    alignItems: "center",
    paddingTop: 100,
    paddingBottom: 50,
  }));

  return (
    <>
      <StyledAbout>
        <Container maxWidth="lg">
          <Typography color="primary" variant="h2" textAlign="center" marginBottom={4}>
            About Me
          </Typography>
          <Grid container spacing={2}>
              <Grid item xs={12} md={12} >
                <Typography color="primary" variant="h4" textAlign="justify">
                  I have been studying software development since 2019 in college and mobile applications on my own. I have already developed some mobile applications, and my specialties are Flutter and Firebase. And I'm currently studying React and React Native. I am willing to learn and work in any area, so if you are interested, just contact me!
                </Typography>
                {/* <Link href={"https://github.com/MateusFelS"} target="_blank" rel="noopener noreferrer" underline="none">
                  <Typography color="primary" variant="h4"  marginTop={8}>
                   • GitHub: MateusFels
                  </Typography>
                </Link>
                <Link href={"https://wa.me/5514997692248?text=Ol%C3%A1%2C+tudo+bem%3F"} target="_blank" rel="noopener noreferrer" underline="none">
                  <Typography color="primary" variant="h4" marginTop={4}>
                   • Cell: (14)997692248
                  </Typography>
                </Link>

                <Link href={"https://www.linkedin.com/in/mateus-santos-7350381a6/"} target="_blank" rel="noopener noreferrer" underline="none">
                  <Typography color="primary" variant="h4" marginTop={4}>
                   • LinkedIn: Mateus Santos
                  </Typography>
                </Link>
                
                <Typography color="primary" variant="h4" marginTop={4}>
                  • email: mateus.fes14@gmail.com
                </Typography> */}
                
            </Grid>
            
          </Grid>
        </Container>
      </StyledAbout>
    </>
  );
};

export default About;
