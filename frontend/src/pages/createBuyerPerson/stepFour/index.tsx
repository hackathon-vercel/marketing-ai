import {
    Box,
    Button,
    Container,
    Typography,
    TextField,
    FormControl,
    MenuItem,
    Select,
    OutlinedInput,
    InputAdornment,
  } from "@mui/material";
  import { useTheme } from "@mui/material/styles";
  import Image from "next/image";
  import ArrowRightIcon from "@mui/icons-material/ArrowRight";
  import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
  import Logo from "../../../../public/logo.png";
  import Link from "next/link";
  import { useState } from "react";
  import PodcastsIcon from '@mui/icons-material/Podcasts';
  import TonalityIcon from '@mui/icons-material/Tonality';
  import TouchAppIcon from '@mui/icons-material/TouchApp';
  
  const CreateBuyerPerson = () => {
    const theme = useTheme();
    const [tone, setTone] = useState("");
  
    const iconColor = "#17153B"; 
  
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
              component="h1"
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
  
            <Box
              sx={{
                mt: theme.spacing(2),
                width: "100%",
                maxWidth: "500px",
                padding: theme.spacing(1),
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
  
              <Box sx={{ mb: 2 }}>
                <Typography variant="h6" align="left">
                  Tipo de tono
                </Typography>
                <Typography variant="body2" gutterBottom align="left">
                  Formal, Informal, Divertido...
                </Typography>
                <FormControl fullWidth variant="outlined">
                  <Select
                    value={tone}
                    onChange={(e) => setTone(e.target.value)}
                    label="Tipo de tono"
                    
                    input={

                      <OutlinedInput
                        startAdornment={
                          <InputAdornment position="start">
                            <TonalityIcon sx={{ color: iconColor }} />
                          </InputAdornment>
                        }
                        sx={{ backgroundColor: "white" }}
                      />
                    }
                  >
                    <MenuItem value=" Tipo de tono para el anuncio" >
                      Tipo de tono para el anuncio
                    </MenuItem>
                    <MenuItem value="formal">Formal</MenuItem>
                    <MenuItem value="informal">Informal</MenuItem>
                    <MenuItem value="divertido">Divertido</MenuItem>
                  </Select>
                </FormControl>
              </Box>
  
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
            </Box>
  
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                mt: 4,
              }}
            >
              <Link href="../../createBuyerPerson/stepThree" passHref>
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
  
              <Link href="../../result" passHref>
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
  