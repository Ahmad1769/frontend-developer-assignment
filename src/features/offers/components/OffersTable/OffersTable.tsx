import React from "react";
import {
  Box,
  CircularProgress,
  Link as MuiLink,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { Link } from "react-router-dom";
import Text2 from "@/components/text/Text2";
import { OFFER_ROUTES } from "@/features/offers/constants/offer.constants";
import { MARKETPLACE_THEME } from "@/features/offers/constants/marketplace.theme";
import { ProductOffer } from "@/features/offers/types/offer.types";

export type OffersTableProps = {
  offers: ProductOffer[];
  loading: boolean;
  onViewOffer: (offerId: number) => void;
};

const TABLE_HEADERS = [
  "Offer ID",
  "Property",
  "Offer Token",
  "Buyer token",
  "Rate of Return",
  "offer Yield",
  "Official price",
  "Asked Price",
  "Stock",
  "Cart",
  "View",
] as const;

const OffersTable = ({ offers, loading, onViewOffer }: OffersTableProps) => {
  if (loading) {
    return (
      <Box sx={{ textAlign: "center", py: 6 }}>
        <CircularProgress sx={{ color: MARKETPLACE_THEME.accent }} />
      </Box>
    );
  }

  if (offers.length === 0) {
    return (
      <Box sx={{ textAlign: "center", py: 6 }}>
        <Typography sx={{ color: MARKETPLACE_THEME.primary, mb: 2 }}>
          No offers found. Browse properties on Explore.
        </Typography>
        <MuiLink
          component={Link}
          to={OFFER_ROUTES.EXPLORE}
          sx={{
            color: MARKETPLACE_THEME.accent,
            fontWeight: 700,
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Browse on Explore
        </MuiLink>
      </Box>
    );
  }

  return (
    <Table
      aria-label="offers table"
      sx={{
        borderCollapse: "unset",
        whiteSpace: "nowrap",
        borderRadius: "8px",
        border: `2px solid ${MARKETPLACE_THEME.border}`,
      }}
    >
      <TableHead sx={{ background: MARKETPLACE_THEME.tableHeader }}>
        <TableRow
          sx={{
            "& th": {
              padding: "0px 5px",
              borderRight: `2px solid ${MARKETPLACE_THEME.border}`,
            },
            "& th:first-child": { borderTopLeftRadius: "8px" },
            "& th:last-child": {
              borderRight: "0px",
              borderTopRightRadius: "8px",
            },
          }}
        >
          {TABLE_HEADERS.map((header) => (
            <TableCell key={header} align={header === "Offer ID" ? "center" : "inherit"}>
              <Text2>{header}</Text2>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {offers.map((offer) => (
          <TableRow
            key={offer.id}
            hover
            onClick={() => onViewOffer(offer.id)}
            sx={{
              cursor: "pointer",
              "& td": {
                padding: "0px 5px",
                borderRight: `2px solid ${MARKETPLACE_THEME.border}`,
              },
              "& td:last-child": { borderRight: "0px" },
            }}
          >
            <TableCell align="center">
              <Text2>{offer.id}</Text2>
            </TableCell>
            <TableCell>
              <Text2>
                <Box
                  component="span"
                  sx={{
                    color: MARKETPLACE_THEME.primary,
                    fontWeight: 600,
                    maxWidth: 180,
                    display: "inline-block",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {offer.name}
                </Box>
              </Text2>
            </TableCell>
            <TableCell>
              <Text2>
                <Box
                  component="span"
                  sx={{
                    color: MARKETPLACE_THEME.accent,
                    fontWeight: 600,
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                  }}
                >
                  {offer.offerToken}
                </Box>
              </Text2>
            </TableCell>
            <TableCell>
              <Text2>{offer.buyerToken}</Text2>
            </TableCell>
            <TableCell align="center">
              <Text2>{offer.rateOfReturn}</Text2>
            </TableCell>
            <TableCell align="center">
              <Text2>{offer.offerYield}</Text2>
            </TableCell>
            <TableCell align="center">
              <Text2>{offer.officialPrice}</Text2>
            </TableCell>
            <TableCell align="center">
              <Text2>{offer.askedPrice}</Text2>
            </TableCell>
            <TableCell align="center">
              <Text2>{offer.stock}</Text2>
            </TableCell>
            <TableCell align="center">
              <IconButton
                aria-label="add to cart"
                onClick={(event) => event.stopPropagation()}
              >
                <ShoppingCartOutlinedIcon
                  sx={{ fontSize: "24px", color: MARKETPLACE_THEME.accent }}
                />
              </IconButton>
            </TableCell>
            <TableCell align="center">
              <IconButton
                aria-label="view product"
                onClick={(event) => {
                  event.stopPropagation();
                  onViewOffer(offer.id);
                }}
              >
                <RemoveRedEyeOutlinedIcon
                  sx={{ fontSize: "24px", color: MARKETPLACE_THEME.accent }}
                />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default OffersTable;
