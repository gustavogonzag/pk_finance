import { useState } from "react";

function SessionAddContent() {

    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleOptionChange = (option: string) => {
        // Se o mesmo botão de rádio for clicado novamente, desmarque-o
        setSelectedOption(selectedOption === option ? null : option);
    };

    return (
        <div className="flex justify-center mt-10">
            <div className="flex flex-wrap justify-center items-center bg-[#242424] w-auto rounded-md gap-4 px-10 py-4">
                <input className="p-2 rounded-md bg-gray-dark text-[#FFF]" placeholder="Digite aqui a descricão" type="text" />
                <input className="p-2 rounded-md  bg-gray-dark text-[#FFF]" type="date" />
                <input className="p-2 w-24 rounded-md bg-gray-dark text-[#FFF]" placeholder="Valor" type="text" />
                <div className="text-[#FFF]">
                    <input className="mr-2" type="radio" name="credito" id="credito" checked={selectedOption === 'credito'}
                        onChange={() => handleOptionChange('credito')} />
                    Crédito
                </div>
                <div className="text-[#FFF]">
                    <input className="mr-2" type="radio" name="debito" id="debito" checked={selectedOption === 'debito'}
            onChange={() => handleOptionChange('debito')} />
                    Débito
                </div>
                <button className="bg-orange rounded-md px-4 text-[#FFF] font-medium ml-4 w-36 h-11">Adicionar</button>
            </div>
        </div>
    )
}

export default SessionAddContent