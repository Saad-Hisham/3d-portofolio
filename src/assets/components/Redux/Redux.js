import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'state',
    initialState: {
        RotateState: false,
        roomPosition: window.innerWidth >= 647 ? [-2, -3, 2] : [-.8, -3, 2],
        sliderState: false,
        roomZoom: 70,
        pos: window.innerWidth >= 647 ? [-2, -3, 2] : [-.8, -3, 2],
        video: 0,
        light: 2,
    },

    reducers: {
        setRotateState: (state, action) => {
            state.RotateState = true
        },
        setRoomPos: (state, action) => {
            state.roomPosition = action.payload
            state.pos = action.payload


        },
        setRoomZoom: (state, action) => {
            state.roomZoom = action.payload;


        },
        adjustRoomPos: (state, action) => {
            let pos = state.pos[0] + action.payload[0];
            state.roomPosition = [pos, action.payload[1], state.roomPosition[2]]

        },
        worksPos: (state, action) => {
            let pos = 3.5 * action.payload - 2
            state.roomPosition = [pos, state.roomPosition[1], state.roomPosition[2]]


        },
        toggleSlider: (state, action) => {
            if (state.sliderState) {
                state.sliderState = false
            }
            else {
                state.sliderState = true
            }
        },
        changeVideo: (state, action) => {
            state.video = action.payload
        },
        adjustLight: (state, action) => {
            state.light = action.payload
        },
        contactPos: (state, action) => {
            let pos = 1.5 - 7 * action.payload
            state.roomPosition = [pos, state.roomPosition[1], state.roomPosition[2]]
        }
    }
});

export const { setRotateState, setRoomPos, toggleSlider, setRoomZoom, adjustRoomPos, worksPos, changeVideo, adjustLight, contactPos } = userSlice.actions;
export default userSlice.reducer;