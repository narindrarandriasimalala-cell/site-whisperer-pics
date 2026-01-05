import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Decouvrir from "./pages/Decouvrir";
import Manifesto from "./pages/Manifesto";
import Blog from "./pages/Blog";
import Connexion from "./pages/Connexion";
import CommentCaMarcheEcole from "./pages/CommentCaMarcheEcole";
import CommentCaMarcheEtudiant from "./pages/CommentCaMarcheEtudiant";
import CommentCaMarcheEntreprise from "./pages/CommentCaMarcheEntreprise";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/decouvrir" element={<Decouvrir />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Blog />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/comment-ca-marche/ecole" element={<CommentCaMarcheEcole />} />
          <Route path="/comment-ca-marche/etudiant" element={<CommentCaMarcheEtudiant />} />
          <Route path="/comment-ca-marche/entreprise" element={<CommentCaMarcheEntreprise />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
