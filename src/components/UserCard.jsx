const userCard=({user})=>{
  const {photoUrl, firstName , lastName ,about, age , gender ,} = user;
  console.log(user);
    return(
        <div className="card card-compact bg-base-300 w-96 shadow-xl m-20">
  <figure>
    <img
      src={photoUrl}
      alt="Profile pic" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName+" "+lastName}</h2>
    <p>{about}</p>
    <p>{age +" , "+  gender}</p>
    <div className="card-actions justify-end">
    <button className="btn btn-primary">Ignore</button>
    <button className="btn btn-secondary">Interested</button>
    </div>
  </div>
</div>
    )
};
export default userCard;