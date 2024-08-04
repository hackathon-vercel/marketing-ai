import { Box, Button, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import Logo from "../../../public/logo.png";
import Link from "next/link";

const CreateBuyerPerson = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundImage: "url(/img/radier.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: theme.spacing(2),
      }}
    >
      <Container
        sx={{
          position: "relative",
          textAlign: "center",
          color: "white",
          maxWidth: { xs: "100%", sm: "90%", md: "80%", lg: "70%" },
          padding: theme.spacing(2),
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: theme.spacing(0),
            left: "50%",
            transform: "translateX(-50%)",
            [theme.breakpoints.down("sm")]: {
              top: theme.spacing(-2),
            },
          }}
        >
          <Image src={Logo} alt="Logo" width={80} height={80} />
        </Box>

        <Box
          sx={{
            marginTop: theme.spacing(12),
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            [theme.breakpoints.down("sm")]: {
              marginTop: theme.spacing(6),
            },
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 800,
              fontSize: "2rem",
              [theme.breakpoints.up("md")]: {
                fontSize: "3rem",
              },
              [theme.breakpoints.up("lg")]: {
                fontSize: "4rem",
              },
            }}
          >
            Resultados
          </Typography>

          <Box
            sx={{
              mt: theme.spacing(4),
              width: "100%",
              maxWidth: "800px",
              backgroundColor: "#433D8B",
              borderRadius: "15px",
              textAlign: "left",
            }}
          >
            <Typography variant="h6" sx={{ color: "white", mt: 1, mb: 1 }} align="center">
              Título
            </Typography>
            <Typography
              variant="body1"
              sx={{
                backgroundColor: "#D9D9D9",
                color: "black",
                padding: theme.spacing(1),
              }}
            >
              Aquí va el texto del título
            </Typography>

            <Typography variant="h6" sx={{ color: "white", mt: 1, mb: 1 }}  align="center">
              Descripción
            </Typography>
            <Typography
              variant="body1"
              sx={{
                backgroundColor: "#D9D9D9",
                color: "black",
                borderBottomLeftRadius: "15px",
                borderBottomRightRadius: "15px",
                padding: theme.spacing(1),
              }}
            >
              Aquí va el texto de la descripción. 
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              maxWidth: "800px",
              mt: 4,
            }}
          >
            <Link href="../createBuyerPerson/stepFour" passHref>
              <Button
                variant="contained"
                sx={{
                  marginRight: theme.spacing(2),
                  backgroundColor: "#17153B",
                  borderRadius: "40px",
                  padding: theme.spacing(1.5, 4),
                  fontSize: "1rem",
                  color: "#EEDBF8",
                  "&:hover": {
                    backgroundColor: "#0f0e2a",
                  },
                  "& .MuiButton-startIcon": {
                    color: "#C8ACD6",
                    fontSize: "1.5rem",
                  },
                }}
                startIcon={<ArrowLeftIcon />}
              >
                Volver
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CreateBuyerPerson;
