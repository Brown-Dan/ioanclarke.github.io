const SocialLink = ({link, text, imageFilename}) => (
    <div className='menu-item-wrapper'>
        <a href={link} className="menu-item" target='_blank' rel='noopener noreferrer'>
            <img src={imageFilename} alt='icon' className='menu-item-icon'/>
            <div className='menu-link-tooltip'>{text}</div>
        </a>
    </div>
)


export default SocialLink