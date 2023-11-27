// import { FaService, FaEnvelope, FaPen } from 'react-icons/fa'
import { FaPencilAlt, FaCogs, FaEnvelope } from 'react-icons/fa';
const ProfesionalSec = () => {
    return (
        <div className="my-16 ">
            <div className="grid grid-cols-1 md:grid-cols-2 ">

                <div className="div">
                    <img className='h-96' src="https://i.ibb.co/6DK3BfW/Property-Development-Sucess-The-Key-Role-Of-Architects.jpg" />
                </div>

                <div className="bg-gray-200 pt-5 pl-10">
                    <div className="">
                        <h1 className="text-3xl font-semibold">Professional Design</h1>
                        <p className="mt-2 font-semibold">We believe that it is possible to improve the quality of life and comfort while taking care of the environment. We design efficient systems and provide an excellent service with highly qualified personnel and rapid execution.</p>
                    </div>

                    <div>
                        <h1 className="text-3xl font-semibold mt-5">We offer you :</h1>
                        <div className="grid grid-cols-2 mt-2 font-semibold">
                            <li >Personalized <span className="">Attention</span> </li>
                           
                            <li>Project plans</li>
                            <li>Turnkey service</li>
                            <li>Solutions</li>
                        </div>
                    </div>

                    <div className="grid  grid-cols-3 py-10">
                        <p className=" font-semibold"> <FaPencilAlt size={30} />Plan</p>
                        <p className=" font-semibold"><FaCogs size={30} />Services</p>
                        <p className=" font-semibold"> <FaEnvelope size={30} />Contact us</p>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default ProfesionalSec;
