// List.tsx
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Registro } from "./type";

interface ListProps {
  registros: Registro[];
  handleDelete: (index: number) => void;
}

const List: React.FC<ListProps> = ({ registros, handleDelete }) => {

  const formatCurrency = (value: string) => {
    let numberValue = value.replace(/[^\d.,-]/g, '');

    if (numberValue.indexOf('.') === -1) {
        numberValue = numberValue.replace(',', '.');
    }

    const currentValue: number = parseFloat(numberValue);

    return currentValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
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
            {registros.length === 0 ? (
              <tr>
                <td colSpan={5} className="mt-10 text-center text-[#FFF]">Nenhum dado disponível</td>
              </tr>
            ) : (
              registros.map((data, index) => (
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
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
