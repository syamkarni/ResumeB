import './App.css';

function App() {
  return (
    <div className="App">
      <form autocomplete="on">
      <div className="section-container" id="Description">
        <div className="section-main">
          <label for="about">About:</label><br></br>
          <textarea id="about" name="about" required></textarea><br></br>
          <a href="#Personal_info">Next</a><br></br>
        </div>
      </div>
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
          <a href="#Description ">Back</a><br></br>
          <a href="#Social_Profiles">Next</a>{/*If possible make this button that make sures that all fields are entered properly*/}
        </div>
      </div>
      <div className="section-container" id="Social_Profiles">
        <div className="section-main">
          <label for="linkedin">LinkedIn:</label><br></br>
          <input type="url" id="linkedin" name="linkedin"/><br></br>
          <label for="github">Github:</label><br></br>
          <input type="url" id="github" name="github"/><br></br>
          <a href="#Personal_info">Back</a><br></br>
          <a href="#Education">Next</a>
        </div>
      </div>
      <div className="section-container" id="Education">
        <div className="section-main">
          <label for="e_name">Name:</label><br></br>
          <input type="text" id="e_name" name="e_name" required/><br></br>
          <label for="e_url">URL:</label><br></br>
          <input type="url" id="e_url" name="e_url" required/><br></br>
          <label for="e_degree">Degree:</label><br></br>
          <input type="text" id="e_degree" name="e_degree" required/><br></br>
          <label for="e_major">Major:</label><br></br>
          <input type="text" id="e_major" name="e_major" required/><br></br>
          <label for="e_start">Start Date:</label><br></br>
          <input type="date" id="e_start" name="e_start" required/><br></br>
          <label for="e_end">End Date:</label><br></br>
          <input type="date" id="e_end" name="e_end" required/><br></br>
          <label for="e_location">Location:</label><br></br>
          <input type="text" id="e_location" name="e_location" required/><br></br>
          <button>Add</button><br></br>
          <a href="#Social_Profiles">Back</a><br></br>
          <a href="#">Next</a>
        </div>
      </div>
      </form>
    </div>
  );
}

export default App;
