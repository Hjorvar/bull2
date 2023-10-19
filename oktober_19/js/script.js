const headerHtml = document.getElementById('header');
const ansHtml = document.getElementById('ans');

const months = ['Januari', 'Februari', 'Maret',
                'April', 'Mei', 'Juni', 'Juli',
                'Agustus', 'September', 'Oktober',
                'November', 'Desember'];

for (let i = 0; i < months.length; i += 1) {
  ansHtml.innerHTML += `${months[i]}<br>`;
}