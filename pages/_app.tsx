import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import DashboardNavbar from "@/components/Xdashboard-header";
import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/index.css";
import Layout from "./layout";
import { extendTheme } from "@chakra-ui/react";
// import { caveat } from "@fontsource/caveat";

const theme = extendTheme({
  fonts: {
    body: "caveat, sans-serif", // Use Roboto font for body text
    heading: "caveat, sans-serif", // Use Roboto font for headings
    "clash-display": "Clash Display, sans-serif",
    roboto: "Roboto, sans-serif", // Use Roboto font for body text
    caveat: "caveat, sans-serif",
    "Patrick Hand": "Patrick Hand, cursive",
    Dosis: "Dosis, cursive",
  },
});
export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const router = useRouter();
  const [showDashboardNavbar, setShowDashboardNavbar] = useState(false);
  useEffect(() => {
    setShowDashboardNavbar(router.pathname === "/dashboard");
  }, [router.pathname]);
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          {showDashboardNavbar ? <DashboardNavbar /> : <Navbar />}
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </ChakraProvider>
  );
}
