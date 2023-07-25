import Image from 'next/image'
import './socialpanel.css'

export function SocialPanel(props:any){
    return (
        <div className="flex-container">
            <a href={props.socialNetworkMap['discord']} target="_blank" rel="noreferrer">
                <Image
                    className="social-icon"
                    src="/social/icons8-discord.svg"
                    alt="discord"
                    width={50}
                    height={50}
                />
            </a>
            <a href={props.socialNetworkMap['github']} target="_blank" rel="noreferrer">
                <Image
                    className="social-icon"
                    src="/social/icons8-github.svg"
                    alt="github"
                    width={50}
                    height={50}
                />
            </a>
            <a href={props.socialNetworkMap['linkedin']} target="_blank" rel="noreferrer">
                <Image
                    className="social-icon"
                    src="/social/icons8-linkedin.svg"
                    alt="linkedin"
                    width={50}
                    height={50}
                />
            </a>
            <a href={props.socialNetworkMap['stack-overflow']} target="_blank" rel="noreferrer">
                <Image
                    className="social-icon"
                    src="/social/icons8-stack-overflow.svg"
                    alt="stack overflow"
                    width={50}
                    height={50}
                />
            </a>
            <a href={props.socialNetworkMap['twitter']} target="_blank" rel="noreferrer">
                <Image
                    className="social-icon"
                    src="/social/icons8-twitter.svg"
                    alt="twitter"
                    width={50}
                    height={50}
                />
            </a>
        </div>
    )
}