import React from "react"
import { render } from "react-dom"
import { App } from "./App"
import { Global } from "@emotion/react"
import emotionReset from "emotion-reset"
import * as serviceWorkerRegistration from "./serviceWorkerRegistration"
import reportWebVitals from "./reportWebVitals"
import { QueryClient, QueryClientProvider } from "react-query"
import { Provider } from "react-redux"
import { store } from "./store"

const queryClient = new QueryClient()


const container = document.getElementById("root")
render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <Global styles={emotionReset} />
                <App />
            </Provider>
        </QueryClientProvider>
    </React.StrictMode>
    , container
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
