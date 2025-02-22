import { Container, Grid, Typography, styled } from "@mui/material";

const StyledAbout = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: 100,
  paddingBottom: 50,
  [theme.breakpoints.down('sm')]: { 
    paddingTop: 50,
    paddingBottom: 25,
  },
}));

type InfoTextProps = {
  variant: "h6" | "body1";
  children: React.ReactNode;
};

const InfoText = ({ variant, children }: InfoTextProps) => (
  <Typography
    color="primary"
    variant={variant}
    textAlign={{ xs: "center", md: "justify" }} 
    paragraph
    sx={{
      fontSize: {
        xs: variant === "h6" ? "1rem" : "0.875rem",
        md: variant === "h6" ? "1.25rem" : "1rem", 
      },
    }}
  >
    {children}
  </Typography>
);

const About = () => {
  return (
    <StyledAbout>
      <Container maxWidth="lg">
        <Typography
          color="primary"
          variant="h2"
          textAlign="center"
          marginBottom={4}
          sx={{ fontSize: { xs: "2rem", md: "3rem" } }} // Ajuste para mobile
        >
          Sobre Mim
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <InfoText variant="h6">
              🎓 <strong>Formação:</strong> Bacharel em Ciência da Computação.
            </InfoText>
            <InfoText variant="h6">
              💻 <strong>Experiência:</strong> Atuo com testes manuais e automação para garantir qualidade, segurança e eficiência em aplicações web e APIs.
            </InfoText>
            <InfoText variant="h6">🔍 <strong>Impacto nos Projetos:</strong></InfoText>
            <InfoText variant="body1">
             <strong>ㅤㅤ• Automação de Testes Web:</strong> Reduzi falhas manuais, garantindo validação consistente dos fluxos críticos com Cypress e Playwright.
            </InfoText>
            <InfoText variant="body1">
             <strong>ㅤㅤ• Testes de API:</strong> Apliquei Postman e Cypress para validação de endpoints REST, otimizando a detecção de falhas e melhorando a confiabilidade das APIs.
            </InfoText>
            <InfoText variant="body1">
              <strong>ㅤㅤ• Gerenciamento de Bugs:</strong> Documentação estruturada e rastreamento de bugs críticos em Jira e Trello, facilitando a correção rápida pelas equipes de desenvolvimento.
            </InfoText>
            <InfoText variant="body1">
              <strong>ㅤㅤ• Testes Manuais e Estratégia:</strong> Desenvolvi planos de teste completos, cobrindo E2E, API Testing e testes exploratórios.
            </InfoText>
            <InfoText variant="h6">
              📌 <strong>Projetos no GitHub:</strong>{" "}
              <a href="https://github.com/MateusFelS" target="_blank" rel="noopener noreferrer">
                github.com/MateusFelS
              </a>
            </InfoText>
            <InfoText variant="h6">
              🎯 <strong>Objetivo:</strong> Busco oportunidades como Analista ou Engenheiro de QA, aplicando testes manuais e automatizados!
            </InfoText>
          </Grid>
        </Grid>
      </Container>
    </StyledAbout>
  );
};

export default About;