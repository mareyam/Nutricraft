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
        <Layout>
          {showDashboardNavbar ? <DashboardNavbar /> : <Navbar />}
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </ChakraProvider>
  );
}
