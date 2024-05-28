import logopkfinance from '../assets/PKFINANCE.png';

function head() {
  return (
    <div className="flex justify-center">
      <div className='mt-8 flex justify-center items-center gap-x-96'>
        <img className='w-52 h-28' src={logopkfinance} alt="logopkfinance" />
        <p className='text-1xl text-[#FFFFFF] font-normal '>Economize, invista, poupe. <br /><span className='text-orange font-medium'>Administre seu dinheiro com consciência.</span></p>
      </div>
    </div>
  )
}

export default head