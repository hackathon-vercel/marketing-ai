import { Box, Button, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Link from "next/link";
import { useRouter } from "next/router";

import { ROUTES } from "@/constants";

const Home = () => {
  const router = useRouter();
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          mt: {
            xs: 3,
            sm: 5,
            md: 7,
          },
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 800,
            fontSize: {
              xs: "1.5rem",
              sm: "2rem",
              md: "3rem",
            },
            maxWidth: { xs: "90vw", md: "700px" },
            mx: "auto",
          }}
        >
          ¿Listo para llevar tus campañas de marketing al siguiente nivel?
        </Typography>
        <Typography
          variant="h6"
          component="p"
          gutterBottom
          sx={{
            maxWidth: {
              xs: "95%",
              md: "800px",
            },
            mx: "auto",
            fontSize: {
              xs: "0.8rem",
              sm: "1.2rem",
            },
          }}
        >
          Con nuestra innovadora herramienta de IA, puedes crear buyer personas detalladas y precisas en cuestión de segundos. Es hora de empezar a entender a tu público objetivo como nunca antes.
        </Typography>
        <Button
          onClick={() => {
            router.push(ROUTES.createBuyer.first);
          }}
          variant="contained"
          sx={{
            marginTop: theme.spacing(5),
            backgroundColor: "#17153B",
            borderRadius: "40px",
            padding: theme.spacing(1, 6),
            fontSize: "1.25rem",
            color: "#EEDBF8",
            "&:hover": {
              backgroundColor: "#0f0e2a",
            },
            "& .MuiButton-endIcon": {
              color: "#C8ACD6",
            },
            [theme.breakpoints.down("md")]: {
              padding: theme.spacing(1.5, 5),
              fontSize: "1rem",
            },
            [theme.breakpoints.down("sm")]: {
              padding: theme.spacing(1, 4),
              fontSize: "0.875rem",
            },
          }}
          endIcon={<ArrowRightIcon />}
        >
          Crear Buyer persona
        </Button>
      </Box>
    </>
  );
};

export default Home;
