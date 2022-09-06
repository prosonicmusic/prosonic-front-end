let playerReducer = (state, action) => {
   switch (action.type) {
      case "SET_SONGS_ARRAY":
         return {
            ...state,
            products: action.data,
         };
      case "SET_CURRENT_SONG":
         return {
            ...state,
            currentSong: action.data,
            playing: true,
         };
      case "TOGGLE_PLAYING":
         return {
            ...state,
            playing: action.data,
         };
      default:
         return state;
   }
};

export default playerReducer;
