import Image from 'next/image'
import './social-media-button.css'

export function SocialMediaButton({ socialMedia }: any) {
    return (
        <a href={socialMedia.href} target="_blank" rel="noreferrer">
            <Image
                className="social-icon"
                src={socialMedia.icon}
                alt={socialMedia.mediaName}
                width={50}
                height={50}
            />
        </a>
    )
}