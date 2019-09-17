import React,{useState, useEffect } from 'react'
import { TextFild, Typography, SelectFild, ChartSelect } from '../../common'
import {CountinerStyled } from './Styled'

 const FormLayout = ({...props})=> {
    const [name, setName] = useState('');
    const [condition, setCondition] = useState('');
    const [nameThisKoala, setNameThisKoala] = useState('');
    const [old, setOld] = useState('');
    const [areYouTired, setAreYouTired] = useState('');
    const [areYouHungry, setAreYouHungry] = useState('');
    const [areYouSad, setAreYouSad] = useState('');
    const [howManyTimesDidYouCry, setHowManyTimesDidYouCry] = useState('');

    useEffect(()=> {

        let output = {
            name: name,
            condition: condition,
            nameThisKoala: nameThisKoala,
            old: old,
            areYouTired: areYouTired,
            areYouHungry: areYouHungry,
            areYouSad: areYouSad,
            howManyTimesDidYouCry: howManyTimesDidYouCry

        }

        props.onChangeData(output)
    })
    return(
        <CountinerStyled>
            <Typography title>Test</Typography>
            <Typography>What's yuor name?</Typography>
            <TextFild onSiteChanged = {data => setName(data)}/>
            <Typography>What is your current condition?</Typography>
            <SelectFild value={[{label: 'option1', value: 1},{label: 'option2', value: 2}]}/>
            <Typography>Name this koala:</Typography>
            <TextFild onSiteChanged = {data => setName(data)}/>
            <Typography>Hwo old are they?</Typography>
            <SelectFild
             radioType 
             value={[{label: '15-20', value: true},{label: '20-25', value: '20-25'},{label: 'over 25', value: 'over 25'}]}
             onSiteChanged={data => setOld(data)}
             />
            <Typography>Your best frend is called, you indicated that you are today feel. you have your age with you specified.<br/>
            How often do you feel ...?<br/>
            (Please tick ...)</Typography>
            <ChartSelect values={{
                question:[
                    'little interest or joy in your activities',
                     'Despondency, depression or hopelessess',
                     'Difficulties falling asleep or sleeping or increase sleep'
                    ], 
                answers:[{label: 'not at all', value: 1},{label: 'on individual days', value: 2},{label: 'on more than half of the days', value: 3},{label: 'almost ever day', value: 3}]}}/>
            <Typography title>Conditional content</Typography>
            <Typography>Are you tired?</Typography>
            <SelectFild
             radioType
              value={[{label: 'Yes', value: true},{label: 'No', value: false}]}
              onSiteChanged={data => setAreYouTired(data)}
              />
            <Typography>Are you Hungry?</Typography>
            <SelectFild 
            radioType value={[{label: 'Yes', value: true},{label: 'No', value: false}]}
            onSiteChanged={data => setAreYouHungry(data)}
            />
            <Typography>Continue here</Typography>
            <Typography>How sad are you?</Typography>
            <SelectFild 
            radioType 
            value={[{label: 'little', value: 'little'},{label: 'medium', value: 'medium'},{label: 'high', value: 'high'}]}
            onSiteChanged={data => setAreYouSad(data)}
            />
            <Typography>How many times did you cry last week?</Typography>
            <SelectFild 
            radioType 
            value={[{label: 'Yes', value: true},{label: 'No', value: false}]}
            onSiteChanged={data => setHowManyTimesDidYouCry(data)}
            />
        </CountinerStyled>
    )
}

export {FormLayout}
