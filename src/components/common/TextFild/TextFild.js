import React from 'react'
import {
    CountinerStyled,
    InputStyled
} from './Styled'

export const TextFild = ({children,...props}) => {
    return (
        <CountinerStyled>
            <InputStyled onChange={ e => {
                props.onSiteChanged(e.target.value)
            }
            }
       
            />
        </CountinerStyled>
    )
}