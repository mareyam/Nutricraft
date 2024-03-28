import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import DashboardNavbar from "@/components/Xdashboard-header";
import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/index.css";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const router = useRouter();
  const [showDashboardNavbar, setShowDashboardNavbar] = useState(false);
  useEffect(() => {
    setShowDashboardNavbar(router.pathname === "/dashboard");
  }, [router.pathname]);
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Box bg="gray.100" border="2px solid red" px="12" py="4" w="full">
          {showDashboardNavbar ? <DashboardNavbar /> : <Navbar />}
          <Component {...pageProps} />
        </Box>
      </QueryClientProvider>
    </ChakraProvider>
  );
}
