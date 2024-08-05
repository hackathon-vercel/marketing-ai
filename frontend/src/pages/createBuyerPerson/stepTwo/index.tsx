import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { Box, Button, Typography, RadioGroup, FormControlLabel, Radio, FormControl } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

import { ROUTES } from "@/constants";
import { HackathonApi } from "@/lib/hackathonAPI";

const CreateBuyerPerson = () => {
  const theme = useTheme();
  const [checked, setChecked] = useState(0);
  const [keywords, setKeywords] = useState<string[]>([]);
  const [term, setTerms] = useState("");
  const router = useRouter();

  useEffect(() => {
    let data = localStorage.getItem("keywords");
    if (data) {
      Object.entries(JSON.parse(data)).find((item) => {
        if (Array.isArray(item[1]) && item[1].length > 0) {
          setKeywords(item[1]);
        }
        return Array.isArray(item[1]) && item[1].length > 0;
      });
    } else {
      toast.error("Primero agrega la descripción y nombre de la empresa");
      router.push(ROUTES.createBuyer.first);
    }
  }, []);

  const handleSubmit = async () => {
    try {
      console.log(term);
      let res = await HackathonApi.keywords(term);
      if (res.status) {
        localStorage.setItem("terms", JSON.stringify(res.data));
        router.push(ROUTES.createBuyer.third);
      } else {
        toast.error(res.message || "Ocurrió un error, vuelva a intentarlo");
      }
    } catch (err) {
      const error = err as any;
      console.error("> ocurrió un error", error);
      const msg = error?.response?.data?.message;
      const defaultMsg = "Ocurrio un error inesperado. Intente nuevamente más tarde!";

      toast.error(msg || defaultMsg);
    }
  };

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
          Segundo Paso
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
          Selecciona el título que más se adapte a lo que buscas
        </Typography>

        <FormControl sx={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
          <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group">
            {keywords.length > 0 &&
              keywords.map((item, index) => (
                <FormControlLabel
                  onClick={(e: any) => {
                    setChecked(index);
                    const { value } = e.target;
                    setTerms(value);
                  }}
                  checked={checked == index}
                  onChange={(e: any) => {}}
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "10px",
                    margin: theme.spacing(1, 0),
                    textDecoration: checked == index ? "line-through" : "none",
                    gap: "20px",
                    color: "black",
                    p: 0.5,
                    textTransform: "capitalize",
                  }}
                  value={item}
                  control={<Radio />}
                  label={item}
                />
              ))}
          </RadioGroup>
        </FormControl>

        <Box sx={{ display: "flex", justifyContent: "center", width: "100%", maxWidth: "800px", mt: 4 }}>
          <Button
            variant="contained"
            onClick={() => router.back()}
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
            onClick={handleSubmit}
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
