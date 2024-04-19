import React, { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      firstName,
      lastName,
      company,
      phone,
      email,
      message,
    };

    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response) {
        console.log("Form submitted successfully");
      } else {
        console.error("Error submitting form");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="">
      <div className="row bg-light  g-0">
        <div className="py-5 col-lg-6 col-12 bg-gold  text-white">
          <div className="p-5 mt-5 pe-3 ">
            <p className="fs-4">
              Tailored Strategy for Each Owner for Immediate Success/Assigned
              Dedicated Account Manager 24/7 as Part of your business/Team!
            </p>
            <div className="d-flex algin-items-center">
              <div className="phone-icon me-2 rounded-circle ">
                <i className="fa fa-phone"></i>
              </div>
              <p>1.786.616.0020</p>
            </div>
          </div>
        </div>
        <div className="col-xl-4 py-4 ps-xl-5 ms-xl-5 col-lg-5 col-10 ps-lg-0  ms-lg--0 ps-md-5  m-md-0 mx-auto ms-md-5">
          <form className="  d-flex flex-column gap-4" onSubmit={handleSubmit}>
            <h3 className="fw-bolder ">
              For all Global Trade Consulting Please send your inquiry Below:
            </h3>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Company (Optional)"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div className="input-group">
              <input
                type="number"
                className="form-control"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group">
              <textarea
                rows={5}
                className="form-control"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn bg-custom py-2  mb-2 btn-submit "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
