const provinceList = document.getElementById('provinceList');
const searchInput = document.getElementById('searchInput');
let allData = [];

// ดึงข้อมูลจาก JSON
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        allData = data;
        displayData(allData);
    });

// ฟังก์ชันแสดงการ์ดจังหวัด
function displayData(data) {
    provinceList.innerHTML = data.map(item => `
        <div class="card" onclick="location.href='detail.html?id=${item.id}'">
            <img src="${item.image}" alt="${item.province}">
            <div class="card-info">
                <h3>${item.province}</h3>
                <p>${item.title}</p>
            </div>
        </div>
    `).join('');
}

// ระบบค้นหา
searchInput.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();
    const filtered = allData.filter(item => 
        item.province.toLowerCase().includes(value) || 
        item.title.toLowerCase().includes(value)
    );
    displayData(filtered);
});