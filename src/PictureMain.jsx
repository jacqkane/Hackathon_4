import { Link } from "react-router-dom";
import './PictureMain.scss'

export default function PictureMain(props) {


    return (

        <div className="picturemain">
            <img src={props.imgUrl} />
            <div>
                <p>First Name: <b>{props.authorFirstName}</b></p>
                <p>Last Name: <b>{props.authorLastName}</b></p>
            </div>
            <Link className="picturemain-link" to={'/detail/' + props.username}>See detail{'>>'}</Link>
        </div>
    )
}