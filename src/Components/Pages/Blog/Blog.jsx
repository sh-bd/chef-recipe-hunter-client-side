import React, { useRef } from "react";
import { FaDownload } from "react-icons/fa";
import ReactToPdf from "react-to-pdf";
const Blog = () => {
  const ref = useRef();
  const options = {
    orientation: "landscape",
    unit: "in",
    format: [7, 15],
  };

  return (
    <div>
      <div className="mt-6 text-end mr-6">
        <ReactToPdf targetRef={ref} options={options} filename="blog-by-shamim.pdf">
          {({ toPdf }) => (
            <button className="btn btn-success " onClick={toPdf}>
              <FaDownload className="inline-block mr-2 text-white me-2"></FaDownload>
              <span className="normal-case text-white text-lg">Save as PDF</span>
            </button>
          )}
        </ReactToPdf>
      </div>
      <div ref={ref}>
        <div className="mt-12 mx-10 text-orange-400 border-2 bg-orange-50  border-orange-400 rounded p-5">
          <div>
            <h3 className="text-3xl font-semibold p-3">
              Q: Tell us the differences between uncontrolled and controlled
              components.
            </h3>
            <p className="text-xl ms-4 text-black">
              Ans: Uncontrolled components are those whose states are managed by the DOM, that means the value of the component is stored in the DOM and it has a very limited control over the state. On the other hand, controlled components are managed by the parent components. So, parent component has the control over it's state.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold p-3 ">
              Q: How to validate React props using PropTypes?
            </h3>
            <p className="text-xl ms-4 text-black">
              Ans: It is a by default included react package library that allow developers to validate props to components. To use ProTypes, the developer must import ProTypes library and assign a property to the component so that it can be used.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold p-3 ">
              Q: Tell us the difference between nodejs and express js.
            </h3>
            <p className="text-xl ms-4 text-black">
              Ans: Node.js is a runtime environment that enable developers to run JavaScript on the server-side (outside of a browser). On the other hand, Express.js is a web application framework built on top of Node.js, provides
              a lot of features that make it easy for a developer to build web application. They both use V8 engine.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold p-3 ">
              Q: What is a custom hook, and why will you create a custom hook??
            </h3>
            <p className="text-xl ms-4 text-black">
              Ans: Custom hooks are a feature of React that allows developers to encapsulate reusable logic in functions. This can be used to reduce code duplication, improve readability, and make code more maintainable. Custom hooks can be used in any React component, and they can be reused across multiple components.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
