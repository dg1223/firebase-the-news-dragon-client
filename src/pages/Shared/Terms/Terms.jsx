import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h2>Our Terms and Conditions</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum culpa
        voluptas ut, harum non praesentium deserunt voluptatibus maiores fuga
        quod explicabo omnis eius id odio ea tempora voluptates corrupti debitis
        illum sed amet tenetur doloribus asperiores? Optio illo id corporis,
        aperiam accusantium, dicta, in fugiat illum soluta inventore molestias
        eius!
      </p>
      <p>
        Go back to <Link to="/register">Register</Link>{" "}
      </p>
    </div>
  );
};

export default Terms;
