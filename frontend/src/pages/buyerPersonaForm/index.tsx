import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Logo from "../../../public/logo.png";

const validationSchema = Yup.object({
  nombreEmpresa: Yup.string().required("El nombre de la empresa es requerido"),
  descripcionEmpresa: Yup.string().required("La descripción de la empresa es requerida"),
});

const BuyerPersonaForm = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundImage: "url(/img/radier.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container
        sx={{
          position: "relative",
          textAlign: "center",
          color: "white",
          [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(2), 
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: theme.spacing(-3),
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
            gutterBottom
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
            initialValues={{ nombreEmpresa: "", descripcionEmpresa: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  maxWidth: "400px",
                }}
              >
                <Field
                  as={TextField}
                  name="nombreEmpresa"
                  label="Nombre de la Empresa"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={touched.nombreEmpresa && Boolean(errors.nombreEmpresa)}
                  helperText={touched.nombreEmpresa && errors.nombreEmpresa}
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
                  name="descripcionEmpresa"
                  label="Descripción de la Empresa"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={touched.descripcionEmpresa && Boolean(errors.descripcionEmpresa)}
                  helperText={touched.descripcionEmpresa && errors.descripcionEmpresa}
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
      </Container>
    </Box>
  );
};

export default BuyerPersonaForm;
