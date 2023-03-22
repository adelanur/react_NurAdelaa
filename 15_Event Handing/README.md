*STATE : Data private dalam component
 1. Data bisa dimodifikasi 
 2. Bila terjad modifikasi akan merendr ulang
 3. Sifatnya Asynchronous
 4. Dipakai dalam class

PERBEDAAN Stateful component & Stateless component

*Stateful component :memiliki state dibuat dengan class, kelebihan dari class component adalah memiliki lifecycle
 -tahu tentang aplikasi
 -melakukan pengambilan data (fetching)
 -berinteraksi dengan aplikasi
 -tidak bisa digunakan lagi
 -meneruskan status dan data ke anak-anaknya

*Stateless component : tidak memiliki state hanya prop , biasanya menggunakan function karena lebih ringkas.
 -tidak tahu tentang aplikasi
 -tidak melakukan pengambilan data (fetching)
 -tujuan utama visualisasi
 -bisa digunakan lagi
 -hanya berinteraksi dengan induk langsung

HADLING EVENT : metode unntuk menangani sebuah event/aksi yang diberikan pengguna kepada sebuah komponen
