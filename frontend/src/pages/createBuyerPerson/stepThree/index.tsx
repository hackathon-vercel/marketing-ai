import { Box, Button, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { useEffect, useState } from "react";
import TextFieldsIcon from "@mui/icons-material/TextFields"; // Icono para Palabras Claves
import SearchIcon from "@mui/icons-material/Search"; // Icono para Tipo de Búsqueda
import toast from "react-hot-toast";
import { useRouter } from "next/router";

import { ROUTES } from "@/constants";
import { useBuyerContext } from "@/context/BuyerContext";

//types
import type { TermsProps } from "@/types/formBuyer";

const CreateBuyerPerson = () => {
  const theme = useTheme();
  const router = useRouter();
  const { keywords, setKeywords } = useBuyerContext();
  const [terms, setTerms] = useState<TermsProps[]>([
    {
      intencion_de_busqueda: "",
      palabra_clave: "",
    },
  ]);
  const [checked, setChecked] = useState<number[]>([]);

  const handleChange = (e: any) => {
    const { value } = e.target;
    setKeywords((prevState) => {
      if (prevState.includes(value)) {
        let arr = prevState.filter((item) => item !== value);
        console.log(arr);
        return arr;
      }
      return [...prevState, value];
    });
  };

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

  useEffect(() => {
    setKeywords([""]);
    localStorage.setItem("keywordsSelected", "");
    let data = localStorage.getItem("terms");
    if (data) {
      let parsed = JSON.parse(data);
      setTerms(parsed);
    } else {
      toast.error("Primero selecciona una frase");
      router.push(ROUTES.createBuyer.second);
    }
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
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

        <TableContainer component={Paper} sx={{ maxWidth: "800px", margin: "0 auto", mt: 4, borderRadius: "15px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left">
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <TextFieldsIcon sx={{ marginRight: theme.spacing(1) }} />
                    Palabras Claves
                  </Box>
                </TableCell>
                <TableCell align="left">
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <SearchIcon sx={{ marginRight: theme.spacing(1) }} />
                    Tipo de Búsqueda
                  </Box>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {terms.length > 0 &&
                terms.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell
                      align="left"
                      sx={{
                        textTransform: "capitalize",
                      }}
                    >
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(index) !== -1}
                        onClick={handleChange}
                        onChange={handleToggle(index)}
                        tabIndex={-1}
                        disableRipple
                        sx={{
                          color: "#6A1B9A",
                          "&.Mui-checked": {
                            color: "#6A1B9A",
                          },
                        }}
                        value={row.palabra_clave}
                      />
                      {row.palabra_clave}
                    </TableCell>
                    <TableCell align="left">
                      <Box
                        sx={{
                          display: "inline-block",
                          padding: "4px 8px",
                          borderRadius: "8px",
                          border: "2px solid #EDE7FB",
                          backgroundColor: "#EDE7FB",
                          color: "#6A1B9A",
                          textTransform: "capitalize",
                        }}
                      >
                        {row.intencion_de_busqueda}
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ display: "flex", justifyContent: "center", width: "100%", maxWidth: "800px", mt: 4 }}>
          <Button
            variant="contained"
            onClick={() => {
              router.back();
            }}
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

          <Button
            variant="contained"
            onClick={() => {
              if (keywords.length > 0) {
                localStorage.setItem("keywordsSelected", JSON.stringify(keywords));
                router.push(ROUTES.createBuyer.fourth);
              } else {
                toast.error("Selecciona una palabra clave como mínimo");
              }
            }}
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
        </Box>
      </Box>
    </>
  );
};

export default CreateBuyerPerson;
