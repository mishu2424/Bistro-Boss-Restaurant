
const Header = ({subheader, header}) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <p className="text-sm text-yellow-600 italic pb-3">---{subheader}---</p>
            <h2 className="text-2xl font-semibold border-y-2 border-gray-300 py-3 px-3 uppercase">{header}</h2>
        </div>
    );
};

export default Header;