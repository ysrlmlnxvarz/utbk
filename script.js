
const quizForm = document.getElementById("quizForm");
const resultDiv = document.getElementById("result");
const timerDisplay = document.getElementById("timer");
const submitBtn = document.getElementById("submitBtn");

const questions = [
  {
    soal: "1. Semua A adalah B. Beberapa B adalah C. Maka kesimpulan yang PASTI benar adalah...",
    options: [
      "Semua A adalah C",
      "Beberapa C adalah A",
      "Beberapa A mungkin adalah C",
      "Tidak ada A yang C"
    ],
    jawaban: 2
  },
  {
    soal: "2. Jika rata-rata dari 5 bilangan adalah 80, dan empat bilangan pertama adalah 78, 82, 79, dan 85, maka bilangan kelima adalah...",
    options: [
      "76",
      "75",
      "77",
      "74"
    ],
    jawaban: 1
  },
  {
    soal: "3. Jika x + y = 12 dan x - y = 4, maka nilai x dan y adalah...",
    options: [
      "x = 8, y = 4",
      "x = 7, y = 5",
      "x = 9, y = 3",
      "x = 10, y = 2"
    ],
    jawaban: 0
  },
  {
    soal: "4. Dalam suatu kelas terdapat 40 siswa. 25 siswa suka matematika, 20 siswa suka fisika, dan 10 siswa suka keduanya. Berapa banyak siswa yang suka hanya salah satu mata pelajaran?",
    options: [
      "15",
      "20",
      "25",
      "30"
    ],
    jawaban: 1
  },
  {
    soal: "5. Sebuah kapal berlayar dengan kecepatan 60 km/jam selama 4 jam. Berapa jarak yang ditempuh kapal tersebut?",
    options: [
      "240 km",
      "220 km",
      "200 km",
      "180 km"
    ],
    jawaban: 0
  },
  {
    soal: "6. Dalam suatu ujian, nilai rata-rata 5 siswa adalah 80. Jika 4 siswa memiliki nilai 85, 75, 90, dan 70, maka nilai siswa kelima adalah...",
    options: [
      "85",
      "80",
      "75",
      "70"
    ],
    jawaban: 1
  },
  {
    soal: "7. Diketahui dua garis sejajar yang dipotong oleh dua garis transversal. Jika salah satu sudut terbentuk adalah 60°, maka sudut lainnya adalah...",
    options: [
      "60°",
      "90°",
      "120°",
      "150°"
    ],
    jawaban: 2
  },
  {
    soal: "8. Sebuah kotak berisi bola merah, biru, dan hijau. Jika peluang mengambil bola hijau adalah 2/5, peluang mengambil bola biru adalah 1/5, dan bola merah sisanya. Berapa banyak bola merah dalam kotak?",
    options: [
      "1/5",
      "2/5",
      "3/5",
      "4/5"
    ],
    jawaban: 3
  },
  {
    soal: "9. Jika angka 324 dibagi oleh 9, maka hasilnya adalah...",
    options: [
      "28",
      "36",
      "32",
      "24"
    ],
    jawaban: 1
  },
  {
    soal: "10. Diketahui bahwa x = 3 dan y = 4. Maka nilai x² + y² adalah...",
    options: [
      "25",
      "16",
      "13",
      "9"
    ],
    jawaban: 0
  },
  {
    soal: "11. Dalam sebuah lingkaran, panjang diameter adalah 14 cm. Berapakah keliling lingkaran tersebut? (π = 22/7)",
    options: [
      "22 cm",
      "28 cm",
      "24 cm",
      "32 cm"
    ],
    jawaban: 1
  },
  {
    soal: "12. Jika 3x + 4y = 12 dan 2x - y = 4, maka nilai x dan y adalah...",
    options: [
      "x = 2, y = 4",
      "x = 3, y = 2",
      "x = 4, y = 3",
      "x = 5, y = 1"
    ],
    jawaban: 1
  },
  {
    soal: "13. Sebuah segitiga memiliki panjang alas 8 cm dan tinggi 6 cm. Berapakah luas segitiga tersebut?",
    options: [
      "24 cm²",
      "48 cm²",
      "36 cm²",
      "18 cm²"
    ],
    jawaban: 0
  },
  {
    soal: "14. Dalam sebuah kelas terdapat 30 siswa. 18 siswa menyukai matematika, 15 siswa menyukai fisika, dan 10 siswa menyukai keduanya. Berapa banyak siswa yang tidak menyukai kedua mata pelajaran tersebut?",
    options: [
      "7",
      "8",
      "9",
      "10"
    ],
    jawaban: 3
  },
  {
    soal: "15. Jika sebuah buku dapat dibaca dalam 4 jam, berapa lama waktu yang dibutuhkan untuk membaca 5 buku?",
    options: [
      "15 jam",
      "20 jam",
      "25 jam",
      "30 jam"
    ],
    jawaban: 1
  },
  {
    soal: "16. Jika harga sebuah barang setelah diskon 25% menjadi Rp 75.000, berapakah harga asli barang tersebut?",
    options: [
      "Rp 90.000",
      "Rp 100.000",
      "Rp 110.000",
      "Rp 120.000"
    ],
    jawaban: 0
  },
  {
    soal: "17. Diketahui dua buah angka, x dan y, yang memenuhi persamaan x + y = 10. Jika x = 3, maka nilai y adalah...",
    options: [
      "6",
      "7",
      "8",
      "9"
    ],
    jawaban: 0
  },
  {
    soal: "18. Dalam sebuah keranjang terdapat 6 bola merah, 4 bola biru, dan 10 bola hijau. Jika sebuah bola diambil secara acak, berapa peluang bola yang diambil adalah bola hijau?",
    options: [
      "1/2",
      "2/3",
      "1/3",
      "1/5"
    ],
    jawaban: 2
  },
  {
    soal: "19. Sebuah angka dibagi 5 dan hasilnya adalah 12. Berapakah angka tersebut?",
    options: [
      "50",
      "60",
      "70",
      "80"
    ],
    jawaban: 1
  },
  {
    soal: "20. Jika panjang sisi sebuah kubus adalah 5 cm, maka volume kubus tersebut adalah...",
    options: [
      "125 cm³",
      "150 cm³",
      "100 cm³",
      "75 cm³"
    ],
    jawaban: 0
  }
];

const timerDisplay = document.getElementById("timer");
const submitBtn = document.getElementById("submitBtn");

let waktu = 10 * 60;
let timerInterval = setInterval(() => {
  let menit = Math.floor(waktu / 60);
  let detik = waktu % 60;
  timerDisplay.innerText = `Sisa waktu: ${menit}:${detik < 10 ? '0' : ''}${detik}`;
  waktu--;

  if (waktu < 0) {
    clearInterval(timerInterval);
    submitBtn.click(); 
    timerDisplay.innerText = "Waktu habis!";
  }
}, 1000);

questions.forEach((q, i) => {
  const container = document.createElement("div");
  container.classList.add("question");
  container.innerHTML = `<p>${i + 1}. ${q.soal}</p>`;
  q.options.forEach((opt, idx) => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="radio" name="q${i}" value="${idx}"> ${opt}`;
    container.appendChild(label);
  });
  quizForm.appendChild(container);
});

submitBtn.addEventListener("click", function(e) {
  e.preventDefault();
  let skor = 0;

  questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name=q${i}]:checked`);
    if (selected && parseInt(selected.value) === q.jawaban) {
      skor++;
    }
  });

  resultDiv.innerText = `Skor Anda: ${skor} / ${questions.length}`;
  clearInterval(timerInterval);
});
