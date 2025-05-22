
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Lookbook from "./pages/Lookbook";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ImageOpen from "./components/ImageOpen";
import { useEffect } from "react";
import whatsappp from "./assets/WhatsAppIcon.png"

const queryClient = new QueryClient();
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => (
        
  <QueryClientProvider client={queryClient}>
  <TooltipProvider>
    <Toaster />
    <Sonner />
   {/* <a href="https://wa.me/2347061716813">
     <img src={whatsappp} alt="" style={{height:"70px", position:"fixed", bottom:"70px", right:"5%", zIndex:200,}}/>
   </a> */}

<a
  href="https://wa.me/2348177615823?text=Hi%2C%20I%20saw%20this%20clothing%20design%20and%20I'm%20really%20interested.%20Can%20you%20tell%20me%20more%20about%20it%3F"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-[70px] right-[5%] z-[200] w-[70px] h-[70px] flex items-center justify-center bg-black rounded-[30%] animate-bounce"
>
  <img
    src={whatsappp}
    alt="WhatsApp Chat"
    className="h-[50px] bg-black rounded-[30%]"
  />
</a>


    <BrowserRouter>
      <ScrollToTop /> {/* Move it here */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/lookbook" element={<Lookbook />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ImageOpen/:id" element={<ImageOpen />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
</QueryClientProvider>

);

export default App;
