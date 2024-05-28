import { RiDeleteBin6Line } from "react-icons/ri";

function list() {
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
                        <tr>
                            <td>27/05/2024</td>
                            <td>2.500,35</td>
                            <td>Parcela da placa de video 8060</td>
                            <td>Débito</td>
                            <td><RiDeleteBin6Line className="cursor-pointer"/></td>
                        </tr>
                        <tr>
                            <td>27/05/2024</td>
                            <td>2.500,35</td>
                            <td>Parcela da placa de video 8060</td>
                            <td>Débito</td>
                            <td><RiDeleteBin6Line className="cursor-pointer"/></td>
                        </tr>
                        <tr>
                            <td>27/05/2024</td>
                            <td>2.500,35</td>
                            <td>Parcela da placa de video 8060</td>
                            <td>Débito</td>
                            <td><RiDeleteBin6Line className="cursor-pointer"/></td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default list