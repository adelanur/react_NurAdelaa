*GraphQL adalah sebuah bahasa kueri (query language) yang digunakan untuk mengambil data dari server oleh aplikasi klien. Dalam GraphQL, aplikasi klien dapat menentukan secara tepat data apa yang ingin diambil dari server, dan server hanya akan mengirimkan data yang diminta oleh klien.
Ada 3 fitur utama di klien GraphQL:
•	Query, mendapatkan data berdasarkan query tertentu yang kita definisikan
•	Mutasi, masukkan, perbarui, hapus data
•	Berlangganan, dapatkan tanggal terupdate secara realtime/berdasarkan event

Dengan graphQL kita bisa mendapatkan data persis seperti yang kita butuhkan. Dan menentukan bidang apa yang ingin dapatkan dan graphQL akan melakukannya.

*Mutasi pada dasarnya adalah fungsi untuk memperbarui, menyisipkan, dan menghapus data. Kita perlu mendefinisikan operasi apa yang kita ingin lakukan (berdasarkan operasi yang tersedia di server graphql Anda) dan kemudian tentukan data apa yang harus dikembalikan oleh GraphQL.
*Subscriptions adalah fitur GraphQL yang memungkinkan server mengirim data ke kliennya saat acara tertentu terjadi. Biasanya diimplementasikan dengan WebSockets. Dalam pengaturan itu, server memelihara koneksi stabil ke klien langganannya. Ketika data dimodifikasi maka client akan mendapatkan update data secara langsung secara real-time.

*Hasura adalah layanan yang menyediakan graphql dan RestAPI. Dikelola penuh di cloud hasura atau dihosting sendiri
*Heroku adalah platform cloud sebagai layanan mendukung beberapa bahasa pemrograman. Heroku juga menyediakan database postgres gratis.
*Apollo Client adalah sebuah klien GraphQL open-source yang digunakan untuk mempermudah pengembangan aplikasi front-end yang menggunakan GraphQL sebagai teknologi backend. Apollo Client memungkinkan para developer untuk melakukan query dan mutation ke server, mengelola state aplikasi, serta melakukan caching data yang diambil dari server.
