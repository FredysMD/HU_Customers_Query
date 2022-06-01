import React, {useState} from "react"


 const Index = () => {

    const [formData, setFormData] = useState({
        codDelivery:'',
        typeId:'',
        idUser:'',
    })
    const [error, setError] = useState('')
    const [noData, setNoData] = useState('')

    const handleSubmit = () => {

        console.log(formData)

    }

    const handleChange = e =>
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    const { codDelivery, typeId, idUser } = formData;

    return (
        <div className="m-0 vh-100 row justify-content-center align-items-center"> 
            <form onSubmit={handleSubmit}>
                <div class="row">
                    <label className="form-label">Código pedido </label>   
                    <input
                        value={codDelivery}
                        onChange={e => handleChange(e)}
                        className="form-control"
                        name="cod"            
                        type="text"
                        placeholder="ingrese el código del pedido"
                        required
                    />
                </div>
                <div class="row">
                    <label className="form-label">Tipo de documento</label>   
                    <select
                        onChange={e => handleChange(e)}
                        className="form-control" 
                        required
                    >
                        <option value="0">Cédula de ciudadia</option>
                        <option value="1">Tarjeta identidad</option>
                    </select>
                </div>
                <div class="row">
                    <label className="form-label">Documento</label>
                    <input
                        value={idUser}
                        onChange={e => handleChange(e)} 
                        className="form-control"
                        name="idUser"            
                        type="number"
                        placeholder="Ingrese el número de documento"
                        required
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