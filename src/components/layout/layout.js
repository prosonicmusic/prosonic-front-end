import Player from "../Player";
import Footer from "./footer";
import MainNavigation from "./main-navigation";

function Layout(props) {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
      <Player />
      <Footer />
    </>
  );
}

export default Layout;
