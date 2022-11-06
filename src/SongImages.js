




import './screenImage.css'


export default function SongImages(props){

    let list=['https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/3d/04/91/3d0491a0-d303-4be8-d86a-c58e55425aa5/8903431668936_cover.jpg/600x600bf-60.jpg',
    'https://www.telugu360.com/wp-content/uploads/2015/07/prabhas-1200x1200.jpg',
    'https://i.pinimg.com/736x/b6/66/b4/b666b48329c35ae32eeb1a2247ec875e.jpg'];
    

    return (
        <div id="image-screen">
            
            <img id='imgEle' src={list[props.subMenuItemIndex]} alt='Error'></img>

        </div>
    )
}