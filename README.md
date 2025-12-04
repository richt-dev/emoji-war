⚔️ Emoji War: Puzzle Battle
Emoji War adalah game strategi berbasis web yang menggabungkan mekanik klasik Match-3 dengan elemen RPG Battle. Dibangun menggunakan framework Phaser 3, game ini menantang pemain untuk mengalahkan musuh dengan cara mencocokkan emoji yang merepresentasikan aksi militer (Serangan, Pertahanan, Pemulihan).

📋 Daftar Isi
Fitur Utama

Prasyarat Sistem

Struktur Proyek

Instalasi & Setup

Cara Bermain

Konfigurasi & Customization

Testing & Debugging

✨ Fitur Utama
Split-Screen Interface: Bagian atas untuk Battle Scene (animasi tarung), bagian bawah untuk Puzzle Grid.

RPG Elements: Sistem HP (Health Points), Armor, dan Mana.

Tactical Matching:

⚔️ Pedang: Menyerang musuh.

🛡️ Tameng: Menambah Armor.

❤️ Hati: Memulihkan HP.

⚡ Petir: Mengisi Ultimate Bar.

Particle Effects: Efek visual saat emoji pecah dan proyektil terbang ke arah musuh.

Responsive: Dapat dimainkan di Desktop dan Mobile (browser).

💻 Prasyarat Sistem
Sebelum memulai, pastikan PC/Laptop Anda sudah terinstal:

Node.js & npm (Disarankan versi LTS terbaru).

Cek dengan: node -v dan npm -v di terminal.

Code Editor (Disarankan VS Code).

Web Browser Modern (Chrome, Firefox, Edge).

Git (Opsional, untuk kloning repositori).

📂 Struktur Proyek
Berikut adalah susunan folder yang disarankan agar kode tetap rapi:

Plaintext

emoji-war/
├── assets/                  # Semua file gambar & audio
│   ├── sprites/             # Gambar emoji (png)
│   ├── background/          # Background battle
│   └── audio/               # SFX dan BGM
├── src/                     # Source code JavaScript
│   ├── scenes/
│   │   ├── BootScene.js     # Preloading assets
│   │   ├── BattleScene.js   # Logika UI atas (HP, Animasi)
│   │   └── GridScene.js     # Logika Puzzle (Match-3)
│   ├── main.js              # Entry point & Config Phaser
│   └── gameData.js          # Global state (HP, stats)
├── index.html               # File HTML utama
├── package.json             # Dependensi Node.js
└── README.md                # Dokumentasi ini
🛠️ Instalasi & Setup
Karena Phaser memerlukan server lokal untuk memuat aset (untuk menghindari error CORS), ikuti langkah ini:

Langkah 1: Clone atau Buat Folder
Bash

git clone https://github.com/username/emoji-war.git
cd emoji-war
(Atau cukup buat folder baru dan masukkan file-file Anda di sana)

Langkah 2: Inisialisasi Proyek (Jika mulai dari nol)
Jika Anda belum memiliki package.json, jalankan:

Bash

npm init -y
Langkah 3: Install Local Server
Kita akan menggunakan Vite (sangat cepat) atau http-server sederhana.

Bash

# Opsi A: Menggunakan Vite (Disarankan)
npm install vite --save-dev

# Opsi B: Menggunakan http-server global
npm install -g http-server
Langkah 4: Jalankan Game
Jika menggunakan Vite, tambahkan script di package.json: "dev": "vite", lalu jalankan:

Bash

npm run dev
Jika menggunakan http-server:

Bash

http-server . -c-1
Buka browser dan akses alamat yang muncul (biasanya http://localhost:5173 atau http://localhost:8080).

🎮 Cara Bermain
Mulai Game: Layar akan menampilkan musuh dan grid emoji.

Lakukan Match: Geser (swap) emoji untuk mencocokkan minimal 3 jenis yang sama secara horizontal atau vertikal.

Perhatikan Efeknya:

Mencocokkan Pedang akan mengurangi HP musuh.

Jika HP Musuh habis, Anda Menang.

Musuh akan menyerang secara berkala (timer). Jika HP Anda habis, Anda Game Over.

Strategi: Jangan hanya menyerang! Gunakan Tameng jika musuh bersiap melakukan serangan besar.

⚙️ Konfigurasi & Customization
Anda dapat mengubah keseimbangan permainan (Game Balance) dengan mengedit file src/gameData.js atau konstanta di awal file scene.

Contoh mengubah Damage:

JavaScript

// Di dalam BattleScene.js atau Config
const DAMAGE_PER_SWORD = 10; // Ubah angka ini untuk memperkuat serangan
const HEAL_PER_HEART = 5;    // Ubah angka ini untuk pemulihan
Mengganti Aset: Ganti file gambar di folder /assets/sprites/ dengan nama file yang sama untuk mengubah tampilan emoji tanpa merusak kode.

🧪 Testing & Debugging
Game tidak berjalan? Atau ada bug visual? Lakukan langkah ini:

1. Cek Console Browser
Klik kanan di browser game -> Inspect (atau tekan F12).

Pilih tab Console.

Lihat apakah ada teks berwarna merah (Error).

2. Isu Umum (Common Issues)
SecurityError: The operation is insecure.

Penyebab: Anda membuka index.html langsung dengan double-click (file:// protocol).

Solusi: Gunakan Local Server seperti langkah instalasi di atas.

Texture Not Found:

Penyebab: Nama file salah atau path di this.load.image tidak sesuai.

Solusi: Cek ulang nama file di folder assets (ingat, huruf besar/kecil berpengaruh/case-sensitive).

3. Debugging Visual Phaser
Anda bisa mengaktifkan mode debug fisika di main.js:

JavaScript

physics: {
    default: 'arcade',
    arcade: {
        debug: true // Ubah ke true untuk melihat kotak hitboxes
    }
}
📝 Credits & License
Game Design: Berdasarkan konsep "Emoji Match" Phaser Example.

Engine: Phaser 3

License: MIT License (Bebas dimodifikasi dan didistribusikan).

Catatan Pengembang: Jangan lupa untuk melakukan commit ke Git setiap kali Anda berhasil menambahkan fitur baru yang stabil! git commit -m "Added HP bar logic"
