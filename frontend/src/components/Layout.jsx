import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="page-content">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
