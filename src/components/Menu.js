import MenuItem from './MenuItem'

const Menu = () => {
    return (
        <div id='menu'>
            <MenuItem text='home' link='/' />
            <MenuItem text='projects' link='projects' />
            <MenuItem text='bio' link='bio' />
        </div>
    )
}

export default Menu