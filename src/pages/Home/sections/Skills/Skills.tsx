import { Container, Grid, Typography, styled } from "@mui/material";
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
  flexDirection: "row",
  alignItems: "center",
  padding: theme.spacing(2),
  border: "1px solid black",
  borderRadius: theme.spacing(1),
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
    "& h5": {
      color: theme.palette.primary.contrastText,
    },
  },
}));

const ImageContainer = styled("div")(({ theme }) => ({
  marginRight: theme.spacing(1), 
}));

const Skills = () => {
  const StyledSkills = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.contrastText,
    display: "flex",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 100,
  }));

  const skills = [
    {
      name: "JavaScript",
      icon: JS, 
    },
    {
      name: "TypeScript",
      icon: TS, 
    },
    {
      name: "HTML",
      icon: HTML, 
    },
    {
      name: "CSS",
      icon: CSS, 
    },
    {
      name: "Node.js",
      icon: NODE, 
    },
    {
      name: "WordPress",
      icon: WP, 
    },
    {
      name: "C#",
      icon: CSHARP, 
    },
    {
      name: "MySQL",
      icon: MYSQL, 
    },
    {
      name: "PHP",
      icon: PHP, 
    },
    {
      name: "Python",
      icon: PYTHON, 
    },
    {
      name: "React",
      icon: REACT, 
    },
    {
      name: "ReactNative",
      icon: RN, 
    },
    {
      name: "Flutter",
      icon: FLUTTER, 
    },
    {
      name: "Firebase",
      icon: FIREBASE, 
    },
    {
      name: "Nest.js",
      icon: NEST, 
    },
    {
      name: "Prisma",
      icon: PRISMA, 
    },
    {
      name: "Git",
      icon: GIT, 
    },
    {
      name: "Inglês",
      icon: INGLES, 
    },
  ];

  return (
    <StyledSkills>
      <Container maxWidth="lg">
        <Typography color="primary" variant="h2" textAlign="center" marginBottom={4}>
          Skills
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {skills.map((skill, index) => (
            <Grid item xs={12} md={2} key={index}>
              <SkillItem>
                <ImageContainer>
                  <img src={skill.icon} alt={skill.name} style={{ width: 30, height: 30 }} />
                </ImageContainer>
                <Typography color="primary" variant="h5" textAlign="center">
                  {skill.name}
                </Typography>
              </SkillItem>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledSkills>
  );
};

export default Skills;
