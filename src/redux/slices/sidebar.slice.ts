import { createSlice } from '@reduxjs/toolkit'
import { MENU } from '../../constants/settings';

export interface selectedMenu {
    name: string;
    path: string;
}

export const SidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        open: <boolean>false,
        selectedMenu: <selectedMenu | null>null
    },
    reducers: {
        setOpen: (state, action) => {
            state.open = action.payload
            return state;
        },
        setPath: (state, action) => {
            const item = MENU.find(a => a.path === action.payload);
            state.selectedMenu = {
                name: item?.name || '',
                path: item?.path || ''
            };
            return state;
        },
    }
})

export const { setOpen, setPath } = SidebarSlice.actions;

export default SidebarSlice.reducer;