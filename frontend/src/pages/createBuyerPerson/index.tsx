import { Box, Button, Container, TextField, Typography } from "@mui/material";
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

const validationSchema = Yup.object({
  companyName: Yup.string().required("El nombre de la empresa es requerido"),
  companyDescription: Yup.string().required("La descripción de la empresa es requerida"),
});

const BuyerPersonaForm = () => {
  const router = useRouter();
  const theme = useTheme();
  const { company, setCompany } = useBuyerContext();

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
          initialValues={company}
          validationSchema={validationSchema}
          onSubmit={async (values, helpers) => {
            try {
              let res = await HackathonApi.buyers(values);
              if (res.status) {
                toast.success("Nos pondremos en contacto contigo pronto!");
                helpers.resetForm();
                router.push(ROUTES.createBuyer.second);
              } else {
                toast.error("Ocurrió un error, vuelva a intentarlo");
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
          {({ errors, touched, handleSubmit }) => (
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
                    "&.Mui-focused": {
                      backgroundColor: "white",
                      color: "#0f0e2a",
                      borderRadius: "5px",
                      padding: "5px",
                    },
                  },
                }}
              />
              <Field
                as={TextField}
                name="companyDescription"
                label="Descripción de la Empresa"
                variant="outlined"
                fullWidth
                margin="normal"
                error={touched.companyDescription && Boolean(errors.companyDescription)}
                helperText={touched.companyDescription && errors.companyDescription}
                InputProps={{
                  sx: {
                    backgroundColor: "white",
                  },
                }}
                InputLabelProps={{
                  sx: {
                    "&.Mui-focused": {
                      backgroundColor: "white",
                      color: "#0f0e2a",
                      borderRadius: "5px",
                      padding: "5px",
                    },
                  },
                }}
              />

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
          )}
        </Formik>
      </Box>
    </>
  );
};

export default BuyerPersonaForm;
