import React from 'react'
import {
    CountinerStyled,
    InputStyled,
    TableStyled
} from './Styled'

export const ChartSelect = ({ children, ...props }) => {
    const randumNum = Math.random()
    return (
        <CountinerStyled>
            <TableStyled>
                <tr>
                    <th></th>
                    {props.values.answers.map(item =>
                        <th>{item.label}
                        </th>
                    )}
                </tr>
                {props.values.question.map((item,i) =>
                    <tr
                    key={"radio-tabel-" + i}
                    >
                        <th>{item}</th>
                        {props.values.answers.map(inerItem =>
                            <th><InputStyled
                            key={"radio-" + randumNum + '-'+ i}
                                type="radio"
                                id="louie"
                                name={"radio-" + randumNum + '-'+ i}
                                value={inerItem.value}
                            />
                            </th>
                        )}
                    </tr>
                )}
            </TableStyled>
        </CountinerStyled>
    )
}