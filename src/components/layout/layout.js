import dynamic from "next/dynamic";

import Player from "../Player";
import Footer from "./footer";
// import MainNavigation from "./main-navigation";

const MainNavigation = dynamic(() => import("./main-navigation"), {
  ssr: false,
});

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
