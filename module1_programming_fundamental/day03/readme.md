Apa itu git?
VCS(version control system) di mana git ini yang membantu programmer yang memanage 
- menyimpan history perubahan
- sehingga apabila ada error di kemudian hari
- kita ingin menggunakan versi lama, bisa dikembalikan
- pernah bikin tugas akhir atau skripsi, biasanya ada revisi

kenapa butuh git?
- lebih mudah dalam memanage projects
- disimpan dalam history

github atau gitlab versi cloud nya

feat artinya feature

- git init
- git add name_file
- git commit -m "feat: update perubahan"

<!-- di github -->
- git remote add origin linkRepository
- git push origin master

<!-- git branch -->
- berkolaborasi untuk project ketika sudah begitu besar
- branch master/main itu yang sudah fix dan tidak ada error, sebagai branch utama.
- kita ngga boleh otak-atik branch master, tapi harus buat branch baru untuk nge-develop
- ketika membuat fitur baru, harus bikin branch baru
- sebelum masuk production di master/main, biasanya ada QA
- melakukan bug fixing ngga boleh di branch master

<!-- cara buat branch baru -->
git checkout -b fauzan_feat_login


<!-- pull git -->
git pull origin master


- agar stay update, di branch baru harus di pull terlebih dahulu
