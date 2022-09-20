// Code Keypad Component Here

function Keypad (){
    function handleChange(event) {
        event.preventDefault();
        console.log("Entering password...");
      }
    return (
        <div>
            <form onChange={handleChange}>
                <input type="password" name="password" placeholder="Enter password..." />
            </form>
        </div>
    )
}

export default Keypad;