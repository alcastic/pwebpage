
import NavContent from '@/components/navcontent/navcontent'
import Profile from '../components/profile/profile'
import {userName} from './appconst'
import {socialNetworkMap} from './appconst'
import { SocialPanel } from '@/components/social-panel/socialpanel'

export default function Home() {
  return (
    <main className="page-content">
      <Profile userName={userName}/>
      <SocialPanel socialNetworkMap={socialNetworkMap}/>
      <p>
        With over 8 years of Software Engineering professional experience, I have been able to collaborate with companies which lead the software development Industry in Chile and been playing different roles such as Technical Lead, Software Architect, Backend and Full Stack Developer.
      </p>
      <p>
        I am highly focused, attentive to detail and passionate about good practices during the entire cycle of software development. Although in recent years I have been involved in FullStack roles I consider myself as a Backend Software Developer.
      </p>
      <p>
        Nowadays, I am keen on Software Architecture such as Event-Driven Microservices and Cloud Architecture Models. In my spare time I spend hours implementing concurrency patterns (mostly in Golang) and reading IT books. I am always eager to share knowledge.
      </p>
      <p>
        I'm eager about my next career step and I look forward to being part of a new team.
      </p>
    </main>
  )
}
