import { Menu, MenuItem } from "@mui/material";
import React from "react";

export const BurgerMenu: React.FC<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  buttonsArray: string[];
}> = ({ open, setOpen, buttonsArray }) => {
  return (
    <Menu
      open={open}
      onClose={() => setOpen(false)}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      {buttonsArray.map((item) => (
        <MenuItem>{item}</MenuItem>
      ))}
    </Menu>
  );
};
