
import './LockScreen.css';

export default function LockScreen(props) {


    return (
        <div id="lock-screen">
            <img className="lock-image"
                src="https://t4.ftcdn.net/jpg/02/97/49/81/240_F_297498134_ykcxCaV98NQTW009QTf6xQDFGiUOqXye.jpg"
                
                alt="Lock-Screen"
            />
            <p className='msg'>Please enter "Ok" button to unlock</p>
        </div>
    )
}