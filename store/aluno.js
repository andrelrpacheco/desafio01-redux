// Constantes
const INCREMENTAR_TEMPO = 'INCREMENTAR_TEMPO'
const REDUZIR_TEMPO = 'REDUZIR_TEMPO'
const MODIFICAR_EMAIL = 'MODIFICAR_EMAIL'

// Action Creators
export const incrementarTempo = () => ({ type: INCREMENTAR_TEMPO })
export const reduzirTempo = () => ({ type: REDUZIR_TEMPO })
export const modificarEmail = (email) => ({
	type: MODIFICAR_EMAIL,
	payload: email
})

// State initial
const initalState = {
	nome: 'André Luiz',
	email: 'andre@teste.com',
	diasRestantes: 120
}

// Função Reducer
const alunoReducer = (state = initalState, action) => {
	switch (action.type) {
		case INCREMENTAR_TEMPO:
			return { ...state, diasRestantes: state.diasRestantes + 1 }
		case REDUZIR_TEMPO:
			return { ...state, diasRestantes: state.diasRestantes - 1 }
		case MODIFICAR_EMAIL:
			return { ...state, email: action.payload }
		default:
			return state
	}
}

export default alunoReducer
