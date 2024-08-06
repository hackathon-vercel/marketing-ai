import { Box, Button, Typography, TextField, FormControl, MenuItem, Select, OutlinedInput, InputAdornment, FormHelperText } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import Link from "next/link";
import { useEffect, useState } from "react";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import TonalityIcon from "@mui/icons-material/Tonality";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import { useRouter } from "next/router";
import { Formik } from "formik";
import * as Yup from "yup";

import { useBuyerContext } from "@/context/BuyerContext";
import httpClient from "@/lib/httpClient";

//type
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { ROUTES } from "@/constants";
import toast from "react-hot-toast";
import { CreateContentProps } from "@/types/formBuyer";
import { HackathonApi } from "@/lib/hackathonAPI";

const validationSchema = Yup.object({
  objective: Yup.string().required("El objetivo del anuncio es requerido"),
  tone: Yup.string().required("El tipo de tono del anuncio es requerida"),
  message: Yup.string().required("El call to action es requerido"),
});

type Repo = {
  data: string[];
};

export const getStaticProps = (async (context) => {
  const {
    data: { data },
  } = await httpClient.get({ url: "/contents/list-ad-tone" });
  return { props: { data } };
}) satisfies GetStaticProps<{
  data: Repo;
}>;

const CreateBuyerPerson = ({ data }: Repo) => {
  const router = useRouter();
  const { keywords, setKeywords } = useBuyerContext();
  const theme = useTheme();

  const iconColor = "#17153B";

  useEffect(() => {
    if (keywords.length == 0) {
      toast("Vuelve a seleccionar las palabras claves");
      router.push(ROUTES.createBuyer.third);
    }
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mt: {
          xs: 3,
          sm: 5,
          md: 6,
        },
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontWeight: 800,
          fontSize: "2rem",
          textAlign: "center",
          [theme.breakpoints.up("md")]: {
            fontSize: "3rem",
          },
          [theme.breakpoints.up("lg")]: {
            fontSize: "4rem",
          },
        }}
      >
        Cuarto Paso
      </Typography>
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{
          mt: theme.spacing(1),
          textAlign: "center",
          [theme.breakpoints.down("md")]: {
            fontSize: "1.5rem",
          },
          [theme.breakpoints.up("lg")]: {
            fontSize: "2rem",
          },
        }}
      >
        Selecciona el propósito del anuncio
      </Typography>
      {
        <Formik
          initialValues={{
            objective: "",
            tone: "",
            message: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            let form: CreateContentProps = {
              ...values,
              keyword: keywords,
            };
            try {
              let res = await HackathonApi.createContent(form);
              if (res.status) {
                localStorage.setItem("result", JSON.stringify(res.data));
                setKeywords([]);
                toast.success("Se creó su contenido exitosamente");
                router.push(ROUTES.result);
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
          }}
        >
          {({ values, handleChange, touched, handleBlur, errors, handleSubmit }) => {
            return (
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  mt: 2,
                  width: "100%",
                  maxWidth: "500px",
                  padding: 1,
                  borderRadius: "8px",
                }}
              >
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h6" align="left">
                    Objetivo del anuncio
                  </Typography>
                  <Typography variant="body2" gutterBottom align="left">
                    Más view, like, clientes potenciales...
                  </Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    name="objective"
                    value={values.objective}
                    error={touched.objective && Boolean(errors.objective)}
                    helperText={touched.objective && errors.objective}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Objetivo del anuncio"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PodcastsIcon sx={{ color: iconColor }} />
                        </InputAdornment>
                      ),
                      sx: { backgroundColor: "white" },
                    }}
                  />
                </Box>

                <FormControl
                  fullWidth
                  variant="outlined"
                  error={touched.tone && Boolean(errors.tone)}
                  sx={{
                    mb: 2,
                    textAlign: "left",
                    "& .spanTone": {
                      color: "rgba(0,0,0, 0.4)",
                    },
                  }}
                >
                  <Typography variant="h6" align="left">
                    Tipo de tono para el anuncio
                  </Typography>
                  <Typography variant="body2" gutterBottom align="left">
                    Formal, Informal, Divertido...
                  </Typography>
                  <Select
                    displayEmpty
                    name="tone"
                    inputProps={{ "aria-label": "Without label" }}
                    value={values.tone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    input={
                      <OutlinedInput
                        startAdornment={
                          <InputAdornment position="start">
                            <TonalityIcon sx={{ color: iconColor }} />
                          </InputAdornment>
                        }
                        sx={{
                          backgroundColor: "white",
                        }}
                      />
                    }
                  >
                    <MenuItem value="">
                      <span className="spanTone">Tipo de tono para el anuncio</span>
                    </MenuItem>
                    {data.length > 0 &&
                      data.map((text, i) => {
                        return (
                          <MenuItem sx={{ textTransform: "capitalize" }} key={`${text}-${i}`} value={text}>
                            {text}
                          </MenuItem>
                        );
                      })}
                  </Select>
                  {touched.tone && <FormHelperText>{errors.tone}</FormHelperText>}
                </FormControl>

                <Box sx={{ mb: 2 }}>
                  <Typography variant="h6" align="left">
                    Call to action
                  </Typography>
                  <Typography variant="body2" gutterBottom align="left">
                    Generar más ventas, Engagement...
                  </Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    name="message"
                    value={values.message}
                    error={touched.message && Boolean(errors.message)}
                    helperText={touched.message && errors.message}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Llamado de acción"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <TouchAppIcon sx={{ color: iconColor }} />
                        </InputAdornment>
                      ),
                      sx: { backgroundColor: "white" },
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    mt: 4,
                  }}
                >
                  <Button
                    onClick={() => router.back()}
                    variant="contained"
                    type="button"
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
                    // onClick={() => router.prefetch(ROUTES.result)}
                    type="submit"
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
            );
          }}
        </Formik>
      }
    </Box>
  );
};

export default CreateBuyerPerson;
