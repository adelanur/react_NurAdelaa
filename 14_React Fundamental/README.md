JSX (Javascript XML) : ekstensi javascript
Alasan Menggunakan JSX :
	•JSX dibuatkan berdasarkan fakta kalua logika rendering sangat terikat dengan logic UI
	•Saparation of Technology -> Saparation of Concerns
Menentukan atribut dengan JXS 
	•Tanda kutip untuk menentukan stri g literal
	•Kurung kurawal untuk menyematkan ekspresi javaScript
Komponen React : bagian kode yang dapat digunakan Kembali untuk menentukan tampilan, behavior , state sebagai UI

Props (Properties)
	•membuat kita dapat memberikan argument data pada componen  
	•membuat komponen menjadi lebih dinamis
	•props dioper ke component sama seperti memberikan atribut pada tag HTML
	•props pada component adalah read-only dan tidak dapat diubah
React Lifecycle : 
	•Mounting
	•Updating
	•Unmounting
Lifecycle method :
	•Render() : sering dipakai, , required pada class component , pure function, tidak boleh ada setState()
	•componentDidMount() : dipanggil sat component telah dirender untuk pertama kali. Tempat untuk pemanggilan API , boleh ada setState()
	•componentDidUpdate() : dipanggil Ketika  terjadi update (props/state berubah)
	•componentWillUnmount() : dipanggil Ketika component akan dihancurkan, cocok untuk clean up actions
Render Bersyarat :
	•menggunakan if
	•inline if dengn operator &&
	•inline if-Else dengan ternary conditional operator
	•mencegah komponen untur rendering
Struktur Direktori : react tidak memiliki pendapat (unopinionated) tentang bagaimana cara memasukkan file ke folder
Styling : Classes dan CSS, Atribut Style , Modul CSS
