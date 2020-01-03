
import React from 'react';
import ReactDOM from 'react-dom';

const element = <h2>Personal Detail Form</h2>;
ReactDOM.render(element, document.getElementById("jsx"));


function Button(porps){
	return <button type="submit">{porps.label}</button>//this is jsx

}


//this is for save 
ReactDOM.render(<Button label="save"/>, document.getElementById("save"));

//this is for cancel
ReactDOM.render(<Button label="cancel"/>, document.getElementById("cancel"));

