import React from "react"
import {useLocation, useNavigate} from 'react-router-dom';

const DetailsDeliver = () => {

    const location = useLocation();

    const history = useNavigate();

    return (
        
        <div className="m-0 vh-80 row justify-content-center align-items-center">
            <div class="text-center">
                <table class="table table-borderless table-centralised pt-4">
                    <tbody>
                        <tr>
                            <th>
                                Código de pedido: { location.state.data[0].code }
                            </th>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Cliente: { location.state.data[0].name_customer } 
                            </th>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Dirección de entrega: { location.state.data[0].address_delivery }
                            </th>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Estado del pedido: { location.state.data[0].state ? 'Proceso' : 'Entregado' }
                            </th>
                            <td>
                               
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Fecha estimada de entrega: { location.state.data[0].date_delivery }
                            </th>
                            <td>
                               
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>    
            <table className="table table-striped m-5">
                <thead>
                    <th>Nombre producto</th>
                    <th>Ref.</th> 
                    <th>Cantidad</th>        
                </thead>
                <tbody>
                    {
                        location.state.data.map(
                            (op, i)=>(
                                <tr key={i}>
                                    <td>{op.name}</td>
                                    <td>{op.ref}</td> 
                                    <td>{op.quantity}</td>    
                                </tr> 
                            )
                        )
                    }
                </tbody> 
            </table>
            <div className="row">    
                <button className="btn btn-danger" type="submit">Cerrar</button>
                <button onClick={ () => history("/")} className="btn btn-primary" type="submit">Nueva consulta</button>
            </div>
        </div> 
        
    )

}

export default DetailsDeliver