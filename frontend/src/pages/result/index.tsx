import { Box, Button, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import Logo from "../../../public/logo.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

import { ROUTES } from "@/constants";
import { isMyDocument } from "@/utils/missingProperties";
import { useBuyerContext } from "@/context/BuyerContext";

//types
import type { ResultContent } from "@/types/formBuyer";

const CreateBuyerPerson = () => {
  const router = useRouter();
  const { setKeywords } = useBuyerContext();
  const theme = useTheme();
  const [content, setContent] = useState<ResultContent>({
    headline: "",
    description: "",
  });

  useEffect(() => {
    const data = localStorage.getItem("result");
    if (data) {
      const parsed = JSON.parse(data);
      if (isMyDocument<ResultContent>(parsed, { description: "", headline: "" })) {
        setContent(parsed);
        setKeywords([]);
      }
    } else {
      toast.error("Crea el contenido primero");
      router.push(ROUTES.createBuyer.third);
    }
  }, [setContent, router, setKeywords]);

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
            p: 2.5,
          }}
        >
          {content.headline}
        </Typography>

        <Typography variant="h6" sx={{ color: "white", mt: 1, mb: 1 }} align="center">
          Descripción
        </Typography>
        <Typography
          variant="body1"
          sx={{
            backgroundColor: "#D9D9D9",
            color: "black",
            borderBottomLeftRadius: "15px",
            borderBottomRightRadius: "15px",
            p: 2.5,
          }}
        >
          {content.description}
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
        <Button
          variant="contained"
          type="button"
          onClick={() => {
            router.push(ROUTES.index);
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
      </Box>
    </Box>
  );
};

export default CreateBuyerPerson;
