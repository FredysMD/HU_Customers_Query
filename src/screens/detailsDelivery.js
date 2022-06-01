import React, {useEffect} from "react"



const DetailsDeliver = () => {

    useEffect(() => {
      
        
      return () => {
        
      }
    }, [])
    
    
    return (
        
        <div className="m-0 vh-80 row justify-content-center align-items-center">
            <div class="text-center">
                <table class="table table-borderless table-centralised pt-4">
                    <tbody>
                        <tr>
                            <th>
                                Código de pedido:
                            </th>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Cliente: 
                            </th>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Dirección de entrega:
                            </th>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Estado del pedido:
                            </th>
                            <td>
                               
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Fecha estimada de entrega:
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