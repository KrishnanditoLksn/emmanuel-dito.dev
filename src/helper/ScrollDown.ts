export const swipeDown = (top: number) => {
    return (
        window.scrollTo({
            top: top,
            behavior: "smooth"
        })
    )
}