import React from "react"

type HeadlineProps = {
  headlineText: string
}

export const Headline: React.FC<HeadlineProps> = ({headlineText}) => {
    return (
        <h2 style={{textDecorationLine: 'underline'}}>{headlineText}</h2>
    )
}
