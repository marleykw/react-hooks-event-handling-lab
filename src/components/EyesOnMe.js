// Code EyesOnMe Component Here
function EyesOnMe(){
    function handleBlur(event) {
        event.preventDefault();
        console.log("Hey! Eyes on me!");
      }
    function handleFocus(event) {
        event.preventDefault();
        console.log("Good!");
      }
    return (
        <div>
            <button onBlur={handleBlur} onFocus={handleFocus}>Eyes on me.</button>
        </div>
    )
}

export default EyesOnMe;