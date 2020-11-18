export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      return { ...state, bands: [...state.bands, action.band] }
    default:
      return state;
  }
};

// export default function manageBand(state = {
//   bands: [],
// }, action) {
//   switch(action.type) {
//     case 'ADD_BAND':
//       return {bands: state.bands.concat(action.payload.name)}

//   default:
//   return state
//   }
// };
// { todos: state.todos.concat(action.payload.text) }