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
            Sobre Mim
          </Typography>
          <Grid container spacing={2}>
              <Grid item xs={12} md={12} >
                <Typography color="primary" variant="h4" textAlign="justify">
                Recém-formado em Ciência da Computação, com experiência em projetos freelance
                e voluntários focados em testes manuais e automação de testes. Possuo domínio 
                em ferramentas como Cypress, Cucumber, Selenium, Appium e Postman. Tenho conhecimento em práticas de QA, 
                incluindo teste de sistemas, análise estática, escrita do plano de teste e casos de teste. 
                Busco minha primeira oportunidade formal como Analista de QA, com interesse em vagas remotas.
                </Typography>
            </Grid>
          </Grid>
        </Container>
      </StyledAbout>
    </>
  );
};

export default About;
