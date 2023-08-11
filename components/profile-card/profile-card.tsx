import Image from "next/image";
import "./profile-card.css";
import { socialMediaNetworks } from "./social-media-networks";
import { SocialMediaPanel } from "@/components/social-media-panel/social-media-panel";

export default function Profile(props: any) {
  return (
    <div className="card">
      <Image
        className="card__image"
        src="/profile.png"
        alt="profile picture"
        width={180}
        height={180}
      />
      <h1>{props.userName}</h1>
      <SocialMediaPanel socialMediaNetworks={socialMediaNetworks} />
    </div>
  );
}
