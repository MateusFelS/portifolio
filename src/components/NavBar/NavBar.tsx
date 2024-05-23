import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";

const NavBar = () => {
  const StyledToolbar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "space-evenly",
  }));

  const fonteMenu = "1.2rem";

  return (
    <>
      <AppBar position="relative">
        <StyledToolbar>
          <MenuItem sx={{ fontSize: fonteMenu }} component="a" href="#about">
            About
          </MenuItem>
          <MenuItem sx={{ fontSize: fonteMenu }} component="a" href="#skills">
            Skills
          </MenuItem>
          <MenuItem sx={{ fontSize: fonteMenu }} component="a" href="#projects">
            Projects
          </MenuItem>
        </StyledToolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
