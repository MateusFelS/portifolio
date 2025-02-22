import { Container, Grid, IconButton, Link, Typography, styled } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  const StyledFooter = styled("footer")(({ theme }) => ({
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.primary.main,
    padding: theme.spacing(4, 0),
  }));

  const FooterText = styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(2),
  }));

  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Grid container alignItems="center" justifyContent="center" spacing={2}>
          <Grid item>
            <Link href="https://github.com/MateusFelS" target="_blank" rel="noopener noreferrer">
              <IconButton>
                <GitHubIcon />
              </IconButton>
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://www.linkedin.com/in/mateus-santos-7350381a6/" target="_blank" rel="noopener noreferrer">
              <IconButton>
                <LinkedInIcon />
              </IconButton>
            </Link>
          </Grid>
          <Grid item>
            <Link href="mailto:mateus.fes14@gmail.com">
              <IconButton>
                <EmailIcon />
              </IconButton>
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://wa.me/5514997692248" target="_blank" rel="noopener noreferrer">
              <IconButton>
                <WhatsAppIcon />
              </IconButton>
            </Link>
          </Grid>
        </Grid>
        <FooterText variant="body2" align="center">
          © {new Date().getFullYear()} Mateus Santos - All rights reserved
        </FooterText>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
