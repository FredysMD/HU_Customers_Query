import React, {useState} from "react"
import { useNavigate } from "react-router-dom";


 const Index = () => {

    const [formData, setFormData] = useState({
        codDelivery:'',
        typeId:'',
        idUser:'',
    })

    const history = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();

        const { codDelivery, typeId, idUser } = formData;

        console.log(codDelivery)
        console.log(idUser)
        // Fetch POST method - sends new data to an API
        fetch(`https://dashfleetbackend.herokuapp.com/api/ordens/${idUser}/${codDelivery}`, {
            // use POST method
            method: "GET",
            // include necessary headers
            headers: {
                "content-type": "application/json",
            },
            // send data back to API
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.data.length)

            if(data.data.length > 0){
                history("/detail", {state:data});
            }
        })
    }

    const handleChange = e =>
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });


    return (
        <div className="m-0 vh-100 row justify-content-center align-items-center"> 
            <form onSubmit={e => handleSubmit(e)}>
                <div className="row">
                    <label className="form-label">Código pedido </label>   
                    <input
                        onChange={e => handleChange(e)}
                        className="form-control"
                        name="codDelivery"            
                        type="text"
                        placeholder="ingrese el código del pedido"
                        required
                    />
                </div>
                <div className="row">
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
                <div className="row">
                    <label className="form-label">Documento</label>
                    <input
                        onChange={e => handleChange(e)} 
                        className="form-control"
                        name="idUser"            
                        type="number"
                        placeholder="Ingrese el número de documento"
                        required
                    />
                </div>
                <div className="row">
                    <div className="col text-center pt-4">
                        <button className="btn btn-primary" type="submit">Consultar</button> 
                    </div>
                </div>
            </form>
        </div>
        
    )

}

export default Index