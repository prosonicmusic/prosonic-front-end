import Routes from "./routes/Routes";

// Context
import CartContextProvider from "./context/CartContextProvider";
import TrackContextProvider from "./context/Tracks/TrackContextProvider";
import FiveTracksContextProvider from "./context/Tracks/FiveTracksContextProvider";
import PackageContextProvider from "./context/PackageContextProvider";
import Player from "./components/player/Player";
import PlayerState from "./context/player/PlayerState";
import PremiumTracksContextProvider from "./context/Tracks/PremiumTracksContextProvider";

function App() {
   return (
      <TrackContextProvider>
         <FiveTracksContextProvider>
            <PremiumTracksContextProvider>
               <PackageContextProvider>
                  <CartContextProvider>
                     <PlayerState>
                        <Routes />
                        <Player />
                     </PlayerState>
                  </CartContextProvider>
               </PackageContextProvider>
            </PremiumTracksContextProvider>
         </FiveTracksContextProvider>
      </TrackContextProvider>
   );
}
export default App;
