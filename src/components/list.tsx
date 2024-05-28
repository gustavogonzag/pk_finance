import { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

type Registro = {
    descricao: string;
    data: string;
    valor: string;
    selectedOption: 'credito' | 'debito';
};

function List() {

    const [registros, setRegistros] = useState<Registro[]>([]);

    useEffect(() => {
        const registrosFinanceiros = JSON.parse(localStorage.getItem('registrosFinanceiros') || '[]');
        if (registrosFinanceiros) {
            setRegistros(registrosFinanceiros);
        }
    }, []);

    if (registros.length === 0) {
        return <td className="mt-10 text-center text-[#FFF]">Nenhum dado disponível</td>;
    }

    const handleDelete = (index: number) => {
        const updatedData = registros.filter((_, i) => i !== index);
        setRegistros(updatedData);
        localStorage.setItem('registrosFinanceiros', JSON.stringify(updatedData));
      };

    const formatCurrency = (value: string) => {
        const numberValue = parseFloat(value.replace(/[^\d.-]/g, ''));
        return numberValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      };

    return (
        <div className="flex flex-wrap justify-center mt-10">
            <div>
                <div className="flex justify-center">
                    <hr className="border-1 w-10/12 border-[#D9D9D9]" />
                </div>
                <table className="border-separate border-spacing-x-24 border-spacing-y-5 text-left mt-5">
                    <thead>
                        <tr className="text-[#858585]">
                            <th>Data</th>
                            <th>Valor</th>
                            <th>Descrição</th>
                            <th>Tipo</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody className="text-[#FFF]">
                        {registros.map((data, index) => (
                            <tr key={index}>
                                <td>{data.data}</td>
                                <td>{formatCurrency(data.valor)}</td>
                                <td>{data.descricao}</td>
                                <td>{data.selectedOption === 'debito' ? 'Débito' : 'Crédito'}</td>
                                <td>
                                    <RiDeleteBin6Line
                                        className="cursor-pointer"
                                        onClick={() => handleDelete(index)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default List