import AUTHOR_ICON from '../../assets/person.png'

import './Author.scss'

export default function Author({ avatar, name }) {
    return <div className='author'>
        <img src={avatar} />
        <p>{name}</p>
    </div>
}