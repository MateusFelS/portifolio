import { Container, Grid, Typography, styled } from "@mui/material";

const StyledAbout = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  display: "flex",
  alignItems: "center",
  paddingTop: 100,
  paddingBottom: 50,
}));

type InfoTextProps = {
  variant:  "h6" | "body1";
  children: React.ReactNode;
};

const InfoText = ({ variant, children }: InfoTextProps) => (
  <Typography color="primary" variant={variant} textAlign="justify" paragraph>
    {children}
  </Typography>
);

const About = () => {
  return (
    <StyledAbout>
      <Container maxWidth="lg">
        <Typography color="primary" variant="h2" textAlign="center" marginBottom={4}>
          Sobre Mim
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <InfoText variant="h6">🎓 <strong>Formação:</strong> Bacharel em Ciência da Computação.</InfoText>
            <InfoText variant="h6">💻 <strong>Experiência:</strong> Atuo com testes manuais e automação para garantir qualidade, segurança e eficiência em aplicações web e APIs. Tenho experiência prática em projetos voluntários e pessoais, onde implementei testes que reduziram o tempo de execução e aumentaram a cobertura de testes.</InfoText>
            <InfoText variant="h6">🔍 <strong>Impacto nos Projetos:</strong></InfoText>
            <InfoText variant="body1">ㅤㅤㅤㅤ- <strong>Automação de Testes Web:</strong> Reduzi falhas manuais, garantindo validação consistente dos fluxos críticos com Cypress e Playwright.</InfoText>
            <InfoText variant="body1">ㅤㅤㅤㅤ- <strong>Testes de API:</strong> Apliquei Postman e Cypress para validação de endpoints REST, otimizando a detecção de falhas e melhorando a confiabilidade das APIs.</InfoText>
            <InfoText variant="body1">ㅤㅤㅤㅤ- <strong>Gerenciamento de Bugs:</strong> Documentação estruturada e rastreamento de bugs críticos em Jira e Trello, facilitando a correção rápida pelas equipes de desenvolvimento.</InfoText>
            <InfoText variant="body1">ㅤㅤㅤㅤ- <strong>Testes Manuais e Estratégia:</strong> Desenvolvi planos de teste completos, cobrindo E2E, API Testing e testes exploratórios, garantindo cobertura nos testes funcionais.</InfoText>
            <InfoText variant="h6">📌 <strong>Projetos no GitHub:</strong> <a href="https://github.com/MateusFelS" target="_blank" rel="noopener noreferrer">github.com/MateusFelS</a></InfoText>
            <InfoText variant="h6">🎯 <strong>Objetivo:</strong>Busco oportunidades como Analista ou Engenheiro de QA, aplicando testes manuais e automatizados para garantir software de alta qualidade e fortalecer processos de QA nas equipes!</InfoText>
          </Grid>
        </Grid>
      </Container>
    </StyledAbout>
  );
};

export default About;
