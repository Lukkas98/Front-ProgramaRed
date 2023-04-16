import { Button, Col, Grid } from '@tremor/react'
import React, { useState } from 'react'

export function SelectUsers({ onSearch }) {
    const [isPremium, setIsPremium] = useState(true)
    return (
        <Grid numCols={2} className='gap-2 flex items-start justify-start'>
            <Col>
                <select name='isPremium'
                    value={isPremium}
                    onChange={(e) => setIsPremium(e.target.value)}>
                    <option value={true}>Premium</option>
                    <option value={false}>No Premium</option>
                </select>
            </Col>
            <Col>
                <Button size='xs' color='emerald' onClick={() => onSearch(isPremium)}>
                    <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" strokeWidth={1.5} stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </Button>
            </Col>
        </Grid>
    )
}
