import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import DashboardNavbar from "@/components/dashboard-header";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [showDashboardNavbar, setShowDashboardNavbar] = useState(false);
  useEffect(() => {
    setShowDashboardNavbar(router.pathname === "/dashboard");
  }, [router.pathname]);
  return (
    <ChakraProvider>
      {showDashboardNavbar ? <DashboardNavbar /> : <Navbar />}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
