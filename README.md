
# Skripsi Data Logger - Server Side

Proyek ini adalah **server side** untuk data logger yang berfungsi menerima data suhu dari Arduino dan menyimpannya ke database. Proyek ini dibangun menggunakan **Node.js** dan **Express**, serta menggunakan **Sequelize** sebagai ORM untuk manajemen database.

## Fitur
- Menerima data suhu dari Arduino melalui endpoint API.
- Menyimpan data suhu ke dalam database.
- Menampilkan data suhu melalui endpoint API.

## Persyaratan Sistem
- **Node.js** (v14.x atau lebih baru)
- **npm** (v6.x atau lebih baru)
- Database **MySQL** atau **MariaDB**

## Instalasi

1. **Clone repository** ini:
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

Contoh konfigurasi database:

```json
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_name",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

## Migrasi Database
Jalankan migrasi untuk membuat tabel yang dibutuhkan di database:

```bash
npx sequelize db:migrate
```

## Menjalankan Aplikasi

Untuk menjalankan aplikasi dalam mode development, gunakan perintah berikut:

```bash
npm run dev
```

Aplikasi ini akan berjalan pada port yang diatur di file konfigurasi atau pada default port `3000`.

## Endpoint API

1. **POST /loggers**  
   Menerima data suhu dari Arduino dan menyimpannya ke database.  
   Contoh request:
   ```bash
   curl -X POST http://localhost:3000/loggers    -H "Content-Type: application/json"    -d '{"temperature": 25.5, "timestamp": "2024-09-13T12:34:56Z"}'
   ```

2. **GET /loggers**  
   Mengambil semua data suhu yang telah tersimpan di database.  
   Contoh request:
   ```bash
   curl http://localhost:3000/loggers
   ```

## Struktur Proyek

- `controllers/`: Berisi logika bisnis aplikasi dan menangani request.
- `models/`: Berisi definisi model database, menggunakan Sequelize.
- `routes/`: Berisi routing untuk API yang menghubungkan endpoint dengan controller.
- `migrations/`: Berisi skrip migrasi database untuk membuat atau memodifikasi tabel.

## Catatan Tambahan

- Pastikan database MySQL atau MariaDB sudah berjalan sebelum menjalankan aplikasi.
- Pastikan untuk mengatur konfigurasi database dengan benar di `config/config.json` sebelum memulai aplikasi.
