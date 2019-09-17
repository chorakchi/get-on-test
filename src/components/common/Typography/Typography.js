import React from 'react'
import {
    CountinerStyled,
} from './Styled'

export const Typography = ({children,...props}) => {
    return (
        <CountinerStyled {...props}>
            {children}
        </CountinerStyled>
    )
}