



import './screenImage.css'


export default function AppImages(props){

    let list=['https://1000logos.net/wp-content/uploads/2021/04/WhatsApp-logo.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEynCGDrFj3BQG1Aff7q4ARbWM0s7FK8jfng&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0QC9-GEgSu1BT97pbiq2VHUMQ-8NY8wzYFQ&usqp=CAU'];
    

    return (
        <div id="image-screen">
            
            <img id='imgEle' src={list[props.subMenuItemIndex]} alt='Error'></img>

        </div>
    )
}