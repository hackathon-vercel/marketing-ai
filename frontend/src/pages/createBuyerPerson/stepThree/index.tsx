import { Box, Button, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import Logo from "../../../../public/logo.png";
import Link from "next/link";
import { useState } from "react";
import TextFieldsIcon from "@mui/icons-material/TextFields"; // Icono para Palabras Claves
import SearchIcon from "@mui/icons-material/Search"; // Icono para Tipo de Búsqueda

const CreateBuyerPerson = () => {
  const theme = useTheme();
  const [checked, setChecked] = useState<number[]>([]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const rows = [
    { keyword: "5 alimentos dañinos para gatos", searchType: "Información" },
    { keyword: "Las 5 mejores marcas de comida para gatos", searchType: "Comercial" },
    { keyword: "Las 5 mejores marcas de comida para gatos", searchType: "Transaccional" },
    { keyword: "5 alimentos dañinos para gatos", searchType: "Información" },
  ];

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
            Tercer Paso
          </Typography>
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            sx={{
              mt: theme.spacing(1),
              [theme.breakpoints.down("md")]: {
                fontSize: "1.5rem",
              },
              [theme.breakpoints.up("lg")]: {
                fontSize: "2rem",
              },
            }}
          >
            Selecciona las palabras clave que se adecuen al <br /> tipo de búsqueda que deseas
          </Typography>

          <TableContainer component={Paper} sx={{ maxWidth: "800px", margin: '0 auto', mt: 4, borderRadius: '15px' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="left">
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <TextFieldsIcon sx={{ marginRight: theme.spacing(1) }} />
                      Palabras Claves
                    </Box>
                  </TableCell>
                  <TableCell align="left">
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <SearchIcon sx={{ marginRight: theme.spacing(1) }} />
                      Tipo de Búsqueda
                    </Box>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell align="left">
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(index) !== -1}
                        onChange={handleToggle(index)}
                        tabIndex={-1}
                        disableRipple
                        sx={{
                          color: "#6A1B9A",
                          "&.Mui-checked": {
                            color: "#6A1B9A",
                          },
                        }}
                      />
                      {row.keyword}
                    </TableCell>
                    <TableCell align="left">
                      <Box
                        sx={{
                          display: 'inline-block',
                          padding: '4px 8px',
                          borderRadius: '8px',
                          border: '2px solid #EDE7FB',
                          backgroundColor: '#EDE7FB',
                          color: '#6A1B9A',
                        }}
                      >
                        {row.searchType}
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box sx={{ display: "flex", justifyContent: "center", width: "100%", maxWidth: "800px", mt: 4 }}>
            <Link href="../../createBuyerPerson/stepTwo" passHref>
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

            <Link href="../../createBuyerPerson/stepFour" passHref>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#17153B",
                  borderRadius: "40px",
                  padding: theme.spacing(1.5, 4),
                  fontSize: "1rem",
                  color: "#EEDBF8",
                  "&:hover": {
                    backgroundColor: "#0f0e2a",
                  },
                  "& .MuiButton-endIcon": {
                    color: "#C8ACD6",
                    fontSize: "1.5rem",
                  },
                }}
                endIcon={<ArrowRightIcon />}
              >
                Continuar
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CreateBuyerPerson;
