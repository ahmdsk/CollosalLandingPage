import { createContext } from "react";

export const initialState = {
    isOpen: false
}

export const AppContext = createContext({
    isOpen: false
})