



import './screenImage.css'


export default function GameImages(props){

    let list=['https://wallpapercave.com/dwp1x/wp2409705.jpg','https://wallpapercave.com/dwp1x/wp7936592.jpg','https://cdn.pixabay.com/photo/2020/08/25/11/10/chess-5516446__340.jpg'];
    

    return (
        <div id="image-screen">
            
            <img id='imgEle' src={list[props.subMenuItemIndex]} alt='Error'></img>

        </div>
    )
}