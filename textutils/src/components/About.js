import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "black" : "white",
  };

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              style={myStyle}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              itaque. Perspiciatis deserunt, dolorum saepe aliquam, libero ipsa
              veritatis vero nihil quas nemo beatae recusandae fugiat ex itaque
              veniam dicta nisi.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptates rerum adipisci culpa, soluta nemo doloremque
              reprehenderit quaerat eius! In esse quibusdam mollitia,
              accusantium modi fuga nisi. Odio, vel tempore! Harum sequi magnam
              et labore tempore possimus facilis sint accusantium dolores.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis deleniti obcaecati assumenda, tempora consequuntur
              illum cum alias quaerat quod quidem voluptatibus magnam beatae
              veniam aperiam quos nihil fuga accusantium earum architecto ut
              quasi ad ipsa possimus! Voluptas, perferendis consequatur aut
              doloremque veritatis quae, enim, accusamus error nobis repellendus
              sapiente velit.
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3"></div>
    </div>
  );
}
