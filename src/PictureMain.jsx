import { Link } from "react-router-dom";
import './PictureMain.scss'
import Context from "./Context";
import { useContext, useState } from "react";


export default function PictureMain(props) {
  const [hovered, setHovered] = useState(false);
  

  const { state: { barHeight, barWidth }, dispatch } = useContext(Context);
  return (
    <div
      className="picturemain"
      style={{'--barWidthstyle': barWidth +'px'}}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={props.imgUrl} alt="User's Photo" />
      <div className={`info-overlay${hovered ? ' visible' : ''}`}>
        <p>Author: <b>{props.authorName}</b></p>
        <p>Likes: <b>{props.authorLikes}</b></p>
      </div>
      <Link className={`picturemain-link${hovered ? ' visible' : ''}`} to={`/detail/${props.username}`}>
        See detail about author
      </Link>
    </div>
  );
}
