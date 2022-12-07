export default function Home() {
    return (
        <div className="w-screen h-screen flex flex-col items-center bg-zinc-900">
            <div className="max-w-lg">
                <h1 className="font-base font-extrabold text-5xl text-center pt-16 text-white">
                    ToDoList App - NextJs
                </h1>

                {/* Componente Input */}
                <div className="w-full px-4 py-8 flex items-center justify-center gap-4">
                    <input
                        className="w-full px-4 py-2 border-2 rounded-md border-violet-500 outline-none bg-zinc-900 text-white"
                        type="text"
                        placeholder="Insira a task"
                    />
                    <button className="px-3 py-2 rounded-lg shadow-md bg-violet-500 text-white -rotate-12">
                        ✏️
                    </button>
                </div>

                {/* Componente lista com as Tasks */}
                <div className="w-full pt-8 px-3">
                    <ul className="flex flex-col items-center justify-between">
                        <div className="bg-task bg-cover w-full h-16 mb-4 flex items-center justify-around">
                            <li className="font-semibold text-xl">
                                Comprar açaí com laele
                            </li>
                            <span className="font-semibold text-xl cursor-pointer">
                                X
                            </span>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}
