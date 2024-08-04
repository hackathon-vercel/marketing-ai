import { Box, Button, Container, Typography, List, ListItem, ListItemText, Checkbox, ListItemIcon } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import Logo from "../../../../public/logo.png";
import Link from "next/link";
import { useState } from "react";

const CreateBuyerPerson = () => {
  const theme = useTheme();
  const [checked, setChecked] = useState([0]);

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

  const items = [
    "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
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

          <List sx={{ width: "100%", maxWidth: "800px", margin: '0 auto' }}>
            {items.map((item, index) => (
              <ListItem
                key={index}
                onClick={handleToggle(index)}
                sx={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  margin: theme.spacing(2, 0),
                }}
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(index) !== -1}
                    tabIndex={-1}
                    disableRipple
                    sx={{
                      color: "#6A1B9A",
                      "&.Mui-checked": {
                        color: "#6A1B9A",
                      },
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={item}
                  sx={{
                    textDecoration: checked.indexOf(index) !== -1 ? "line-through" : "none",
                    color: "black",
                  }}
                />
              </ListItem>
            ))}
          </List>

          <Box sx={{ display: "flex", justifyContent: "center", width: "100%", maxWidth: "800px", mt: 4 }}>
            <Link href="../../createBuyerPerson" passHref>
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

            <Link href="../../createBuyerPerson/stepThree" passHref>
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
