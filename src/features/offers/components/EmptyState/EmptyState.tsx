import React from "react";
import { Typography } from "@mui/material";

type EmptyStateProps = {
  message: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
  actionClassName?: string;
};

const EmptyState = ({
  message,
  actionLabel,
  onAction,
  className,
  actionClassName,
}: EmptyStateProps) => (
  <div className={className}>
    <Typography>{message}</Typography>
    {actionLabel && onAction && (
      <button type="button" className={actionClassName} onClick={onAction}>
        {actionLabel}
      </button>
    )}
  </div>
);

export default EmptyState;
