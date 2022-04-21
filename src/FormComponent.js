import React from "react"

function FormComponent (props) {
    return (
        <main>
            <form>
                <input type="text" name="firstName" value={props.data.firstName} onChange={props.handleChange} placeholder="First Name" /><br />
                <input type="text" name="lastName" value={props.data.lastName} onChange={props.handleChange} placeholder="Last Name" /><br />
                <input type="text" name="age" value={props.data.age} onChange={props.handleChange} placeholder="Age" /><br />
                
                <label><input type="radio" name="gender" value="male" onChange={props.handleChange} checked={props.data.gender === "male"} />Male</label>
                <br />
                <label><input type="radio" name="gender" value="female" onChange={props.handleChange} checked={props.data.gender === "female"} />Female</label>
                <br />
                
                <select
                    value={props.data.destination}
                    name="destination"
                    onChange={props.handleChange}
                >
                    <option value="">-- Please Choose a destination --</option>
                    <option value="germany">Germany</option>
                    <option value="norway">Norway</option>
                    <option value="north pole">North Pole</option>
                    <option value="south pole">South Pole</option>
                </select>
                <br />
                
                <label>
                    <input type="checkbox" name="isVegan" value={props.data.isVegan} onChange={props.handleChange} />
                    Vegan?
                </label>
                <br />
                <label>
                    <input type="checkbox" name="isKosher" value={props.data.isKosher} onChange={props.handleChange} />
                    Kosher?
                </label>
                <br />
                <label>
                    <input type="checkbox" name="isLactoseFree" value={props.data.isLactoseFree} onChange={props.handleChange} />
                    Vegan?
                </label>
                <br />
                
                <button>Submit</button>
            </form>
            <hr />
            <h2><font color="#3AC1EF">Entered information:</font></h2>
            <p>Your name: {props.data.firstName} {props.data.lastName}</p>
            <p>Your age: {props.data.age}</p>
            <p>Your gender: {props.data.gender}</p>
            <p>Your destination: {props.data.destination}</p>
            <p>Your dietary restrictions: </p>
            <p>Vegan: {props.data.isVegan ? "Yes" : "No"}</p>
            <p>Kosher: {props.data.isKosher ? "Yes" : "No"}</p>
            <p>Lactose Free: {props.data.isLactoseFree ? "Yes" : "No"}</p>
        </main>
    )
}

export default FormComponent
