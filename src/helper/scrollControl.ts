const handle = (event: any) => {
    event.preventDefault()
}

const options: AddEventListenerOptions = {
    passive: false
}

export const disableScroll = () => {
    document.addEventListener("touchmove", handle, options)
    document.addEventListener("mousewheel", handle, options)
}

export const enableScroll = () => {
    document.removeEventListener("touchmove", handle, options)
    document.removeEventListener("mousewheel", handle, options)
}
