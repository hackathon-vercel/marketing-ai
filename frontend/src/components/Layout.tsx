import { useEffect } from "react";
import { Box, Container } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

// import Logo from "../../../public/logo.png";

// Types
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();

  useEffect(() => {}, [router.pathname]);

  const imgPath = /\/demoService|(\/$)/.test(router.pathname) ? "/img/bgilaptopgirl.jpeg" : "/img/radier.png";

  return (
    <>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundImage: `url(${imgPath})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "url(/img/radier.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.9,
            width: "100%",
          }}
        />
        <Container
          sx={{
            position: "relative",
            textAlign: "center",
            color: "white",
            maxWidth: { xs: "100%", sm: "90%", md: "80%", lg: "70%" },
            padding: 2,
          }}
        >
          <Box sx={{ mx: "auto", width: "fit-content" }}>
            <Image src={"/logo.png"} alt="Logo" width={100} height={100} />
          </Box>
          {children}
        </Container>
      </Box>
    </>
  );
}
