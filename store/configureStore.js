import aluno from './aluno.js'
import aulas from './aulas.js'

//Combine Reducers
const reducers = Redux.combineReducers({aluno, aulas})

//Create Store
const store = Redux.createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
