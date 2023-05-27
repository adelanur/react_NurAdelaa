*Subscriptions adalah fitur GraphQL yang memungkinkan server mengirim data ke kliennya saat acara tertentu terjadi. Biasanya diimplementasikan dengan WebSockets. Dalam pengaturan itu, server memelihara koneksi stabil ke klien langganannya. Ketika data dimodifikasi maka client akan mendapatkan update data secara langsung secara real-time.
*Subscriptions biasanya diimplementasikan dengan WebSockets. 

*implementasi subscription dengan apollo client 
1. setup awal mengonfigurasi dan menghubungkan Apollo Client dengan server GraphQL Anda menggunakan `ApolloProvider`
2. membuat fungsi gql dari Apollo Client untuk mendefinisikan subscription 
3. menggunakanhook useSubscription untuk mengatur subscription.
4. mengirimkan Subscription ke Server.