const Home = ({firstTime}) => {
    if (firstTime) {
        return <div id="nameBox">home</div> 
    } else {
        return <div>home</div> 

    }
}
export default Home 