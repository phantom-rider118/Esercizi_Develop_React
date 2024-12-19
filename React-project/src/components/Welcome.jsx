import { Age } from "./Age";

export function Welcome({name= "Guest", age}){
    <div className="welcome">
        <p>Welcome <strong>{name}</strong>!</p>
        <Age age={age}/>
    </div>
}