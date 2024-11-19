import React, { useState } from 'react';
import { Container, Typography, styled, Link, useTheme, useMediaQuery } from "@mui/material";
import { Book, ContentCut, Map, Restaurant, Code, Checkroom, Pets, Extension, Coffee, Inventory, ShoppingBag } from "@mui/icons-material";

type Project = {
  id: number;
  title: string;
  icon: JSX.Element;
  langs: string;
  link: string;
};

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

  const automationProjects: Project[] = [
    { id: 1, title: "Automação Web - Coffee Cart", icon: createIcon(Coffee), langs: "Cypress + JS", link: "https://github.com/MateusFelS/coffee-cart-tests" },
    { id: 2, title: "Automação API - Serverest", icon: createIcon(Inventory), langs: "Cypress + JS", link: "https://github.com/MateusFelS/serverest-api-tests" },
    { id: 3, title: "Analista de QA - Voluntário", icon: createIcon(Extension), langs: "Plano de Teste + Teste de Sistema", link: "https://github.com/VirsoRaivoky/Puzzle" },
    { id: 4, title: "Automoção Web - Swag Labs", icon: createIcon(ShoppingBag), langs: "Playwright + TS", link: "https://github.com/MateusFelS/swag-labs-tests" },
  ];

  const programmingProjects: Project[] = [
    { id: 5, title: "StyleSphere", icon: createIcon(Checkroom), langs: "WordPress", link: "https://github.com/MateusFelS/style_sphere" },
    { id: 6, title: "VeggieDelight", icon: createIcon(Restaurant), langs: "Flutter + Firebase", link: "https://github.com/MateusFelS/receitas" },
    { id: 7, title: "ProdManage", icon: createIcon(ContentCut), langs: "Flutter + Nest.js + Ruby + Cucumber", link: "https://github.com/MateusFelS/prod_manage" },
    { id: 8, title: "MapsAndRouts", icon: createIcon(Map), langs: "React Native", link: "https://github.com/MateusFelS/maps_and_routs" },
    { id: 9, title: "Compilador", icon: createIcon(Code), langs: "C#", link: "https://github.com/MateusFelS/compilador" },
    { id: 10, title: "Artigo Publicado", icon: createIcon(Book), langs: "Atena Editora", link: "https://atenaeditora.com.br/index.php/catalogo/post/metodo-resolucao-de-problemas-aplicado-ao-ensino-de-aprendizado-de-maquina" },
    { id: 11, title: "Petshop", icon: createIcon(Pets), langs: "React + Tailwind CSS", link: "https://github.com/MateusFelS/petshop" },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const Carousel = ({ projects, itemsPerSlide }: { projects: Project[]; itemsPerSlide: number }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handlePrev = () => {
      setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };
  
    const handleNext = () => {
      setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    };
  
    const visibleProjects = projects.slice(
      currentIndex,
      currentIndex + itemsPerSlide
    ).concat(
      projects.slice(0, Math.max(0, currentIndex + itemsPerSlide - projects.length))
    );
  
    return (
      <div style={{ position: "relative", overflow: "hidden" }}>
        <div
          style={{
            display: "flex",
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {visibleProjects.map((project) => (
            <Link
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              style={{
                flexBasis: `${100 / itemsPerSlide}%`,
                flexGrow: 0,
                flexShrink: 0,
              }}
            >
              <ProjectItem>
                <div style={{ marginBottom: 10 }}>{project.icon}</div>
                <Typography
                  color="primary.contrastText"
                  variant="h5"
                  textAlign="center"
                  marginTop={1}
                >
                  {project.title}
                </Typography>
                <Typography
                  color="primary.contrastText"
                  variant="h6"
                  textAlign="center"
                  marginTop={1}
                >
                  {project.langs}
                </Typography>
              </ProjectItem>
            </Link>
          ))}
        </div>
        <button onClick={handlePrev} style={navButtonStyle}>
          ‹
        </button>
        <button onClick={handleNext} style={navButtonStyleNext}>
          ›
        </button>
  
        <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
          {projects.map((_, index) => (
            <div
              key={index}
              style={{
                width: 10,
                height: 10,
                margin: "0 5px",
                borderRadius: "50%",
                backgroundColor: currentIndex === index ? "#fff" : "#888",
                transition: "background-color 0.3s",
              }}
            ></div>
          ))}
        </div>
      </div>
    );
  };  
  
  return (
    <StyledProjects>
      <Container maxWidth="lg">
        <Typography color="primary.contrastText" variant="h2" textAlign="center" marginBottom={4}>
          Projetos de Automação e QA
        </Typography>
        <Carousel projects={automationProjects} itemsPerSlide={isMobile ? 1 : 3} />

        <Typography color="primary.contrastText" variant="h2" textAlign="center" marginTop={8} marginBottom={4}>
          Outros Projetos
        </Typography>
        <Carousel projects={programmingProjects} itemsPerSlide={isMobile ? 1 : 3} />
      </Container>
    </StyledProjects>
  );
};

const navButtonStyle: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "10px",
  transform: "translateY(-50%)",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  border: "none",
  borderRadius: "50%",
  width: "30px",
  height: "30px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const navButtonStyleNext: React.CSSProperties = {
  ...navButtonStyle,
  left: "unset",
  right: "10px",
};

export default Projects;
