import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Paper } from "@mui/material";
import { GitCircle } from "./icons/GitCircle";
import { Chain } from "./icons/Chain";

export type IMediaCard = {
  id: number;
  image: string;
  imgTitle?: string;
  title?: string;
  description1?: string;
  description2?: string;
  description3?: string;
};

export const MediaCard: React.FC<IMediaCard> = ({
  image,
  imgTitle = "green planet",
  title = "Project Tile goes here",
  description1 = "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
  description2 = "Tech stack :",
  description3 = "HTML , JavaScript, SASS, React",
}) => {
  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 373,
        paddingBottom: "25px",
        borderRadius: "20px",
        boxShadow: "2px 2px 100px 0px #00000033",
      }}
    >
      <CardMedia sx={{ height: 260 }} image={image} title={imgTitle} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontFamily: "Poppins",
            fontSize: "28px",
            fontWeight: "500",
            lineHeight: "26px",
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: "18px",
            fontWeight: "300",
            lineHeight: "26px",
            textAlign: "left",
          }}
        >
          {description1}
        </Typography>
        <Box sx={{ textAlign: "left" }}>
          <Typography
            component="span"
            sx={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "26px",
              textAlign: "left",
            }}
          >
            {description2}{" "}
          </Typography>

          <Typography
            component="a"
            sx={{
              fontFamily: "Poppins",
              fontSize: "14px",
              fontWeight: "300",
              lineHeight: "26px",
            }}
          >
            {description3}
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between", padding: "0 16px" }}>
        <Button
          sx={{
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "26px",
            textTransform: "none",
            textDecoration: "underline",
            color: "black",
          }}
          size="small"
        >
          <Chain marginRight="12px" />
          Live Preview
        </Button>
        <Button
          sx={{
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "26px",
            textTransform: "none",
            textDecoration: "underline",
            color: "black",
          }}
          size="small"
        >
          <GitCircle height="20" marginRight="12px" />
          View Code
        </Button>
      </CardActions>
    </Paper>
  );
};
