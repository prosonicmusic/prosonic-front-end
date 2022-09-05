
import Routes from "./routes/Routes"

// Context
import CartContextProvider from "./context/CartContextProvider";
import TrackContextProvider from "./context/TrackContextProvider";
import PackageContextProvider from "./context/PackageContextProvider";
import Player from "./components/player/Player";

function App() {
   return (
      <TrackContextProvider>
         <PackageContextProvider>
            <CartContextProvider>
               <Routes />
               <Player />
            </CartContextProvider>
         </PackageContextProvider>
      </TrackContextProvider>
   );
}
export default App;
