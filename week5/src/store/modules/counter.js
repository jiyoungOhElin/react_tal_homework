// src/store/modules/counter.js

import { createAction, handleActions } from 'redux-actions';

// 액션
// 모듈이름을 앞에 붙여줌으로써 액션명 중복방지
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';
const CHANGE_COLOR = 'counter/CHANGE_COLOR';
const ADD_COLOR_BOX = 'counter/ADD_COLOR_BOX';

// 액션생성함수
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const changeColor = createAction(CHANGE_COLOR, color=>color);
export const addColorBox = createAction(ADD_COLOR_BOX, list=>list);

// 초기 상태값
const initialState = {
    number: 0,
    color:'#bfcd7e',
    list:[
        {   
            id:0,
            color:'#bfcd7e',
            opacity:1
        }
    ]
};

// 리듀서
export default handleActions(
    {
        [INCREMENT]: (state, action) => ({
            ...state,
            number: state.number + 1
        }),
        [DECREMENT]: (state, action) => ({
            ...state,
            number: state.number - 1
        }),
        [CHANGE_COLOR]: (state, action) => ({
            ...state,
            color: action.payload
        }),
        [ADD_COLOR_BOX]: (state, action) => ({
            ...state,
            color: action.payload.color,
            list: state.list.concat(action.payload)
        })
    },
    initialState
);