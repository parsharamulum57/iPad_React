




import './screenImage.css'


export default function ThemeImages(props){

    let list=['https://i.pinimg.com/736x/c4/00/d9/c400d99bc008bc1793663e1e49577577.jpg',
    'https://previews.123rf.com/images/jaffarali/jaffarali1508/jaffarali150800043/44150664-straight-forest-pathway-with-beautiful-sunrays-in-the-top-green-nature-and-summer-themes.jpg',
    'https://w0.peakpx.com/wallpaper/514/551/HD-wallpaper-d3-ball-black-ball-3d-beautiful-nice-galaxy-themes-colors-note.jpg'];
    

    return (
        <div id="image-screen">
            
            <img id='imgEle' src={list[props.subMenuItemIndex]} alt='Error'></img>

        </div>
    )
}