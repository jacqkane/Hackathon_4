import { Link } from "react-router-dom";
import './PictureMain.scss'

export default function PictureMain(props) {


    return (

        <div className="picturemain">
            <img src={props.imgUrl} />
            <div>
                <p>{props.authorFirstName}</p>
                <p>{props.authorLastName}</p>
            </div>
            <Link to={'/detail/' + props.username}>Author's detail</Link>
        </div>
    )
}