
# Skripsi Data Logger - Server Side

Proyek ini adalah server side untuk data logger yang berfungsi menerima data suhu dari Arduino dan menyimpannya ke database. Proyek ini dibangun menggunakan Node.js dan Express serta menggunakan Sequelize sebagai ORM untuk manajemen database.

## Fitur
- Menerima data suhu dari Arduino melalui endpoint API.
- Menyimpan data suhu ke dalam database.
- Menampilkan data suhu melalui endpoint API.

## Persyaratan Sistem
- Node.js (v14.x atau lebih baru)
- npm (v6.x atau lebih baru)
- Database MySQL atau MariaDB

## Instalasi
1. Clone repository ini:
    ```bash
    git clone https://github.com/username/repository.git
    ```

2. Masuk ke direktori proyek:
    ```bash
    cd skripsi-datalogger-serverside-main
    ```

3. Instal dependensi menggunakan npm:
    ```bash
    npm install
    ```

## Konfigurasi
Atur konfigurasi database di `config/config.json` sesuai dengan environment yang digunakan (development, test, atau production).

## Migrasi Database
Jalankan migrasi untuk membuat tabel yang dibutuhkan di database:

```bash
npx sequelize db:migrate

## Menjalankan Aplikasi, Endpoint API, dan Struktur Proyek

### Menjalankan Aplikasi
Untuk menjalankan aplikasi dalam mode development, gunakan perintah berikut:

```bash
npm run dev

### Endpoint API

- **POST /loggers**: Menerima data suhu dari Arduino.
- **GET /loggers**: Mengambil data suhu yang telah tersimpan di database.

### Struktur Proyek

- `controllers/`: Berisi logika bisnis aplikasi.
- `models/`: Berisi definisi model database.
- `routes/`: Berisi routing untuk API.
- `migrations/`: Berisi skrip migrasi database.
