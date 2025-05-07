import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "../Layout";
import Loader from "../components/Loader";
import { Toast } from "../components/Toast";
import Services from "../pages/Services";
import AnimatedPage from "../components/AnimationPage/AnimatedPage";
import Accueil from "../pages/Acceuil";
import Contact from "../pages/Contact";
import ServiceDetail from "../pages/Services/ServiceDetail";

const AppRouter = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  return (
    <>
      {loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ) : (
        <>
          <Toast />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Layout />}>
                <Route
                  index
                  element={
                    <AnimatedPage>
                      <Accueil />
                    </AnimatedPage>
                  }
                />
                <Route path="service">
                  <Route
                    index
                    element={
                      <AnimatedPage>
                        <Services />
                      </AnimatedPage>
                    }
                  />
                  <Route
                    path=":categoryId/:serviceId"
                    element={
                      <AnimatedPage>
                        <ServiceDetail />
                      </AnimatedPage>
                    }
                  />
                </Route>
                <Route
                  path="contact"
                  element={
                    <AnimatedPage>
                      <Contact />
                    </AnimatedPage>
                  }
                />
              </Route>
            </Routes>
          </AnimatePresence>
        </>
      )}
    </>
  );
};

export default AppRouter;
