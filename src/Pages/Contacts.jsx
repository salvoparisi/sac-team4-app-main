import { Link, useParams } from "react-router"
import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import { useState } from "react";
import Searchbar from "../components/Searchbar";
export default function Contacts() {

    const { filteredParticipants, travels, setTravels } = useContext(GlobalContext)

    const { id } = useParams()
    const [travel, setTravel] = useState(travels[id])
    console.log(travel);

    function handletoggle(e) {

        document.getElementById(`${e.target.id + 1}`).classList.toggle('d-none')

    }

    return (
        <>
            <div className="text-center">

                <Searchbar />

                <h1 className="mb-4">{travel.destinazione}</h1>
                {filteredParticipants.map((single, index) =>
                    <div className="card col-9 col-md-6 col-lg-4 m-auto mb-3" key={index}>
                        <div className="card-body" id={index}>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <span>{single.nome} </span>
                                    <span>{single.cognome}</span>

                                </div>
                                <i onClick={handletoggle} id={single.codice_fiscale} class="bi bi-arrow-down-short fs-2"></i>

                            </div>


                            <div className={`d-none text-start`} id={single.codice_fiscale + 1}>
                                <div>
                                    email: {single.email}
                                </div>
                                <div>
                                    codice fiscale: {single.codice_fiscale}
                                </div>
                                <div>
                                    numero di telefono: {single.numero_telefono}
                                </div>
                            </div>

                        </div>
                    </div>
                )}
                <Link className="btn btn-primary" to={'/'}>Home</Link>

            </div>
        </>
    )
}