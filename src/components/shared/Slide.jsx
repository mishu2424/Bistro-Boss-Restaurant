
const Slide = ({img,text}) => {
    return (
        <div className="relative mb-2">
            <img src={img} alt={text} />
            <h2 className="text-xl text-white absolute bottom-1 left-17">{text}</h2>
        </div>
    );
};

export default Slide;