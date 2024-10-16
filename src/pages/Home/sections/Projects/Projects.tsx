import React, { useState } from 'react';
import { Container, Grid, Typography, styled, Link, useTheme, useMediaQuery } from "@mui/material";
import { Book, ContentCut, Map, Restaurant, Code, Checkroom, Pets } from "@mui/icons-material";

const Projects = () => {
  const StyledProjects = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    paddingTop: 100,
    paddingBottom: 50,
  }));

  const ProjectItem = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
    margin: 5,
    border: "1px solid white",
    borderRadius: theme.spacing(1),
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  }));

  const createIcon = (IconComponent: React.ElementType, color = "#ffffff", fontSize = "50px") => {
    return <IconComponent style={{ color, fontSize }} />;
  };

  const projects = [
    {
      id: 1,
      title: "StyleSphere",
      icon: createIcon(Checkroom),
      langs: "WordPress",
      link: "https://github.com/MateusFelS/style_sphere",
    },
    {
      id: 2,
      title: "VeggieDelight",
      icon: createIcon(Restaurant),
      langs: "Flutter + Firebase",
      link: "https://github.com/MateusFelS/receitas",
    },
    {
      id: 3,
      title: "ProdManage",
      icon: createIcon(ContentCut),
      langs: "Flutter + Nest.js + Ruby + Cucumber",
      link: "https://github.com/MateusFelS/prod_manage",
    },
    {
      id: 4,
      title: "MapsAndRouts",
      icon: createIcon(Map),
      langs: "React Native",
      link: "https://github.com/MateusFelS/maps_and_routs",
    },
    {
      id: 5,
      title: "Compilador",
      icon: createIcon(Code),
      langs: "C#",
      link: "https://github.com/MateusFelS/compilador",
    },
    {
      id: 6,
      title: "Artigo Publicado",
      icon: createIcon(Book),
      langs: "Atena Editora",
      link: "https://atenaeditora.com.br/index.php/catalogo/post/metodo-resolucao-de-problemas-aplicado-ao-ensino-de-aprendizado-de-maquina",
    },
    {
      id: 7,
      title: "Petshop",
      icon: createIcon(Pets),
      langs: "React + Tailwind CSS",
      link: "https://github.com/MateusFelS/petshop",
    },

    {
      id: 8,
      title: "Analista de QA",
      icon: createIcon(Pets),
      langs: "Plano de Teste + Teste de Sistema + Análise Estática",
      link: "https://github.com/VirsoRaivoky/Puzzle",
    },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handleIndicatorClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <StyledProjects>
      <Container maxWidth="lg">
        <Typography color="primary.contrastText" variant="h2" textAlign="center" marginBottom={4}>
          My Projects
        </Typography>
        {isMobile ? (
          <div style={{ position: 'relative' }}>
            <div style={{ overflow: 'hidden' }}>
              <div style={{ display: 'flex', transform: `translateX(-${currentSlide * 100}%)`, transition: 'transform 0.5s ease-in-out' }}>
                {projects.map((project) => (
                  <div key={project.id} style={{ minWidth: '100%' }}>
                    <Link href={project.link} target="_blank" rel="noopener noreferrer" underline="none">
                      <ProjectItem>
                        <div style={{ marginBottom: 10 }}>
                          {project.icon}
                        </div>
                        <Typography color="primary.contrastText" variant="h5" textAlign="center" marginTop={1}>
                          {project.title}
                        </Typography>
                        <Typography color="primary.contrastText" variant="h6" textAlign="center" marginTop={1}>
                          {project.langs}
                        </Typography>
                      </ProjectItem>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={handlePrev} style={navButtonStyle}>‹</button>
            <button onClick={handleNext} style={navButtonStyleNext}>›</button>
            <div style={indicatorsStyle}>
              {projects.map((_, index) => (
                <span key={index} onClick={() => handleIndicatorClick(index)} style={{ ...indicatorStyle, ...(currentSlide === index ? activeIndicatorStyle : {}) }}></span>
              ))}
            </div>
          </div>
        ) : (
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
                    <Typography color="primary.contrastText" variant="h6" textAlign="center" marginTop={1}>
                      {project.langs}
                    </Typography>
                  </ProjectItem>
                </Link>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </StyledProjects>
  );
};

const navButtonStyle: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '10px',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  border: 'none',
  borderRadius: '50%',
  width: '30px',
  height: '30px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const navButtonStyleNext: React.CSSProperties = {
  ...navButtonStyle,
  left: 'unset',
  right: '10px',
};

const indicatorsStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '10px',
};

const indicatorStyle: React.CSSProperties = {
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  margin: '0 5px',
  cursor: 'pointer',
};

const activeIndicatorStyle: React.CSSProperties = {
  backgroundColor: '#ffffff',
};

export default Projects;
