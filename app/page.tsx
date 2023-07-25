
import Profile from './profile/profile'

import {userName} from './appconst'
import {socialNetworkMap} from './appconst'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Profile userName={userName} socialNetworkMap={socialNetworkMap}/>
    </main>
  )
}
