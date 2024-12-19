import { Age } from "./Age";

export function Welcome({ name, age }) {
  <div className="welcome">
    <p>Welcome, {name}!</p>
    <Welcome age={age} />
    {age > 18 && <Age age={age} />}
    {age && <Age age={age} />}
    {age > 18 && age < 65 && <Age age={age} />}
    {age > 18 && name === "John" && <Age age={age} />}
    {age > 18 && <Age age={age} />}
  </div>;
}
