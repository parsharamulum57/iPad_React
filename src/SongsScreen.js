





import './HomeScreen.css';

export default function SongsScreen(props){

    let list=['Ranga Sthalam','Bahubali','K.G.F'];
    
    let listItems=[];
    for(let i=0;i<3;i++)
    {
        if(i===props.subMenuItemIndex)
        {
            listItems.push(<li className='list-item active'> {list[i]}</li>);
        }
        else
        {
            listItems.push(<li className='list-item'> {list[i]}</li>);
        }
    }


    return (
        <div id="home-screen">
            <ul id="home-list">
               {listItems}
            </ul>

        </div>
    )
}