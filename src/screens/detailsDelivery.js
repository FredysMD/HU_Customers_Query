import React, {useEffect, useState} from "react"



const DetailsDeliver = () => {

    
    const [detail, setDetail] = useState({
        code:'',
        name:'',
        address:'',
        dateDelivery:'',
        ordens_product:{}
    })


    useEffect(() => {
      
        fetch('https://api.npms.io/v2/search?q=react')
        .then(response => response.json())
        .then(data => setDetail({ data }));
        
      return () => {
        
      }
    }, [detail])
    
    const { code, name, address, dateDelivery } = detail
    const [ ordens_product ] = detail

    return (
        
        <div className="m-0 vh-80 row justify-content-center align-items-center">
            <div class="text-center">
                <table class="table table-borderless table-centralised pt-4">
                    <tbody>
                        <tr>
                            <th>
                                Código de pedido: { code }
                            </th>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Cliente: { name } 
                            </th>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Dirección de entrega: { address }
                            </th>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Estado del pedido: { address ? 'Proceso' : 'Entregado' }
                            </th>
                            <td>
                               
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Fecha estimada de entrega: { dateDelivery }
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
                        ordens_product.map(
                            (op)=>(
                                <tr>
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
                <button className="btn btn-primary" type="submit">Nueva consulta</button>
            </div>
        </div> 
        
    )

}

export default DetailsDeliver