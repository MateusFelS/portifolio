import React from 'react';
import { Container, Typography, styled, Link, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { 
  FaCoffee, 
  FaWarehouse, 
  FaShoppingBag, 
  FaBook, 
  FaTshirt, 
  FaUtensils, 
  FaCut, 
  FaMapMarkedAlt, 
  FaCode, 
  FaPaw,
  FaLaptopCode,
  FaFileAlt,
  FaTools,
  FaPuzzlePiece
} from 'react-icons/fa';

type Project = {
  id: number;
  title: string;
  icon: JSX.Element;
  langs: string;
  link: string;
  role: string; 
};

const StyledProjects = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  paddingTop: 100,
  paddingBottom: 50,
  minHeight: "100vh",
}));

const StyledList = styled(List)(({ theme }) => ({
  maxHeight: '400px',
  overflowY: 'auto',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '8px', 
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  backgroundColor: '#000000', 
  color: '#ffffff',
  width: '100%', 
  maxWidth: '800px', 
  margin: '0 auto',

  // Estilização da barra de rolagem
  '&::-webkit-scrollbar': {
    width: '10px', // Largura da barra de rolagem
  },
  '&::-webkit-scrollbar-track': {
    background: '#f1f1f1', // Cor do fundo da barra de rolagem
    borderRadius: '10px', // Bordas arredondadas
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#888', // Cor do "thumb" (a parte móvel da barra de rolagem)
    borderRadius: '10px', // Bordas arredondadas
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#555', // Cor do "thumb" ao passar o mouse
  },
}));

const createIcon = (IconComponent: React.ElementType, color = "#ffffff", fontSize = "30px") => {
  return <IconComponent style={{ color, fontSize }} />;
};

const automationProjects: Project[] = [
  { id: 1, title: "Automação Web - Coffee Cart", icon: createIcon(FaCoffee), langs: "Cypress + JS", link: "https://github.com/MateusFelS/coffee-cart-tests", role: "Engenheiro de QA" },
  { id: 2, title: "Automação API - Serverest", icon: createIcon(FaWarehouse), langs: "Cypress + JS", link: "https://github.com/MateusFelS/serverest-api-tests", role: "Engenheiro de QA" },
  { id: 3, title: "Estudo de Documentações QA", icon: createIcon(FaFileAlt), langs: "Plano de Teste + Casos de Teste + Reporte de Bugs", link: "https://github.com/MateusFelS/manual-QA-exemples", role: "Analista de QA" },
  { id: 4, title: "Puzzle Game - Voluntário", icon: createIcon(FaPuzzlePiece), langs: "Plano de Teste + Teste de Sistema", link: "https://github.com/VirsoRaivoky/Puzzle", role: "Analista de QA" },
  { id: 5, title: "Automoção Web - Swag Labs", icon: createIcon(FaShoppingBag), langs: "Playwright + TS", link: "https://github.com/MateusFelS/swag-labs-tests", role: "Engenheiro de QA" },
  { id: 6, title: "Documentação e Automoção - DemoBlaze", icon: createIcon(FaTools), langs: "Cenário e Plano de Teste + Postman + Reporte de Bugs + Playwright", link: "https://github.com/MateusFelS/demo-blaze", role: "Engenheiro de QA" },
  { id: 7, title: "Teste de API, E2E e Performance - Processo Seletivo", icon: createIcon(FaLaptopCode), langs: "JMeter + Postman + Cypress", link: "https://github.com/MateusFelS/ProcessoSeletivo", role: "Engenheiro de QA" },
];

const programmingProjects: Project[] = [
  { id: 8, title: "StyleSphere", icon: createIcon(FaTshirt), langs: "WordPress", link: "https://github.com/MateusFelS/style_sphere", role: "Desenvolvedor Full Stack" },
  { id: 9, title: "VeggieDelight", icon: createIcon(FaUtensils), langs: "Flutter + Firebase", link: "https://github.com/MateusFelS/receitas", role: "Desenvolvedor Mobile" },
  { id: 10, title: "ProdManage", icon: createIcon(FaCut), langs: "Flutter + Nest.js + Ruby + Cucumber", link: "https://github.com/MateusFelS/prod_manage", role: "Desenvolvedor Full Stack" },
  { id: 11, title: "MapsAndRouts", icon: createIcon(FaMapMarkedAlt), langs: "React Native", link: "https://github.com/MateusFelS/maps_and_routs", role: "Desenvolvedor Mobile" },
  { id: 12, title: "Compilador", icon: createIcon(FaCode), langs: "C#", link: "https://github.com/MateusFelS/compilador", role: "Desenvolvedor Backend" },
  { id: 13, title: "Artigo Publicado", icon: createIcon(FaBook), langs: "Atena Editora", link: "https://atenaeditora.com.br/index.php/catalogo/post/metodo-resolucao-de-problemas-aplicado-ao-ensino-de-aprendizado-de-maquina", role: "Autor" },
  { id: 14, title: "Petshop", icon: createIcon(FaPaw), langs: "React + Tailwind CSS", link: "https://github.com/MateusFelS/petshop", role: "Desenvolvedor Frontend" },
];

const Projects = () => {
  return (
    <StyledProjects>
      <Container maxWidth="lg" style={{ backgroundColor: "transparent" }}> 
        <Typography color="primary.contrastText" variant="h2" textAlign="center" marginBottom={4}>
          Projetos de Automação e QA
        </Typography>
        <StyledList>
          {automationProjects.map((project) => (
            <Link href={project.link} target="_blank" rel="noopener noreferrer" underline="none" key={project.id}>
              <ListItem button style={{ padding: "8px 16px"}}>
                <ListItemIcon style={{ minWidth: "40px" }}>{project.icon}</ListItemIcon>
                <ListItemText
                  primary={project.title}
                  secondary={
                    <>
                      <Typography variant="body2" color="#cccccc">
                        {project.role}
                      </Typography>
                      <Typography variant="body2" color="#cccccc">
                        {project.langs}
                      </Typography>
                    </>
                  }
                  primaryTypographyProps={{ color: "#ffffff", fontSize: "1rem" }} 
                />
              </ListItem>
            </Link>
          ))}
        </StyledList>

        <Typography color="primary.contrastText" variant="h2" textAlign="center" marginTop={8} marginBottom={4}>
          Outros Projetos
        </Typography>
        <StyledList>
          {programmingProjects.map((project) => (
            <Link href={project.link} target="_blank" rel="noopener noreferrer" underline="none" key={project.id}>
              <ListItem button style={{ padding: "8px 16px" }}>
                <ListItemIcon style={{ minWidth: "40px" }}>{project.icon}</ListItemIcon>
                <ListItemText
                  primary={project.title}
                  secondary={
                    <>
                      <Typography variant="body2" color="#cccccc">
                        {project.role}
                      </Typography>
                      <Typography variant="body2" color="#cccccc">
                        {project.langs}
                      </Typography>
                    </>
                  }
                  primaryTypographyProps={{ color: "#ffffff", fontSize: "1rem" }} 
                />
              </ListItem>
            </Link>
          ))}
        </StyledList>
      </Container>
    </StyledProjects>
  );
};

export default Projects;