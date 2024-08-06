import { useEffect, useState } from "react";
import { Box, Button, Container, FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import { useBuyerContext } from "@/context/BuyerContext";
import { useRouter } from "next/router";
import { ROUTES } from "@/constants";
import { HackathonApi } from "@/lib/hackathonAPI";
import toast from "react-hot-toast";
import httpClient from "@/lib/httpClient";

// Types
import type { CompanyProps } from "@/types/formBuyer";
import type { GetStaticProps, InferGetStaticPropsType } from "next/types";

const validationSchema = Yup.object({
  companyName: Yup.string().required("El nombre de la empresa es requerido"),
  companyDescription: Yup.string().required("La descripción de la empresa es requerida"),
  dataSearch: Yup.string().required("Selecciona un tipo de dato"),
});

type Repo = {
  data: string[];
};

export const getStaticProps: GetStaticProps<{ data: Repo }> = async (context) => {
  const {
    data: { data },
  } = await httpClient.get({ url: "/contents/list-data-allowed-of-buyer-person" });
  return { props: { data } };
};

const BuyerPersonaForm = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const theme = useTheme();
  const defaultValues: CompanyProps = {
    companyName: "",
    companyDescription: "",
    dataSearch: "",
  };

  useEffect(() => {
    localStorage.setItem("keywords", "");
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
            [theme.breakpoints.up("md")]: {
              fontSize: "3rem",
            },
            [theme.breakpoints.up("lg")]: {
              fontSize: "4rem",
            },
          }}
        >
          Primer Paso
        </Typography>
        <Typography
          variant="h5"
          component="h1"
          gutterBottom
          sx={{
            [theme.breakpoints.down("md")]: {
              fontSize: "1.5rem",
            },
            [theme.breakpoints.up("lg")]: {
              fontSize: "2rem",
            },
          }}
        >
          Complete el siguiente Formulario
        </Typography>
        <Formik
          initialValues={defaultValues}
          validationSchema={validationSchema}
          onSubmit={async (values, helpers) => {
            let form: CompanyProps = {
              ...values,
              dataSearch: [`${values.dataSearch}`],
            };
            try {
              let res = await HackathonApi.buyers(form);
              if (res.status) {
                localStorage.setItem("keywords", JSON.stringify(res.data));
                helpers.resetForm();
                router.push(ROUTES.createBuyer.second);
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
          {({ errors, touched, handleSubmit, handleChange, values, handleBlur }) => {
            return (
              <Form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  maxWidth: "400px",
                }}
                onSubmit={handleSubmit}
              >
                <Field
                  as={TextField}
                  name="companyName"
                  label="Nombre de la Empresa"
                  variant="outlined"
                  fullWidth
                  value={values.companyName}
                  onChange={handleChange}
                  margin="normal"
                  error={touched.companyName && Boolean(errors.companyName)}
                  helperText={touched.companyName && errors.companyName}
                  InputProps={{
                    sx: {
                      backgroundColor: "white",
                    },
                  }}
                  InputLabelProps={{
                    sx: {
                      backgroundColor: "white",
                      borderRadius: "5px",
                      px: "5px",
                      "&.Mui-focused": {
                        borderRadius: "5px",
                      },
                    },
                  }}
                />
                <Field
                  as={TextField}
                  name="companyDescription"
                  label="Descripción de la empresa"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  onChange={handleChange}
                  value={values.companyDescription}
                  error={touched.companyDescription && Boolean(errors.companyDescription)}
                  helperText={touched.companyDescription && errors.companyDescription}
                  InputProps={{
                    sx: {
                      backgroundColor: "white",
                    },
                  }}
                  InputLabelProps={{
                    sx: {
                      backgroundColor: "white",
                      borderRadius: "5px",
                      px: "5px",
                      "&.Mui-focused": {
                        color: "#0f0e2a",
                      },
                    },
                  }}
                />
                <FormControl fullWidth sx={{ mt: 2 }} error={touched.dataSearch && Boolean(errors.dataSearch)}>
                  <InputLabel
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "5px",
                      px: "5px",
                      "&.Mui-focused": {
                        color: "#0f0e2a",
                      },
                    }}
                    id="dataSearch-label"
                  >
                    Data de la buyer persona
                  </InputLabel>

                  <Select onBlur={handleBlur} name="dataSearch" id="dataSearch" value={values.dataSearch} sx={{ textAlign: "left", backgroundColor: "white", color: "#0f0e2a" }} label="Data de la buyer persona" fullWidth variant="outlined" onChange={handleChange}>
                    {Array.isArray(data) &&
                      data.length > 0 &&
                      data.map((item, i) => {
                        return (
                          <MenuItem value={item} key={`${item}-${i}`}>
                            {item}
                          </MenuItem>
                        );
                      })}
                  </Select>
                  {touched.dataSearch && <FormHelperText>{errors.dataSearch}</FormHelperText>}
                </FormControl>

                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    marginTop: theme.spacing(4),
                    backgroundColor: "#17153B",
                    borderRadius: "40px",
                    padding: theme.spacing(1.5, 6),
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
              </Form>
            );
          }}
        </Formik>
      </Box>
    </>
  );
};

export default BuyerPersonaForm;
