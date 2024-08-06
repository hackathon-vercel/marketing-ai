import { Box, Button, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import Logo from "../../public/logo.png";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Link from "next/link";

const Home = () => {
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
            [theme.breakpoints.down("md")]: {
              fontSize: "2rem",
            },
            [theme.breakpoints.down("sm")]: {
              fontSize: "1.5rem",
            },
          }}
        >
          Conoce a tu Público <br />
          Objetivo con Nuestra <br />
          Tecnología de IA
        </Typography>
        <Link href="./demoService">
          <Button
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
            Iniciar Prueba Gratis
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default Home;
