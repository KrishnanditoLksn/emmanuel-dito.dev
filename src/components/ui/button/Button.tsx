interface ButtonProps {
    text: string;
}

export default function Button(x: ButtonProps) {
    return (
        <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-40 sm:mt-9 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
            {x.text}
        </button>
    )
}
