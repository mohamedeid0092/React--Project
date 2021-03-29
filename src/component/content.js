export const Content=(props)=>{
    return(
        <>
<div class="card" style={{width:350+"px"}}>
    <img class="card-img-top"  src={props.data.volumeInfo?.imageLinks?.smallThumbnail} alt="Card image" />
    <div class="card-body">
        
      <h4 class="card-title">{props.data.volumeInfo?.title}</h4>
      <h4>by :{props.data.volumeInfo?.authors} </h4>
      <p class="card-text">{props.data.volumeInfo.description}</p>
      
    </div>
  </div>

        </>
    )}