function insert_Row() {
    //Write your code here
 let table = document.getElementById("sampleTable");
	let tr2 = document.getElementsByClassName("test")[0];
	let tr3 = document.getElementsByClassName("test")[1];
	let tr1=table.insertRow(0);
	tr1.innerHTML=`<td>New Cell1</td><td>New Cell2</td>`;
	table.appendChild(tr1);
	table.appendChild(tr2);
	table.appendChild(tr3);
}
