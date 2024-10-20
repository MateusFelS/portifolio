import { Container, Grid, Typography, styled, useMediaQuery, useTheme } from "@mui/material";
import JS from "../../../../assets/images/javascript.png";
import TS from "../../../../assets/images/typescript.png";
import FLUTTER from "../../../../assets/images/flutter.png";
import HTML from "../../../../assets/images/html.png";
import CSS from "../../../../assets/images/css.png";
import NODE from "../../../../assets/images/node.png";
import WP from "../../../../assets/images/wp.png";
import CSHARP from "../../../../assets/images/csharp.png";
import MYSQL from "../../../../assets/images/mysql.png";
import PHP from "../../../../assets/images/php_icon.png";
import REACT from "../../../../assets/images/react.png";
import RN from "../../../../assets/images/rn.png";
import PYTHON from "../../../../assets/images/python.webp";
import NEST from "../../../../assets/images/nest.png";
import PRISMA from "../../../../assets/images/prisma.png";
import GIT from "../../../../assets/images/git.png";
import FIREBASE from "../../../../assets/images/firebase.png";
import INGLES from "../../../../assets/images/ingles.png";
import CUCUMBER from "../../../../assets/images/cucumber.png";
import POSTMAN from "../../../../assets/images/postman.png";
import RUBY from "../../../../assets/images/ruby.png";
import CYPRESS from "../../../../assets/images/cypress.png";

const SkillItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(2),
  border: "1px solid black",
  borderRadius: theme.spacing(1),
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
    "& h6": {
      color: theme.palette.primary.contrastText,
    },
  },
}));

const ImageContainer = styled("div")(({ theme }) => ({
  marginBottom: theme.spacing(1),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const Skills = () => {
  const StyledSkills = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.contrastText,
    display: "flex",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 100,
  }));

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const skillCategories = {
    "Linguagens de Programação": [
      { name: "JavaScript", icon: JS },
      { name: "TypeScript", icon: TS },
      { name: "C#", icon: CSHARP },
      { name: "PHP", icon: PHP },
      { name: "Python", icon: PYTHON },
      { name: "Ruby", icon: RUBY },
    ],
    "Frameworks e Bibliotecas": [
      { name: "Node.js", icon: NODE },
      { name: "React", icon: REACT },
      { name: "React Native", icon: RN },
      { name: "Flutter", icon: FLUTTER },
      { name: "Nest.js", icon: NEST },
      { name: "Cucumber", icon: CUCUMBER },
      { name: "Cypress", icon: CYPRESS },
    ],
    "Bancos de Dados": [
      { name: "MySQL", icon: MYSQL },
      { name: "Prisma", icon: PRISMA },
      { name: "Firebase", icon: FIREBASE },
    ],
    "Outras Tecnologias": [
      { name: "WordPress", icon: WP },
      { name: "Git", icon: GIT },
      { name: "Postman", icon: POSTMAN },
      { name: "HTML", icon: HTML },
      { name: "CSS", icon: CSS },      
      { name: "Inglês", icon: INGLES },
    ],
  };

  return (
    <StyledSkills>
      <Container maxWidth="lg">
        <Typography color="primary" variant="h2" textAlign="center" marginBottom={4}>
          Skills
        </Typography>
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category}>
            <Typography variant="h4" color="primary" textAlign="start" marginTop={4} marginBottom={2}>
              {category}
            </Typography>
            <Grid container spacing={2} justifyContent="start">
              {skills.map((skill, index) => (
                <Grid item xs={4} sm={2} md={2} key={index}>
                  <SkillItem>
                    <ImageContainer>
                      <img src={skill.icon} alt={skill.name} style={{ width: 32, height: 32 }} />
                    </ImageContainer>
                    {!isMobile && (
                      <Typography color="primary" variant="h6" textAlign="center">
                        {skill.name}
                      </Typography>
                    )}
                  </SkillItem>
                </Grid>
              ))}
            </Grid>
          </div>
        ))}
      </Container>
    </StyledSkills>
  );
};

export default Skills;
