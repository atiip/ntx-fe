# ntx-fe

Tech stack yang digunakan:
- Next.js (untuk menggantikan Vue.js)
- Zustand (State Management pengganti pinia)
- Shadcn (Untuk mempermudah membuat form)
- Tailwind CSS (Design antarmuka aplikasi)
- Frammer Motion (Animasi antar page)
- Zod (Validasi form)

Folder Structure
- /components 
    - Berisi general component yang akan digunakan di app
- /helper
    - Berisi Helper untuk integrasi graphql dengan next js menggunakan apollo client
    - Terdapat juga jawaban dari TASK 1 & Task 2
- /hooks
    - Berisi hooks yang akan digunakan di app, dalam case ini hanya use toast untuk menampilkan notifikasi apabila telah di lakukan tambah dan edit product
-/layout
    - Berisi layout yang akan digunakan di seluruh aplikasi
-/Store 
    - Berisi penggunaan zustand sebagai state management aplikasi untuk menghandle penambahan, edit dan delete product dari hasil query graphql

HERE: Task 1
Penjelasan Fungsi calculateTax (folder: src/helper/calculateTax.ts)
- Calculate tax sendiri memiliki 3 parameter income, age, dan dependent. Untuk menghitung calculate tax, pertama kita akan menghandle beberapa case seperti income lebih dari 0 atau bukan number, age kurang dari 0, serta dependent yang kurang dari 0 dan bukan number. Selanjutnya kita akan menghitung tax menggunakan func tax untuk menghandle apabila income melebihi 10,000 dan 50,000. Kemudian di cek apakah age nya lebih dari 65 jika iya, maka akan mendapatkan diskon sebesar 20 persen. Sedangkan untuk menghitung dependentnya kita bisa menggunakan recursive.
- Terdapat func helper untuk membantu pengecekan case-case tersebut.
    - Base case dari recursivenya adalah dependents === 0
    - kemudian recursive casenya taxnya akan dikurangi sebanyak 500 per dependentnya


HERE: Task 2
Penjelasan Fungsi calculateShippingCost (folder: src/helper/calculateShippingCost.ts)
- Calculate tax sendiri memiliki 3 parameter destination, weight, dan priority. Untuk menghitung Shipping Cost, pertama kita akan menghandle beberapa case seperti destiation selain domestic atau international, weight kurang dari 0 atau sama dengan 0, serta destination yang memiliki beberapa persyaratan untuk domestic dan international. Selain itu juga terdapat case untuk priority yang bukan standard, express atau priority. Pada func ini hanya dilakukan perhitungan biasa based on kebutuhan soal



HERE: Task 3
Penjelasan Test 3
- Saat ini yang telah selesai yaitu CRUD dari products menggunakan state management zustand dan mengimplementasikan loading untuk enhance user experience ketika menggunakan app
- Menampilkan data product dan category pada halaman product
- FITUR Create, Read, Update dan Delete dari product sudah selesai 
- Terdapat juga Toast yang digunakan untuk menyelesaikan TASK 3 ini untuk memberikan notifikasi kepada user bahwa data telah berhasil ditambahkan




