import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import { ThemeProvider } from "./context/ThemeContext";

const Index = lazy(() => import("./pages/Index"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Formations = lazy(() => import("./pages/Formations"));
const DetailFormation = lazy(() => import("./pages/DetailFormation"));
const Equipe = lazy(() => import("./pages/Equipe"));

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Suspense fallback={<Loader />}>
          <Routes>
            {/* <Route path="/" element={<Layout />}  > */}
              <Route path="/" element={<Index />} />
              <Route path="projects" element={<Portfolio />} />
              <Route path="formations" element={<Formations />} />
              <Route path="formations/details/:id" element={<DetailFormation />} />
              <Route path="equipes" element={<Equipe />} />
            {/* </Route> */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </ThemeProvider>
);

export default App;
