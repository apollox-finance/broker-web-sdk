module.exports = {
    rewrite: [
        {
            from: '/bapi/(.*)',
            to: 'https://www.apollox.finance/bapi/$1'
        },
        {
            from: '/fapi/(.*)',
            to: 'https://www.apollox.finance/fapi/$1'
        },
        {
            from: '/cloud-futures/(.*)',
            to: 'https://static.apollox.com/cloud-futures/$1'
        },
        {
            from: '/api/(.*)',
            to: 'https://static.apollox.com/api/$1'
        },
        {
            from: '/(.*)/futures/(.*)',
            to: '/index.html'
        }
    ],
    spa: 'index.html',
    directory: './',
    logFormat: 'stats'
}