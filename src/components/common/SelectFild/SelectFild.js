import React from 'react'
import {
    CountinerStyled,
    InputStyled
} from './Styled'

export const SelectFild = ({ children, ...props }) => {
    const randumNum = Math.random()
    return (
        <CountinerStyled>
            {props.radioType ?
                <React.Fragment>
                    {props.value.map((item, i) =>
                        <React.Fragment>
                            <InputStyled
                                onChange={e => props.onSiteChanged(item.value)}
                                type="radio"
                                id="louie"
                                key={"radio-" + randumNum+ i}
                                name={"radio-" + randumNum}
                                value={item.value}
                            />
                            <label for="dewey">{item.label}</label>
                        </React.Fragment>
                    )}
                </React.Fragment>
                :
                <select style={{ width: '100%' }}>
                    {props.value.map(item =>
                        <option value={item.value}>{item.label}</option>
                    )}
                </select>

            }
        </CountinerStyled>
    )
}