import { Box, Button, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Link from "next/link";

const Home = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundImage: "url(/img/bgilaptopgirl.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url(/img/radier.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.9,
        }}
      />
      <Container
        sx={{
          position: "relative",
          textAlign: "center",
          color: "white",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: theme.spacing(-8),
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Image src={Logo} alt="Logo" width={100} height={100} />
        </Box>
        <Box
          sx={{
            marginTop: theme.spacing(15),
            [theme.breakpoints.down("md")]: {
              marginTop: theme.spacing(10),
            },
            [theme.breakpoints.down("sm")]: {
              marginTop: theme.spacing(8),
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
            ¿Listo para llevar tus <br />
            campañas de marketing  <br />
            al siguiente nivel?
          </Typography>
          <Typography
            variant="h6"
            component="h1"
            gutterBottom
            sx={{
              [theme.breakpoints.down("md")]: {
                fontSize: "2rem",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.5rem",
              },
            }}
          >
            Con nuestra innovadora herramienta de IA, puedes <br />
            crear buyer personas detalladas y precisas en cuestión <br />
            de segundos. Es hora de empezar a entender a tu <br />
            público objetivo como nunca antes.
          </Typography>
          <Link href="../createBuyerPerson">
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
              Crear Buyer persona
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
