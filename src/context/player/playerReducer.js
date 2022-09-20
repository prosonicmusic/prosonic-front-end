let playerReducer = (state, action) => {
   switch (action.type) {
      case "SET_SONGS_ARRAY":
         return {
            ...state,
            products: action.payload,
         };
      case "SET_CURRENT_SONG":
         return {
            ...state,
            currentSong: action.payload,
            playing: true,
         };
      case "TOGGLE_PLAYING":
         return {
            ...state,
            playing: action.payload,
         };
      case "CLOSE":
         return {
            ...state,
            close: action.payload,
         };
      case "OPEN":
         return {
            ...state,
            open: true,
         };
      default:
         return state;
   }
};

export default playerReducer;
