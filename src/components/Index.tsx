import Avatar from './Avatar'
import Social from './Social'
import githubDark from '../assets/github-dark.png'
import githubLight from '../assets/github-light.png'
import strava from '../assets/strava.svg'
import Tooltip from './Tooltip'
import Animation from './Animation'
import { useTheme } from '../hooks/useTheme'

export default function Index() {
    const { theme } = useTheme();
    const github = theme === 'dark' ? githubLight : githubDark;
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar size='256' />
                <h1>Kevin Scholz</h1>
                <Animation duration={0.5}>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '30px' }}>
                        <Tooltip content='Github'>
                            <Social redirectUrl='https://github.com/ThuCommix' logoUrl={github} />
                        </Tooltip>
                        <Tooltip content='Strava'>
                            <Social redirectUrl='https://www.strava.com/athletes/106505781' logoUrl={strava} />
                        </Tooltip>
                    </div>
                </Animation>
            </div>
        </div>
    )
}