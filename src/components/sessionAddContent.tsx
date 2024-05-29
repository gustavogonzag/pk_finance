// SessionAddContent.tsx
import { useEffect, useState } from "react";
import Resume from "./resume";
import List from "./list";
import { Registro } from "./type";

const getCurrentDate = (): string => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

function SessionAddContent() {

  const [descricao, setDescricao] = useState<string>("");
  const [data, setData] = useState<string>(getCurrentDate());
  const [valor, setValor] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const [valorTotal, setValorTotal] = useState<number>(0);
  const [totalCredito, setTotalCredito] = useState<number>(0);
  const [totalDebito, setTotalDebito] = useState<number>(0);
  const [saldo, setSaldo] = useState<number>(0);
  const [registrosFinanceiros, setRegistrosFinanceiros] = useState<Registro[]>([]);

  useEffect(() => {
    const registros = JSON.parse(localStorage.getItem('registrosFinanceiros') || '[]');
    setRegistrosFinanceiros(registros);
    somaValor(registros);
  }, []);

  const handleOptionChange = (option: string) => {
    setSelectedOption(selectedOption === option ? null : option);
  };

  const clearFields = () => {
    setDescricao("");
    setData("");
    setValor("");
    setSelectedOption(null);
  };

  const handleAdd = () => {
    const receita: Registro = {
      descricao,
      data,
      valor,
      selectedOption: selectedOption as 'credito' | 'debito'
    };
    const updatedRegistros = [...registrosFinanceiros, receita];
    setRegistrosFinanceiros(updatedRegistros);
    addSaveStorage(updatedRegistros);
    somaValor(updatedRegistros);
  };

  const somaValor = (registros: Registro[]) => {
    let total = 0;
    let totalCredito = 0;
    let totalDebito = 0;
    registros.forEach(registro => {
      const valor = parseFloat(registro.valor);
      total += valor;
      if (registro.selectedOption === 'credito') {
        totalCredito += valor;
      } else if (registro.selectedOption === 'debito') {
        totalDebito += valor;
      }
    });
    setTotalCredito(totalCredito);
    setTotalDebito(totalDebito);
    setValorTotal(total);
    setSaldo(totalCredito - totalDebito);
  };

  const addSaveStorage = (registros: Registro[]) => {
    localStorage.setItem('registrosFinanceiros', JSON.stringify(registros));
    clearFields();
  };

  const handleDelete = (index: number) => {
    const updatedRegistros = registrosFinanceiros.filter((_, i) => i !== index);
    setRegistrosFinanceiros(updatedRegistros);
    localStorage.setItem('registrosFinanceiros', JSON.stringify(updatedRegistros));
    somaValor(updatedRegistros);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center mt-10">
        <div className="flex flex-wrap justify-center items-center bg-[#242424] w-auto rounded-md gap-4 px-10 py-4">
          <input className="p-2 rounded-md bg-gray-dark text-[#FFF]" placeholder="Digite aqui a descricão" type="text" onChange={(e) => setDescricao(e.target.value)} value={descricao} />
          <input className="p-2 rounded-md bg-gray-dark text-[#FFF]" type="date" onChange={(e) => setData(e.target.value)} value={data} />
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
      <Resume valorTotal={valorTotal} totalCredito={totalCredito} totalDebito={totalDebito} saldo={saldo} />
      <List registros={registrosFinanceiros} handleDelete={handleDelete} />
    </>
  );
}

export default SessionAddContent;
