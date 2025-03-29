// Set date hari jadi pasangan
const anniversaryDate = new Date('2023-12-13'); // Ganti dengan tanggal hari jadi pasangan

const currentDate = new Date();
const daysLeft = Math.floor((anniversaryDate - currentDate) / (1000 * 60 * 60 * 24));

const anniversaryMessage = document.getElementById("anniversaryMessage");
if (daysLeft > 0) {
    anniversaryMessage.innerHTML = `Hari jadi kita yang ke-${Math.floor((currentDate - anniversaryDate) / (1000 * 60 * 60 * 24 * 365)) + 1} akan tiba dalam ${daysLeft} hari!`;
} else if (daysLeft === 0) {
    anniversaryMessage.innerHTML = `Hari ini adalah hari jadi kita! Selamat Hari Jadi! 🎉`;
} else {
    anniversaryMessage.innerHTML = `Hari jadi kita sudah lewat ${Math.abs(daysLeft)} hari yang lalu.`;
}
