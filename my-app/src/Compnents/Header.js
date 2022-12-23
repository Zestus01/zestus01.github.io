export default function Header(props){
    return(
      <div onClick={() => props.setPage("Home")} className="row d-flex container-fluid flex-row"> 
          <h1 className="d-flex col-6 text-white justify-content-start">Zachary Estus Showcase</h1>
          <h1 className="d-flex col-6 text-white justify-content-end">Code Wars: IV A New Hire</h1>
      </div>
    );
  }