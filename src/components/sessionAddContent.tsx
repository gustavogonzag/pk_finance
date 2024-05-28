import { useState } from "react";

function SessionAddContent() {

    const [descricao, setDescricao] = useState<string>("");
    const [data, setData] = useState<string>("");
    const [valor, setValor] = useState<string>("");
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleOptionChange = (option: string) => {
        // Se o mesmo botão de rádio for clicado novamente, desmarque-o
        setSelectedOption(selectedOption === option ? null : option);
    };

    const clearFields = () => {
        setDescricao("");
        setData("");
        setValor("");
        setSelectedOption(null);
    }

    const handleAdd = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const receita = {
            descricao: descricao,
            data: data,
            valor: valor,
            selectedOption: selectedOption
        }
        const registrosFinanceiros = [
            ...JSON.parse(localStorage.getItem('registrosFinanceiros') || '[]'),
            receita
        ]
        addSaveStorage(registrosFinanceiros);
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    const addSaveStorage = (registrosFinanceiros: any) => {
        localStorage.setItem('registrosFinanceiros', JSON.stringify(registrosFinanceiros));
        console.log(registrosFinanceiros);
        clearFields();
    }

    return (
        <div className="flex justify-center mt-10">
            <div className="flex flex-wrap justify-center items-center bg-[#242424] w-auto rounded-md gap-4 px-10 py-4">
                <input className="p-2 rounded-md bg-gray-dark text-[#FFF]" placeholder="Digite aqui a descricão" type="text" onChange={(e) => setDescricao(e.target.value)} value={descricao} />
                <input className="p-2 rounded-md  bg-gray-dark text-[#FFF]" type="date" onChange={(e) => setData(e.target.value)} value={data} />
                <input className="p-2 w-24 rounded-md bg-gray-dark text-[#FFF]" placeholder="Valor" type="text" onChange={(e) => setValor(e.target.value)} value={valor} />
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
                <button className="bg-orange rounded-md px-4 text-[#FFF] font-medium ml-4 w-36 h-11" onClick={handleAdd}>Adicionar</button>
            </div>
        </div>
    )
}

export default SessionAddContent