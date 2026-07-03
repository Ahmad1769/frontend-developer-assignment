import React from "react";
import { CircularProgress, Typography } from "@mui/material";
import { MARKETPLACE_THEME } from "@/features/offers/constants/marketplace.theme";

type LoadingStateProps = {
  message: string;
  className?: string;
};

const LoadingState = ({ message, className }: LoadingStateProps) => (
  <div className={className}>
    <CircularProgress sx={{ color: MARKETPLACE_THEME.accent }} />
    <Typography sx={{ mt: 2, color: MARKETPLACE_THEME.primary }}>
      {message}
    </Typography>
  </div>
);

export default LoadingState;
