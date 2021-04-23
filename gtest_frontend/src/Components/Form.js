//import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CSRFToken from './CSRFToken.js';



const Form = () => {
    return (
        <div style={{width: "600px", height: '600px', margin: '50px auto'}}>
            <section id="registration-section">
                <form action="http://localhost:8000/add-dojo" method="POST">
                    <CSRFToken />
                    <h2>Register</h2>
                    <div>
                        <label htmlFor="branch">Branch:</label>
                        <input type="text" name="branch" size="15"></input>
                    </div>
                    <div>
                        <label htmlFor="street">Street:</label>
                        <input type="text" name="street" size="15"></input>
                    </div>
                    <div>
                        <label htmlFor="city">City:</label>
                        <input type="text" name="city" size="15"></input>
                    </div>
                    <div>
                        <label htmlFor="state">State:</label>
                        <input type="text" name="state" size="15"></input>
                    </div>
                    <div>
                        <input type="submit" value="Create"></input>
                    </div>
                </form>
                <Link to="/dojos">Go Back</Link>
        </section>
      </div>
    );
}

export default Form;