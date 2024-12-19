// eslint-disable-next-line react/prop-types
export function Message({ age }) {
  return <p>{age > 18 ? `Your age is ${age}` : `You are very young!`}</p>;
}
