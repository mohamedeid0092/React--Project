export const ProductContent=(props)=>{
    return(
        <>
<div class="card" style={{width:350+"px"}}>
    <img class="card-img-top"  src={props.data?.image} alt="Card image" />
    <div class="card-body">
        
      <h4 class="card-title">{props.data?.title}</h4>
      <h4>price :{props.data.price} </h4>
      <p class="card-text">{props.data.description}</p>
      
    </div>
  </div>

        </>
    )}