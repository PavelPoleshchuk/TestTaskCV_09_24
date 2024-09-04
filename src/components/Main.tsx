import styled from "@emotion/styled";
import { Box, IconButton, Typography } from "@mui/material";
import { IMediaCard, MediaCard } from "./MediaCard";

const MainTextTypography = styled(Typography)({
  fontFamily: "Poppins, sans-serif",
  fontSize: "58px",
  fontWeight: 700,
  lineHeight: "70px",
  letterSpacing: "-1px",
  whiteSpace: "nowrap",
});

const GradientAvatarContainer = styled(Box)({
  position: "relative",
  width: 350,
  height: 350,
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: "50%",
    padding: "9px",
    background: "linear-gradient(180deg, #E70FAA 0%, #00C0FD 100%)",
    WebkitMask:
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    maskComposite: "exclude",
  },
});

const TechStackWrapper = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
});

const StyledIconButton = styled(IconButton)({
  width: "120px",
  height: "120px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const DataMediaCards: IMediaCard[] = [
  {
    id: 1,
    image: "/1.png",
  },
  {
    id: 2,
    image: "/2.png",
  },
  {
    id: 3,
    image: "/3.png",
  },
  {
    id: 4,
    image: "/4.png",
  },
  {
    id: 5,
    image: "/5.png",
  },
  {
    id: 6,
    image: "/6.png",
  },
];

type ISkillsIcons = {
  id: number;
  src: string;
  alt: string;
};

const skillsIcons: ISkillsIcons[] = [
  { id: 1, src: "/html.svg", alt: "html" },
  { id: 2, src: "/css.svg", alt: "css" },
  { id: 3, src: "/js.svg", alt: "js" },
  { id: 4, src: "/react.svg", alt: "react" },
  { id: 5, src: "/vector.svg", alt: "vector" },
  { id: 6, src: "/bootstrap.svg", alt: "bootstrap" },
  { id: 7, src: "/tailwind.svg", alt: "tailwind" },
  { id: 8, src: "/sass.svg", alt: "sass" },
  { id: 9, src: "/git-icon.svg", alt: "git" },
  { id: 10, src: "/greensock.svg", alt: "greensock" },
  { id: 10, src: "/vscode.svg", alt: "vscode" },
  { id: 10, src: "/git.svg", alt: "git" },
];

export const Main: React.FC = () => {
  return (
    <Box component={"main"}>
      <Box
        component={"section"}
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column-reverse",
            sm: "column-reverse",
            md: "row",
          },
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: { xs: "50px", sm: "50px", md: "220px" },
        }}
      >
        <Box>
          <MainTextTypography
            sx={{ fontSize: { xs: "40px", sm: "58px" } }}
            align="left"
            variant="h5"
            gutterBottom
          >
            Hi 👋,{"\n"} My name is
          </MainTextTypography>
          <MainTextTypography
            align="left"
            variant="h1"
            gutterBottom
            sx={{
              background:
                "linear-gradient(90deg, #13B0F5 -0.08%, #CA24B4 63.6%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Pavan MG
          </MainTextTypography>
          <MainTextTypography
            sx={{ fontSize: { xs: "40px", sm: "58px" } }}
            align="left"
            variant="h5"
          >
            I build things for web
          </MainTextTypography>
        </Box>

        <GradientAvatarContainer>
          <img alt="User Avatar" src="/avatar.jpg" />
        </GradientAvatarContainer>
      </Box>
      <Box
        component={"section"}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: { xs: "150px", sm: "150px", md: "340px" },
          gap: "50px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: "48px",
            fontWeight: "700",
            lineHeight: "26px",
          }}
        >
          My Tech Stack
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: "32px",
            fontWeight: "400",
            lineHeight: "26px",
          }}
        >
          Technologies I’ve been working with recently
        </Typography>

        <TechStackWrapper
          sx={{
            gap: { xs: "0", sm: "30px 30px", md: "70px 95px" },
            marginTop: { xs: "20px", sm: "20px", md: "140px" },
          }}
        >
          {skillsIcons.map((skill) => (
            <StyledIconButton key={skill.id}>
              <img
                src={skill.src}
                alt={skill.alt}
                style={{ width: "100%", height: "100%" }}
              />
            </StyledIconButton>
          ))}
        </TechStackWrapper>
      </Box>

      <Box
        component={"section"}
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: { xs: "50px", sm: "50px", md: "140px" },
          gap: "50px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: "48px",
            fontWeight: "700",
            lineHeight: "26px",
          }}
        >
          Projects
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: "32px",
            fontWeight: "400",
            lineHeight: "26px",
          }}
        >
          Things I’ve built so far
        </Typography>
      </Box>
      <Box
        component={"section"}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "95px",
          marginBottom: { xs: "60px", sm: "70px", md: "200px" },
          gap: "60px 39px",
        }}
      >
        {DataMediaCards.map((card) => (
          <MediaCard id={card.id} image={card.image} />
        ))}
      </Box>
    </Box>
  );
};
