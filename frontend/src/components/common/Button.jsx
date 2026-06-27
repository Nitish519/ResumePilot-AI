export default function Button({
    children,
    onClick,
    type = "submit",
}) {

    return (

        <button
            type={type}
            onClick={onClick}
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg font-semibold cursor-pointer"
        >
            {children}
        </button>

    );

}