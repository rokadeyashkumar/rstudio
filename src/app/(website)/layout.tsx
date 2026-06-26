import Navbar from "../../components/layout/navbar";
import Footer from "../../components/layout/footer";
import { NavbarThemeProvider } from "@/context/NavbarThemeContext";

export default function WebsiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <NavbarThemeProvider>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </NavbarThemeProvider>
  );
}