import React from "react";
import {
  Toolbar,
  Button,
  IconButton,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import { GitCircle } from "./icons/GitCircle";
import { TwitterCircle } from "./icons/TwitterCircle";
import { LinkedinCircle } from "./icons/LinkedinCircle";
import { LogoGrey } from "./icons/LogoGrey";
import { HeaderButtons } from "../data/buttons";

const StyledButton = styled(Button)({
  variant: "text",
  fontFamily: "DM Sans, sans-serif",
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: "26px",
  border: "none",
  textTransform: "none",
  whiteSpace: "nowrap",
  color: "#42446E",
  "&:focus": {
    outline: "none",
  },
});

const StyledIconButton = styled(IconButton)({
  "&:focus": {
    outline: "none",
  },
});

const ColoredTextTypography = styled(Typography)({
  fontFamily: "Poppins",
  fontSize: "18px",
  fonteWight: "400",
  lineHeight: "26px",
  variant: "h5",
  gutterBottom: true,
});

const Footer: React.FC = () => {
  return (
    <Box component="footer">
      <Toolbar
        sx={{
          flexDirection: { xs: "column", sm: "column", md: "row" },
          gap: { xs: "0", sm: "0", md: "50px" },
          padding: "0",
          backgroundColor: "white",
        }}
      >
        <Box sx={{ display: "flex", gap: "16px" }}>
          <StyledIconButton>
            <LogoGrey />
          </StyledIconButton>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "44px",
            marginLeft: { xs: "0", sm: "0", md: "auto" },
          }}
        >
          {["+91 12345 09876", "info@example.com"].map((item, index) => (
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
      <Divider
        sx={{
          borderWidth: "1px",
          borderColor: "#c3c3c3",
          margin: { xs: "10px 0", sm: "10px 0", md: "50px 0" },
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 0,
          backgroundColor: "white",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
          },
        }}
      >
        <Box sx={{ display: "flex", gap: { xs: "0px", sm: "44px" } }}>
          {HeaderButtons.map((item, index) => (
            <StyledButton key={index}>{item}</StyledButton>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "0px",
          }}
        >
          <ColoredTextTypography>
            Designed and built by&nbsp;
          </ColoredTextTypography>
          <ColoredTextTypography
            sx={{
              background: "linear-gradient(90deg, #13B0F5 -0.08%, #7513f5 50%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Pavan MG&nbsp;
          </ColoredTextTypography>
          <ColoredTextTypography sx={{ display: { xs: "none", sm: "block" } }}>
            with&nbsp;
          </ColoredTextTypography>
          <ColoredTextTypography
            sx={{
              display: { xs: "none", sm: "block" },
              background: "linear-gradient(90deg,  #aa13f5 50%, #CA24B4 70%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Love & Coffee
          </ColoredTextTypography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
