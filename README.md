#Latihan
ini adalah seri latihan saya tentang javascript router

```js
const router = new VanillaRouter({
        type: 'history',
        routes: {
            '/': 'home',
            '/about': 'about',
            '/profile': 'profile',
            '/products': 'products',
            '/transaksi': 'transaksi',
            '/laporan': 'laporan',
            '/konfirmasi': 'konfirmasi',
            '/belanja': 'belanja',
        },
    })
    .listen()
    .on('route', async(e) => {
    
    // console.log(e.detail.route, e.detail.url);

})
```