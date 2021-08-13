import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducers: {
        taskManager: TaskManager
    },
})

