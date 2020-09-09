import React from 'react'
import skull from './assets/skull.svg'
import fire from './assets/fire.svg'
import chick from './assets/chick.svg'


function Item({type}) {
    return (
        <div className="item">
            {type === 0
                ? <>
                    <div className="bg bg1">
                        <img className="itemImg" src={skull} alt='skull'/>
                    </div>
                    <div className="itemTitle">Мёртвая
                        <p className="itemDescription">или прикидывается</p>
                    </div>
                </>
                : type === 1 ?
                    <>
                        <div className="bg bg2">
                            <img className="itemImg" src={fire} alt='fire'/>
                        </div>
                        <div className="itemTitle">Живая
                            <p className="itemDescription">и шевелится!</p>
                        </div>
                    </>
                    :
                    <>
                        <div className="bg bg3">
                            <img className="itemImg " src={chick} alt='chick'/>
                        </div>
                        <div className="itemTitle">Жизнь
                            <p className="itemDescription">Ку-ку!</p>
                        </div>
                    </> }
        </div>
    )
}

export default Item
