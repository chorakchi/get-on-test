import React from 'react'
import {
    CountinerStyled,
} from './Styled'

export const Image = ({children,...props}) => {
    return (
        <CountinerStyled>
            {children}
        </CountinerStyled>
    )
}