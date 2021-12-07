import VanillaRouter from './vanillarouter.js';

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
        console.log(e.detail.route, e.detail.url);

        document.querySelector('section').innerHTML = await fetch('/' + e.detail.route + '.html').then((x) => x.text());
    });