import Image from 'next/image';
import AnimatedBackground from './AnimatedBg';
import { Rambla,Poppins } from 'next/font/google';
const rambla = Rambla({
    subsets: ['latin'],
    weight: ['400', '700'],
})
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['200','400', '700'],
})
const ProductContent = () => {
  return (
    <section className="bg-transparent  flex flex-col items-center h-full w-full">
      <div className="h-1/3 w-full bg-red-500 p-20 text-white flex flex-col">
        <h1 className={`${rambla.className} text-5xl font-bold w-1/2 md:w-4/5 md:text-9xl mb-24`}>L'Audio-Thérapie c'est quoi ?</h1>
        <div className='flex flex-row justify-between'>
            <p className={`${poppins.className} text-2xl w-1/2 md:text-2xl`}>Le dispositif de relaxation et d'aide au sommeil</p>
            <div className="ml-20 bg-yellow-500 rounded-lg p-4 h-[50vh] w-[50vw]">
            </div>

        </div>
      </div>
      <div className="h-1/3 w-full bg-green-500"></div>
      <div className="h-1/3 w-full bg-blue-500"></div>
    </section>
  );
};

export default ProductContent;

