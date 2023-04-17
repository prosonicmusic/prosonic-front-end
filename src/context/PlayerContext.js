import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

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
  // states
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioPlayer = useRef(null);
  const progressBar = useRef(); // reference our progress bar
  const animationRef = useRef(); // reference the animation

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  useEffect(() => {
    if (currentTime == duration) {
      togglePlayPause();
      timeTravel(0);
    }
  }, [currentTime]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    dispatch({ type: "PLAY_PAUSE", payload: !audio?.playing });

    if (!audio?.playing) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  const timeTravel = (newTime) => {
    progressBar.current.value = newTime;
    changeRange();
  };

  // const backThirty = () => {
  //   progressBar.current.value = Number(progressBar.current.value - 30);
  //   changeRange();
  // };

  // const forwardThirty = () => {
  //   progressBar.current.value = Number(progressBar.current.value + 30);
  //   changeRange();
  // };

  return (
    <PlayerContext.Provider
      value={{ audio, audioPlayer, progressBar, changeRange, togglePlayPause }}
    >
      <PlayerContextDispatcher.Provider value={dispatch}>
        {children}
      </PlayerContextDispatcher.Provider>
    </PlayerContext.Provider>
  );
}

export const usePlayer = () => useContext(PlayerContext);
export const usePlayerActions = () => useContext(PlayerContextDispatcher);
