import Routes from "./routes/Routes";

// Context
import CartContextProvider from "./context/CartContextProvider";
import TrackContextProvider from "./context/TrackContextProvider";
import PackageContextProvider from "./context/PackageContextProvider";
import Player from "./components/player/Player";
import PlayerState from "./context/player/PlayerState";

function App() {
   return (
      <TrackContextProvider>
         <PackageContextProvider>
            <CartContextProvider>
               <PlayerState>
                  <Routes />
                  <Player />
               </PlayerState>
            </CartContextProvider>
         </PackageContextProvider>
      </TrackContextProvider>
   );
}
export default App;
