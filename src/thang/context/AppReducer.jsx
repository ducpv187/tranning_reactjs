import React, { useReducer } from 'react'

function reducer(state, action) {
    // const { type, payload } = action;
    switch (action.type) {
        case 'tang_count_ho_cai':
            return { ...state, count: state.count + 1 }
        case 'xin_chao':
            return 123123123123

        // return sẽ được hiểu là : setState(return) 
        case 'tang_count_theo_payload':
            return { ...state, count: state.count + action.payload }
        default:
            throw new Error();
    }
}

const initialCount = { data: [], count: 1, log: () => console.log('hihi') };
export default function AppReducer() {
    // const [state, setState] = useState({ data: [], count })
    const [state, dispatch] = useReducer(reducer, initialCount);
    console.log(state)
    // initialCount = gia tri khoi tao ban dau
    // reducer: la function dinh nghia tren 
    const handleClick = () => {
        dispatch({ type: 'tang_count_ho_cai', payload: 'hihi' })
    }

    function tangCountTheoPayload() {
        dispatch({ type: 'tang_count_theo_payload', payload: 5 })
    }

    function resetState() {
        dispatch({ type: 'xin_chao' })
    }
    return (
        <div><h1>AppReducer</h1>
            <h2 onClick={resetState}>Reset state thanh 123123213</h2>
            <button onClick={handleClick} > Tang so thu tu </button>
            <br />
            <button onClick={tangCountTheoPayload} >tangCountTheoPayload</button>
            <br />
            <div>count: {state?.count}</div>

        </div>

    )
}
