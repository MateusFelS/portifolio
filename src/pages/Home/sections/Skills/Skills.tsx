import { Container, Grid, Typography, styled } from "@mui/material";

type InfoTextProps = {
  variant: "h6" | "body1";
  children: React.ReactNode;
};

const StyledSkills = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  display: "flex",
  alignItems: "center",
  paddingTop: 100,
  paddingBottom: 50,
  [theme.breakpoints.down('sm')]: { 
    paddingTop: 50,
    paddingBottom: 25,
  },
}));

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

const Skills = () => {
  return (
    <StyledSkills>
      <Container maxWidth="lg">
        <Typography
          color="primary"
          variant="h2"
          textAlign="center"
          marginBottom={4}
          sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
        >
          Skills
        </Typography>
        <Grid container spacing={4} alignItems="stretch">
          {/* Primeira Coluna */}
          <Grid item xs={12} md={6}>
            <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <InfoText variant="h6">👩‍💻 <strong>Habilidades Técnicas:</strong></InfoText>
              <InfoText variant="body1">ㅤㅤ<strong>• Testes Automatizados:</strong> Cypress, Playwright, Selenium</InfoText>
              <InfoText variant="body1">ㅤㅤ<strong>• Testes Manuais:</strong> Testes funcionais, regressão, aceitação e exploratórios</InfoText>
              <InfoText variant="body1">ㅤㅤ<strong>• Testes de API:</strong> Postman, HTTParty (Ruby)</InfoText>
              <InfoText variant="body1">ㅤㅤ<strong>• Testes de Performance:</strong> JMeter</InfoText>
              <InfoText variant="body1">ㅤㅤ<strong>• Testes de Segurança:</strong> OWASP ZAP</InfoText>
              <InfoText variant="body1">ㅤㅤ<strong>• Gestão de Bugs & Tarefas:</strong> Jira, Trello</InfoText>
            </div>
          </Grid>

          {/* Segunda Coluna */}
          <Grid item xs={12} md={6}>
            <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <InfoText variant="body1">ㅤㅤ<strong>• Banco de Dados:</strong> MySQL, Prisma</InfoText>
              <InfoText variant="body1">ㅤㅤ<strong>• Metodologias Ágeis:</strong> Scrum, Kanban</InfoText>
              <InfoText variant="body1">ㅤㅤ<strong>• Linguagens:</strong> JavaScript, TypeScript, PHP, Python, Ruby, Java, Dart, C#</InfoText>
              <InfoText variant="body1">ㅤㅤ<strong>• Frameworks e Bibliotecas:</strong> React, React Native, Flutter, Nest.js, .NET</InfoText>
              <InfoText variant="body1">ㅤㅤ<strong>• Outras Tecnologias:</strong> Git, GitHub, Tailwind CSS, HTML, CSS</InfoText>
            </div>
          </Grid>
        </Grid>
      </Container>
    </StyledSkills>
  );
};

export default Skills;