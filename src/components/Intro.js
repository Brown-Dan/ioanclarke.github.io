const Intro = () => {
    const nameBoxStyle = {
        backgroundColor: "rgb(48, 2, 107)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // transitionProperty: "width",
        // transitionDelay: "0s",
        // transitionTimingFunction: "ease-out",
        // transitionDuration: "1s",
        fontSize: "4em"
    }

    return (
        <div id="nameBox" className="contentBox" style={{display: 'flex', justifyContent: 'center'}}>
            <div style={nameBoxStyle} className="typewriter" ><h1>Ioan Clarke.</h1></div>
        </div>
    )
}

export default Intro