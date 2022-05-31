import React, {useState} from "react"


 const Index = () => {

    const [codDelivery, setCodDelivery] = useState('')
    const [typeId, setTypeId] = useState(0)
    const [idUser, setIdUser] = useState('')
    const [error, setError] = useState('')
    const [noData, setNoData] = useState('')

    const handleSubmit = () => {



    }

    return (
        <div className="m-0 vh-100 row justify-content-center align-items-center"> 
            <form onSubmit={handleSubmit}>
                <div class="row">
                    <label className="form-label">Código pedido </label>   
                    <input
                        className="form-control"
                        name="cod"            
                        type="text"
                        placeholder="ingrese el código del pedido"
                    />
                </div>
                <div class="row">
                    <label className="form-label">Tipo de documento</label>   
                    <select className="form-control">
                        <option selected value="0">Cédula de ciudadia</option>
                        <option value="1">Tarjeta identidad</option>
                    </select>
                </div>
                <div class="row">
                    <label className="form-label">Documento</label>
                    <input 
                        className="form-control"
                        name="idUser"            
                        type="number"
                        placeholder="Ingrese el número de documento"
                    />
                </div>
                <div class="row">
                    <div class="col text-center pt-4">
                    <button className="btn btn-primary" type="submit">Consultar</button> 
                    </div>
                </div>
            </form>
        </div>
        
    )

}

export default Index