const SocialLink = ({link, imageFile}) => {

    return (
        <a href={link} className="menu-item" target='_blank' rel='noopener noreferrer'>
            {/*<div></div>*/}
            <img src={imageFile} className='menu-item-icon'/>
        </a>
    )
}


export default SocialLink