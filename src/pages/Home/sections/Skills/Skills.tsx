import { Container, Grid, Typography, styled } from "@mui/material";

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
    "& h5": { 
      color: theme.palette.primary.contrastText, 
    },
  },
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
    "JavaScript",
    "HTML",
    "CSS",
    "Node.js",
    "WordPress",
    "C#",
    "MySQL",
    "PHP",
    "Python",
    "React",
    "ReactNative",
    "Flutter",
    "Firebase",
    "Nest.js",
    "Prisma",
    "Git",
    "Inglês"
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
                <Typography color="primary" variant="h5" textAlign="center">
                  {skill}
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
