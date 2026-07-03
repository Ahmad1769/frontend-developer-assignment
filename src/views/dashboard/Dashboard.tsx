import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Link as MuiLink,
  Typography,
  useTheme,
} from "@mui/material";
import SearchBar from "@/components/text/SearchText";
import {
  OFFER_ROUTES,
  OffersTable,
  useOfferSearch,
  useOffers,
} from "@/features/offers";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [isPublished, setIsPublished] = useState(false);
  const { offers: allOffers, loading } = useOffers();
  const { search, setSearch, filteredOffers, handleSearchSubmit } =
    useOfferSearch(allOffers);

  const navigate = useNavigate();
  const theme = useTheme();

  const handleDetail = (offerId: number) => {
    navigate(OFFER_ROUTES.PRODUCT(offerId));
  };

  const label = { inputProps: { "aria-label": "Show whitelisted offers only" } };

  return (
    <Box>
      <Box sx={{ background: "linear-gradient(to bottom, #173039, #00b4c9)" }}>
        <Box
          sx={{
            padding: "50px 80px",
            [theme.breakpoints.up("sm")]: { maxWidth: "1400px" },
            width: "calc(100vw - 6px)",
            margin: "auto",
            textAlign: "left",
          }}
        >
          <Typography
            sx={{
              fontSize: "45px",
              lineHeight: "60px",
              color: "#fff",
              fontWeight: 700,
              marginBottom: "20px",
            }}
          >
            Filters
          </Typography>
          <SearchBar
            search={search}
            handleSearch={setSearch}
            handleKeyDown={handleSearchSubmit}
          />
          <Box
            sx={{ display: "flex", alignItems: "center", paddingLeft: "20px" }}
          >
            <Checkbox
              {...label}
              checked={isPublished}
              sx={{ "& .MuiSvgIcon-root": { fill: "#ffffff" } }}
              onClick={() => setIsPublished(!isPublished)}
            />
            <Typography
              sx={{
                fontSize: "18px",
                lineHeight: "60px",
                color: "#fff",
                fontWeight: 400,
              }}
            >
              Show only whitelisted properties's offers
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          minHeight: "calc(100vh - 450px)",
          backgroundColor: "#fff",
          padding: "80px 24px",
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: "20px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", flexShrink: 0 }}>
          <Button
            variant="contained"
            onClick={() => navigate("/sell")}
            sx={{
              backgroundColor: "#00dbe3",
              borderRadius: "6px",
              width: { xs: "100%", lg: "352px" },
              height: "64px",
              fontSize: "24px",
              textTransform: "uppercase",
              color: "#ffffff",
              fontWeight: 700,
            }}
          >
            Sell
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#23a2bb",
              borderRadius: "6px",
              width: { xs: "100%", lg: "352px" },
              height: "64px",
              fontSize: "24px",
              textTransform: "uppercase",
              color: "#ffffff",
              fontWeight: 700,
            }}
          >
            Buy
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#173039",
              borderRadius: "6px",
              width: { xs: "100%", lg: "352px" },
              height: "64px",
              fontSize: "24px",
              textTransform: "uppercase",
              color: "#ffffff",
              fontWeight: 700,
            }}
          >
            Exchange
          </Button>
        </Box>
        <Box sx={{ overflow: "auto", width: "100%" }}>
          <MuiLink
            component={Link}
            to={OFFER_ROUTES.EXPLORE}
            sx={{
              display: "inline-block",
              mb: 2,
              color: "#00dbe3",
              fontWeight: 600,
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Prefer cards? Explore properties →
          </MuiLink>
          <OffersTable
            offers={filteredOffers}
            loading={loading}
            onViewOffer={handleDetail}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
