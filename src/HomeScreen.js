

import './HomeScreen.css';

export default function HomeScreen(props){

    let list=['Games','Music','Themes','Apps'];
    
    let listItems=[];
    for(let i=0;i<4;i++)
    {
        if(i===props.homeMenuItemIndex)
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