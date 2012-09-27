#pragma strict

function Start () {

}

/*
function Update () {
	var halfW:float = Screen.width/2;
	transform.position.x = (Input.mousePosition.x - halfW) / halfW;
	
	var halfH:float = Screen.height/3;
	transform.position.z = (Input.mousePosition.y - halfH)/halfH;
	
	Debug.Log(Input.mousePosition.x - Screen.width/2);
}
*/

// Smoothly tilts a transform towards a target rotation.
var smooth = 2.0;
var tiltAngle = 30.0;
function Update () {
	var halfW:float = Screen.width/2;
	transform.position.x = (Input.mousePosition.x - halfW) / halfW;
	
	var halfH:float = Screen.height/3;
	transform.position.z = (Input.mousePosition.y - halfH)/halfH;

    
    var tiltAroundZ = Input.GetAxis("Mouse X") * tiltAngle * 2;
    var tiltAroundX = Input.GetAxis("Mouse Y") * tiltAngle * -2;
    var target = Quaternion.Euler (tiltAroundX, 0, tiltAroundZ);
    // Dampen towards the target rotation
    transform.rotation = Quaternion.Slerp(transform.rotation, target,
                                   Time.deltaTime * smooth);;
}