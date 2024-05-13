import { Container, Grid, Typography, styled } from "@mui/material";

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
            </Grid>
          </Grid>
        </Container>
      </StyledAbout>
    </>
  );
};

export default About;
