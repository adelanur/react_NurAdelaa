versioning : mengatur versi pada source code program 
version control system yang populer digunakan oleh developer dalam mengembangkan software secara bersama-sama yaitu git. 
Cara install GIT: 
-Masuk browser cari install git 
-Mulai Run administrator 
-Next page sampai finish dan terinstall

Set Up git : 
#git config  
$ git config --global user.name "nama" 
$ git config --global user.email "email" 

#start with init 
$ git init 
$ git remote add [remote_name] [remote_repo_url] 
$ git push -u [remote_name] [local_branch_name] 

#start with existing project, sart working on the project 
$ git clone [link repo github.git] 
$ cd my-projek
