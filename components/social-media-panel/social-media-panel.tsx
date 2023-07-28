import './social-media-panel.css'
import { SocialMediaButton } from '../social-media-button/social-media-button'

export function SocialMediaPanel({ socialMediaNetworks }: any) {
    return (
        <div className="flex-container">
            {socialMediaNetworks.map((sm: any) => {
                return <SocialMediaButton socialMedia={sm} />
            })}
        </div>
    )
}