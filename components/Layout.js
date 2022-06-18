import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="content max-w-full overflow-hidden bg-slate-200">
      <Navbar />
      { children }
    </div>
  );
}

export default Layout;