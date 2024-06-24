function Title({header, subHeader,img,text,link,linkText,position}){
    return (
        <div className={`title ${position}`}>
            <h2>{header}</h2>
            <h3>{subHeader}</h3>
            <div className="img-parent">
                <img src={img} alt=""></img>
            </div>
            <div className="text">
            {text}
            </div>
            <div className="link parent">
                <a href={link} className="Link">{linkText} </a>
            </div>
        </div>
    )
}
export default Title;