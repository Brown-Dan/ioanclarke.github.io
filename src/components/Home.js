const Home = ({firstTime}) => {

    const nameBoxStyle = {
        backgroundColor: "rgb(48, 2, 107)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cssFloat: "left",
        transitionProperty: "width",
        transitionDelay: "0s",
        transitionTimingFunction: "ease-out",
        transitionDuration: "1s"
    }

    if (firstTime) {
        return <div id="nameBox">home</div> 
    } else {
        return <div>home</div>
    }
}
export default Home 