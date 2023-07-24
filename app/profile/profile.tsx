
import Image from 'next/image'
import "./profile.css"

export default function Profile(props:any) {
    return (
      <div className="card">
        <Image
          className="card__image"
          src="/profile.png"
          alt="profile picture"
          width={180}
          height={180}
        />
        <p className="card__name">{props.userName}</p>
        <button className="btn draw-border">Message</button>
      </div>
    )
  }
  

