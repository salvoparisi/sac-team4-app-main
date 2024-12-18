import { Link } from "react-router";
import db from "../database/db"
import { useState } from "react"
export default function HomePage() {
    const [travels, setTravels] = useState(db);
    return (
        <section>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 ">


                    {travels.map((travel, index) =>
                        <div className="col" key={index}>
                            <Link className="text-decoration-none" to={`/contacts/${index}`}>
                                <div className="card">
                                    <div className="card-body">

                                        <h1 >{travel.destinazione}</h1>
                                        <div>
                                            <strong>data inizio</strong> {travel.data_inizio}
                                        </div>
                                        <div>
                                            <strong>data fine</strong> {travel.data_fine}
                                        </div>
                                        <div>
                                            <strong>partecipanti</strong> {travel.partecipanti.length}
                                        </div>

                                    </div>
                                </div>
                            </Link>
                        </div>



                    )}


                </div>
            </div>



        </section>
    )
}