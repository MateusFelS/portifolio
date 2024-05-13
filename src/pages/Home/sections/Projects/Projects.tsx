import { Container, Grid, Typography, styled, Link } from "@mui/material";
import { Book, Diamond, Map, Restaurant, Code, Checkroom } from "@mui/icons-material";

const Projects = () => {
  const StyledProjects = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    paddingTop: 100,
    paddingBottom: 50,
  }));

  const ProjectItem = styled(Grid)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
    border: "1px solid white",
    borderRadius: theme.spacing(1),
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  }));

  const createIcon = (IconComponent:React.ElementType, color = "#ffffff", fontSize = "50px") => {
    return <IconComponent style={{ color, fontSize }} />;
  };

  const projects = [
  {
    id: 1,
    title: "StyleSphere",
    icon: createIcon(Checkroom),
    link: "https://github.com/MateusFelS/style_sphere",
  },
  {
    id: 2,
    title: "VeggieDelight",
    icon: createIcon(Restaurant),
    link: "https://github.com/MateusFelS/receitas",
  },
  {
    id: 3,
    title: "Bijoux",
    icon: createIcon(Diamond),
    link: "https://github.com/MateusFelS/bijoux",
  },
  {
    id: 4,
    title: "MapsAndRouts",
    icon: createIcon(Map),
    link: "https://github.com/MateusFelS/maps_and_routs",
  },
  {
    id: 5,
    title: "Compilador em C#",
    icon: createIcon(Code),
    link: "https://github.com/MateusFelS/compilador",
  },
  {
    id: 6,
    title: "Artigo Publicado",
    icon: createIcon(Book),
    link: "https://atenaeditora.com.br/index.php/catalogo/post/metodo-resolucao-de-problemas-aplicado-ao-ensino-de-aprendizado-de-maquina",
  },
];

  return (
    <>
      <StyledProjects>
        <Container maxWidth="lg">
          <Typography color="primary.contrastText" variant="h2" textAlign="center" marginBottom={4}>
            My Projects
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {projects.map((project) => (
              <Grid item xs={12} md={4} key={project.id}>
                <Link href={project.link} target="_blank" rel="noopener noreferrer" underline="none">
                  <ProjectItem>
                    <div style={{ marginBottom: 10 }}>
                      {project.icon}
                    </div>
                    <Typography color="primary.contrastText" variant="h5" textAlign="center" marginTop={1}>
                      {project.title}
                    </Typography>
                  </ProjectItem>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </StyledProjects>
    </>
  );
};

export default Projects;
