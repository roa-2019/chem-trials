const initialState = {
  chemicals: ['Flourish', 'Stability']
}

const chemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CHEMICAL':
      return {
        chemicals: [...state.chemicals, action.chemical]
      }
  }
}