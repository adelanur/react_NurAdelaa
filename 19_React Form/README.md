*Penggunaan form digunakan untuk menghandle inputan dari user

*Controlled Component : sebuah elemen masukan form yang nilainya dikontrol oleh react

*Uncontrolled Component : kita harus menarik nilai dari field saat kita membutuhkannya. bisa terjadi ketika formulir di submit.

*Elemen formulir controlled jika kita menetapkan nilainya melalui prop seperti elemen pada input , checkboxes , radios, select and textareas. Tetapi masing-masing elemen formulir memiliki prop yang berbrda untuk menetapkan nilai tersebut.

*pada form controlled dan uncontrolled memiliki kelebihannya sendiri, perlu evaluasi situasi secara spesifik dan memilih pendekatan apa yang cocok sesuai kondisi.

*Alasan validasi form :
	1. mencari input data yang benar dan sesuai format.
	2. melindungi akun pengguna
	3. melindungi sistem/aplikasi

*Tipe validasi :
- Cliend side validtion : dilakukan agar data input seseuai dengan kebutuhan form, sebelum data form dikirim ke server. Kelebihan dari sisi klien adalah user-friendly karna apabila ada kesalahan pengguna akan langsung diberitahu.

   	1. Built-in form validation : menggunakan fitur validasi langsung dari HTML5. validasi ini tidak membutuhkan javascript, performa lebih baik , tapi tidak bisa dikustom , pesan error cukup kaku. contoh : required, minlength, maxlength, min , ma, type dan patten.
	
	
	2. Menggunakan javascript. bisa dicustom tapi perlu membuat sendiri.