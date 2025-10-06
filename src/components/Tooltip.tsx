import React from 'react'

type TooltipProps = {
    content: string
    children: React.ReactElement
}

export default function Tooltip(props: TooltipProps) {
    return (
        <div className='tooltip'>
            {props.children}
            <span className='tooltiptext'>{props.content}</span>
        </div>
    )
}