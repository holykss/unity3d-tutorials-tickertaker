using UnityEngine;
using System.Collections;

public class DisappearMe : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		renderer.enabled = false;
	}
}
