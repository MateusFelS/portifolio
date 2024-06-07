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

const SkillItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column", // Altera de row para column
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
  marginBottom: theme.spacing(1), // Altera de marginRight para marginBottom
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

  const skills = [
    { name: "JavaScript", icon: JS },
    { name: "TypeScript", icon: TS },
    { name: "HTML", icon: HTML },
    { name: "CSS", icon: CSS },
    { name: "Node.js", icon: NODE },
    { name: "WordPress", icon: WP },
    { name: "C#", icon: CSHARP },
    { name: "MySQL", icon: MYSQL },
    { name: "PHP", icon: PHP },
    { name: "Python", icon: PYTHON },
    { name: "React", icon: REACT },
    { name: "ReactNative", icon: RN },
    { name: "Flutter", icon: FLUTTER },
    { name: "Firebase", icon: FIREBASE },
    { name: "Nest.js", icon: NEST },
    { name: "Prisma", icon: PRISMA },
    { name: "Git", icon: GIT },
    { name: "Inglês", icon: INGLES },
  ];

  return (
    <StyledSkills>
      <Container maxWidth="lg">
        <Typography color="primary" variant="h2" textAlign="center" marginBottom={4}>
          Skills
        </Typography>
        <Grid container spacing={2} justifyContent="center">
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
      </Container>
    </StyledSkills>
  );
};

export default Skills;
