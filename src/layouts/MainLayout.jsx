import Navbar from "../components/common/Navbar";
import CookieBanner from "../components/common/CookieBanner";

// Wraps the page with the global navigation shell and shared overlays.
function MainLayout({ children }) {
  return (
    <div className="app-shell">
      <Navbar />
      <main>{children}</main>
      <CookieBanner />
    </div>
  );
}

export default MainLayout;
