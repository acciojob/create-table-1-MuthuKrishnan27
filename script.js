function insert_Row() {
    //Write your code here
 let table = document.getElementById("sampleTable");
	let tr = table.insertRow(0);
	let td1 = tr.insertCell(0);
	td1.textContent ='New Cell1';
    td1 = tr.firstChild;
	let td2 = tr.insertCell(1);
	td2.textContent ='New Cell2';
	td2 = tr.lastChild;
	tr = table.firstChild;
	table.append(tr);
}
