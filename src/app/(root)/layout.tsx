import { ChildProps } from "../../../types";
import Footer from "./_components/footer";
import Navbar from "./_components/navbar";
function Layout({ children }: ChildProps) {
  return (
    <main>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </main>
  );
}

export default Layout;
