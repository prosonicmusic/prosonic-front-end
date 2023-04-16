import React, { createContext, useContext, useReducer, useRef } from "react";

const PlayerContext = createContext();
const PlayerContextDispatcher = createContext();

const initialState = {
  currentSong: null,
  loading: true,
  error: null,
  playing: false,
  open: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CURRENT_SONG_URL":
      return { error: null, loading: false, currentSong: action.payload };
    case "PLAY_PAUSE":
      return { ...state, playing: action.payload };
    case "OPEN":
      return { ...state, open: true };
    case "CLOSE":
      return { open: false, playing: false, currentSong: null, error: null, loading: false };
    default:
      return { ...state };
  }
};

export default function PlayerProvider({ children }) {
  const [audio, dispatch] = useReducer(reducer, initialState);
  const audioRef = useRef(null);

  return (
    <PlayerContext.Provider value={{audio, audioRef }}>
      <PlayerContextDispatcher.Provider value={dispatch}>
        {children}
      </PlayerContextDispatcher.Provider>
    </PlayerContext.Provider>
  );
}

export const usePlayer = () => useContext(PlayerContext);
export const usePlayerActions = () => useContext(PlayerContextDispatcher);
