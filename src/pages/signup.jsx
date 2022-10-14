
import { useState } from "react";
import Header from "../component/header";

function MyForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    return (
        <>
            <Header />
            <div className="box">
                <form onSubmit={handleSubmit}>

                    <label>First Name:
                        <input
                            type="text"
                            name="FirstName"
                            value={inputs.FirstName || ""}
                            onChange={handleChange}
                        />
                    </label>
                    <label>Last Name:
                        <input
                            type="text"
                            name="LastName"
                            value={inputs.LastName || ""}
                            onChange={handleChange}
                        />
                    </label>
                    <label>Email:
                        <input
                            type="text"
                            name="email"
                            value={inputs.email || ""}
                            onChange={handleChange}
                        />
                    </label>
                    <label>Password:
                        <input
                            type="password"
                            name="password"
                            value={inputs.password || ""}
                            onChange={handleChange}
                        />
                    </label>
                    <input type="submit" />
                </form>
            </div>
        </>
    )
}
export default MyForm;