
const Header = ({subheader, header, color}) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <p className="text-sm text-yellow-600 italic pb-3">---{subheader}---</p>
            <h2 className={`text-2xl font-semibold border-y-2 border-gray-200 py-3 px-3 uppercase ${color && `text-${color}`}`}>{header}</h2>
        </div>
    );
};

export default Header;