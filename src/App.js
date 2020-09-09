import React, { useState } from 'react'
import Item from './Item'

function App() {
    const [items, setItems] = useState([]);

    const createItem = () => {
        let rand = Math.round(Math.random())
        setItems(prev => [rand, ...prev])
        if(items[0] + items[1] + rand === 0 && items[2] === 2) {
            debugger
            items[2] = 0
        }
        if(items[0] === 1 && rand === 1) {
            setItems(prev => [2, ...prev])
        }
    }
    return (
        <div className="wrap">
            <h3 className="title">
                Клеточное наполнение
            </h3>
            <div className="itemsBlock">
                {items.map(item => <Item type={item} key={item.index}/>)}
            </div>
            <button className="btn" onClick={createItem}>
                сотворить
            </button>

        </div>
    )
}

export default App
