import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./ContactsSlice";

export const store = configureStore({
    reducer:{
        contacts: contactReducer,
    }
})