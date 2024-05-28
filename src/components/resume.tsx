function resume() {
    return (
        <div className="flex flex-wrap justify-center mt-10">
            <div className="flex flex-row gap-8 -ml-96">
                <div>
                    <span className="text-gray-light font-medium">XX no total <br /></span>
                    <span className="text-[#FFF] font-medium">R$ 8.523,00</span>
                </div>
                <div>
                    <span className="text-[#FF0000] font-medium">XX em atraso <br /></span>
                    <span className="text-[#FFF] font-medium">R$ 8.523,00</span>
                </div>
                <div>
                    <span className="text-[#098007] font-medium">XX pagas <br /></span>
                    <span className="text-[#FFF] font-medium">R$ 8.523,00</span>
                </div><div>
                    <span className="text-gray-light font-medium">XX a pagar <br /></span>
                    <span className="text-[#FFF] font-medium">R$ 8.523,00</span>
                </div>
            </div>
        </div>
    )
}

export default resume