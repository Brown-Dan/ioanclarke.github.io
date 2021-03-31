const SocialLink = ({link, text, imageFile}) => {

    return (
        <div className='menu-item-wrapper'>
            <a href={link} className="menu-item" target='_blank' rel='noopener noreferrer'>
                {/*<div></div>*/}
                <img src={imageFile} alt='icon' className='menu-item-icon'/>
                <div className='pageNameTooltip'>{text}</div>
            </a>
        </div>
    )
}


export default SocialLink