import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <p>Landing!</p>
      <Link to="/product">Go to product</Link>
    </div>
  );
}