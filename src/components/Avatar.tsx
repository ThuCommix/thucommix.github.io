type AvatarSize = '32' | '64' | '96' | '128' | '256' | '384' | '512'

type AvatarProps = {
    size: AvatarSize
}

export default function Avatar(props: AvatarProps) {
    return (
        <img
            width={props.size}
            height={props.size}
            style={{ borderRadius: '50%' }}
            src='https://avatars.githubusercontent.com/u/3823625' />
    )
}