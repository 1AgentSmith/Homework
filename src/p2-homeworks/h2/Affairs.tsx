import React from 'react'
import Affair from './Affair'
import {AffairType, filterAffairs, FilterType} from './HW2'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filterValue: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div>

            {mappedAffairs}


            <SuperButton onClick={setAll} className={props.filter === 'all'? s.someClass : ''}>All</SuperButton>
            <SuperButton onClick={setHigh} className={props.filter === 'high'? s.someClass : ''}>High</SuperButton>
            <SuperButton onClick={setMiddle} className={props.filter === 'middle'? s.someClass : ''}>Middle</SuperButton>
            <SuperButton onClick={setLow} className={props.filter === 'low'? s.someClass : ''}>Low </SuperButton>
        </div>
    )
}

export default Affairs
