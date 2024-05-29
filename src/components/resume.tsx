// Resume.tsx
import React from "react";

interface ResumeProps {
    valorTotal: number;
    totalCredito: number;
    totalDebito: number;
    saldo: number
}


const Resume: React.FC<ResumeProps> = ({ valorTotal, totalCredito, totalDebito, saldo }) => {

    const formatCurrency = (value: number): string => {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      };

    return (
        <div className="flex flex-wrap justify-center mt-10 ml-10">
            <div className="flex flex-wrap gap-8 -ml-96">
                <div>
                    <span className="text-gray-light font-medium">Total <br /></span>
                    <span className="text-[#FFF] font-medium">{formatCurrency(valorTotal)}</span>
                </div>
                <div>
                    <span className="text-[#FF0000] font-medium">Total de débitos <br /></span>
                    <span className="text-[#FFF] font-medium">{formatCurrency(totalDebito)}</span>
                </div>
                <div>
                    <span className="text-[#098007] font-medium">Total de crédito <br /></span>
                    <span className="text-[#FFF] font-medium">{formatCurrency(totalCredito)}</span>
                </div>
                <div>
                    <span className="text-[#FFF] font-medium">Saldo<br /></span>
                    <span className="text-[#FFF] font-medium">{formatCurrency(saldo)}</span>
                </div>
            </div>
        </div>
    );
};

export default Resume;
