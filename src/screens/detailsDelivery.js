import React, {useEffect} from "react"



const DetailsDeliver = () => {

    useEffect(() => {
      
        
      return () => {
        
      }
    }, [])
    
    return (
        
        <div className="m-0 vh-100 row justify-content-center align-items-center">    
            <h5>Código de pedido: </h5>
            <h5>Cliente: </h5>
            <h5>Dirección de entrega: </h5>
            <table className="table table-striped">
                <thead>
                    <th>Nombre producto</th>
                    <th>Ref.</th> 
                    <th>Cantidad</th>        
                </thead>
                <tbody>

                </tbody> 
            </table>
            <h5>Estado del pedido: </h5>
            <h5>Fecha estimada de entrega: </h5>
            
            <div className="row">    
                <button className="btn btn-danger" type="submit">Cerrar</button>
                <button className="btn btn-primary" type="submit">Nueva consulta</button>
            </div>
        </div> 
        
    )

}

export default DetailsDeliver