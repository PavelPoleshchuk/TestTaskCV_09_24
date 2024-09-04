import React from "react";
import { Toolbar, Button, IconButton, Box } from "@mui/material";
import styled from "@emotion/styled";
import { GitCircle } from "./icons/GitCircle";
import { TwitterCircle } from "./icons/TwitterCircle";
import { LinkedinCircle } from "./icons/LinkedinCircle";
import { Logo } from "./icons/Logo";
import MenuIcon from "@mui/icons-material/Menu";
import { BurgerMenu } from "./BurgerMenu";
import { HeaderButtons } from "../data/buttons";

const StyledButton = styled(Button)({
  width: "fitContent",
  variant: "text",
  fontFamily: "DM Sans, sans-serif",
  fontWeight: 500,
  fontSize: "20px",
  lineHeight: "26px",
  border: "none",
  whiteSpace: "nowrap",
  textTransform: "none",
  color: "#666666",
  "&:focus": {
    outline: "none",
  },
});

const StyledIconButton = styled(IconButton)({
  "&:focus": {
    outline: "none",
  },
});

const Header: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Box component={"header"}>
      <BurgerMenu open={open} setOpen={setOpen} buttonsArray={HeaderButtons} />
      <Toolbar
        sx={{
          gap: "50px",
          justifyContent: "space-between",
          padding: "0",
          backgroundColor: "white",
        }}
      >
        <Box sx={{ display: "flex", gap: "16px" }}>
          <StyledIconButton>
            <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
              <Logo />
            </Box>
            <MenuIcon
              onClick={() => setOpen(true)}
              sx={{ display: { sm: "block", md: "none" } }}
            />
          </StyledIconButton>
        </Box>

        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "flex" },
            gap: "16px",
            marginLeft: "auto",
          }}
        >
          {HeaderButtons.map((item, index) => (
            <StyledButton key={index}>{item}</StyledButton>
          ))}
        </Box>

        <Box sx={{ display: "flex", gap: "4px" }}>
          <StyledIconButton
            sx={{
              "&:focus": {
                outline: "none",
              },
            }}
          >
            <GitCircle />
          </StyledIconButton>
          <StyledIconButton>
            <TwitterCircle />
          </StyledIconButton>
          <StyledIconButton>
            <LinkedinCircle />
          </StyledIconButton>
        </Box>
      </Toolbar>
    </Box>
  );
};

export default Header;
