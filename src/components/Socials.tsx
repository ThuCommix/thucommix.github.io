type SocialProps = {
    logoUrl: string
    redirectUrl: string
}

export default function Socials(props: SocialProps) {
    return (
        <img
            width='48'
            height='48'
            alt={props.redirectUrl}
            style={{ cursor: 'pointer', borderRadius: '50%' }}
            src={props.logoUrl}
            onClick={() => window.open(props.redirectUrl, '_blank')} />
    )
}