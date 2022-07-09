// aulas/COMPLETAR_AULA(id), completa a aula com base no ID passado
// aulas/COMPLETAR_CURSO, completa todas as aulas
// aulas/RESETAR_CURSO, reseta todas as aulas completas

//Contantes
const COMPLETAR_AULA = 'COMPLETAR_AULA'
const COMPLETAR_CURSO = 'COMPLETAR_CURSO'
const RESETAR_CURSO = 'RESETAR_CURSO'

//Action Creators
export const completarAula = (id) => ({ type: COMPLETAR_AULA, payload: id })
export const completarCurso = () => ({ type: COMPLETAR_CURSO })
export const resetarCurso = () => ({ type: RESETAR_CURSO })

// State Initial
const initalState = [
  {
    id: 1,
    nome: 'Design',
    completa: true
  },
  {
    id: 2,
    nome: 'HTML',
    completa: false,
  },
  {
    id: 3,
    nome: 'CSS',
    completa: false,
  },
  {
    id: 4,
    nome: 'JavaScript',
    completa: false,
  },
]

//Função Reducer sem immer
const aulaReducer = (state = initalState, action) => {
  switch (action.type) {
    case COMPLETAR_AULA:
      return state.map((aula) => {
        if (action.payload === aula.id) {
          return {
            ...aula,
            completa: true
          }
        } else {
          return aula
        }
      })
    case COMPLETAR_CURSO:
      return state.map((aula) => {
        return {
          ...aula,
          completa: true
        }
      })
    case RESETAR_CURSO:
      return state.map((aula) => {
        return {
          ...aula,
          completa: false
        }
      })
    default:
      return state
  }
}

export default aulaReducer