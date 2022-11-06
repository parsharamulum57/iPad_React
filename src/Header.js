
import './Header.css';

function Header() {
    let currentDate = new Date();
    let d = currentDate.toDateString();
    let t = currentDate.getHours() + ":" + currentDate.getMinutes();

    return (
        <div className="header-cont">
            <div><time>{t}</time></div>
            <div><span>{d}</span></div>
            <div><img
                id="battery-img"
                src="https://cdn-icons-png.flaticon.com/128/664/664882.png"
                alt="battery"
            ></img>
            </div>
        </div>
    );
}

export default Header;