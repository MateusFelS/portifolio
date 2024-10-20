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
                  Recently graduated as Software Engineering, I am passionate about
                  mobile development, especially with Flutter and React Native. I'm also
                  improving my skills in Software Quality, focusing on Ruby, Cucumber and
                  Cypress. I look for opportunities to apply my versatility and passion for
                  technology, developing innovative mobile solutions and ensuring the
                  quality of applications through automated testing.
                </Typography>
            </Grid>
          </Grid>
        </Container>
      </StyledAbout>
    </>
  );
};

export default About;
