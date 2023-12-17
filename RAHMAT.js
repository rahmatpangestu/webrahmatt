// JavaScript
const inputNama = document.getElementById('Nama');
const inputNim = document.getElementById('Nim');

function addData() {
  const Nama = inputNama.value;
  const Nim = inputNim.value;

  const tableData = document.getElementById('data-table');
  const row = document.createElement('tr');

  const value = [Nama, Nim];

  for (let i = 0; i < value.length; i++) {
    const cell = document.createElement('td');
    cell.innerHTML = value[i];
    row.appendChild(cell);
  }

  tableData.querySelector('tbody').appendChild(row);
}
