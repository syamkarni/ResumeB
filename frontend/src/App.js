import './App.css';

function App() {
  return (
    <div className="App">
      <form autocomplete="on">
      <div className="section-container" id="Personal_info">
        <div className="section-main">
          <label for="fname">First Name:</label><br></br>
          <input type="text" id="fname" name="fname" required/><br></br>
          <label for="sname">Second Name:</label><br></br>
          <input type="text" id="sname" name="sname" required/><br></br>
          <label for="email">Email:</label><br></br>
          <input type="email" id="email" name="email" required/><br></br>
          <label for="phone">Phone:</label><br></br>
          <input type="tel" id="phone" name="phone" required/><br></br>
          <label for="plink">Personal link:</label><br></br>
          <input type="url" id="plink" name="plink" required/><br></br>
          <div className="address-container"> {/*Add if statements and then add options for the state and the country*/}
            <label for="address">Address:</label><br></br>
            <input type="text" id="address" name="address" required/><br></br>
            <label for="city">City:</label><br></br>
            <input type="text" id="city" name="city" required/><br></br>
            <label for="zip">Zip:</label><br></br>
            <input type="text" id="zip" name="zip" required/><br></br>
            <label for="country">Country:</label><br></br>
            <input type="text" id="country" name="country" required/><br></br>
          </div>
          <a href="#">Next</a>
        </div>
      </div>
      </form>
    </div>
  );
}

export default App;
