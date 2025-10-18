import React from "react";
import Nav from "../components/Nav";

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    // placeholder submit handler - integrate with API as needed
    const data = new FormData(e.target);
    const obj = Object.fromEntries(data.entries());
    console.log("contact submit", obj);
    alert("Form submitted (demo)");
  }

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main className="max-w-3xl mx-auto px-6 pt-28 pb-24">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-light text-gray-800 font-medium">Contact Us</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm text-gray-600 mb-2 font-medium text-left">
              First Name
            </label>
            <input
              name="firstName"
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2 font-medium text-left">
              Last Name
            </label>
            <input
              name="lastName"
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2 font-medium text-left">
              Phone Number
            </label>
            <div className="flex items-center gap-3">
              <span className="inline-block px-3 py-2 bg-gray-100 border rounded">
                +91
              </span>
              <input name="phone" className="flex-1 border rounded px-3 py-2" />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2 font-medium text-left">Company</label>
            <input name="company" className="w-full border rounded px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2 font-medium text-left">Email</label>
            <input
              name="email"
              type="email"
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-2 font-medium text-left">
                No. of Employees
              </label>
              <select
                name="employees"
                className="w-full border rounded px-3 py-2"
              >
                <option>-- select an option --</option>
                <option>1-50</option>
                <option>50-200</option>
                <option>200+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2 font-medium text-left">
                Industry
              </label>
              <select
                name="industry"
                className="w-full border rounded px-3 py-2"
              >
                <option>-- select an option --</option>
                <option>FMCG</option>
                <option>Cosmetics</option>
                <option>Skin Care</option>
                <option>Hair Care</option>
                <option>Fashion</option>
                <option>Accessories</option>
                <option>Fitness</option>
                <option>Health & Wellness</option>
                <option>Food</option>
                <option>Hygiene</option>
                <option>Kids & Home</option>
                <option>Electronics</option>
                <option>Apps</option>
                <option>Others</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2 font-medium text-left">Notes</label>
            <textarea
              name="notes"
              className="w-full border rounded px-3 py-2 h-28"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-3 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
