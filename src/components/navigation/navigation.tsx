import React, { FC } from "react";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";
import { navigations } from "./navigation.data";

type NavigationData = {
  path: string;
  label: string;
};

const Navigation: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: "wrap",
        justifyContent: "end",
        flexDirection: { xs: "column", lg: "row" }
      }}
    >
      {navigations.map(({ path: destination, label }: NavigationData) => (
        <Box
          key={label}
          component={NavLink}
          to={destination}
          sx={{
            display: "inline-flex",
            position: "relative",
            color: "white",
            lineHeight: "30px",
            letterSpacing: "3px",
            cursor: "pointer",
            textDecoration: "none",
            textTransform: "uppercase",
            fontWeight: 700,
            alignItems: "center",
            justifyContent: "center",
            px: { xs: 0, lg: 3 },
            mb: { xs: 3, lg: 0 },
            fontSize: "20px",
            "&.active": {
              color: "primary.main",
            },
            "&:hover": {
              color: "text.disabled"
            }
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 12,
              transform: "rotate(3deg)",
              display: "none",
              ".active &": { display: "block" },
              "& img": { width: 44, height: "auto" }
            }}
          >
            <img src="/images/headline-curve.svg" alt="" />
          </Box>
          {label}
        </Box>
      ))}
      <Box
        sx={{
          position: "relative",
          color: "white",
          cursor: "pointer",
          textDecoration: "none",
          textTransform: "uppercase",
          fontWeight: 600,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 0, lg: 3 },
          mb: { xs: 3, lg: 0 },
          fontSize: "24px",
          lineHeight: "6px",
          width: "324px",
          height: "45px",
          borderRadius: "6px",
          backgroundColor: "#00dbe3"
        }}
      >
        Connect Wallet
      </Box>
    </Box>
  );
};

export default Navigation;
