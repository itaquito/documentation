module.exports = {
    base: '/docs/',
    title: 'Pterodactyl Documentation',
    description: 'Leanr how to install and use Pterodactyl.',
    configureWebpack: {
        serve: {
            hot: {
                port: 9091,
            },
        },
    },
    themeConfig: {
        repo: 'pterodactyl/panel',
        docsRepo: 'pterodactyl/documentation',
        repoLabel: 'Contribute',
        editLinkText: 'Help us improve this page.',
        editLinks: true,
        nav: [
            {
                text: 'Get Started',
                link: '/panel/server_requirements/',
            },
            {
                text: 'API Reference',
                link: '/api/'
            },
            {
                text: 'Get Help',
                link: 'https://pterodactyl.io/discord'
            }
        ],
        sidebar: [
            {
                title: 'Project Information',
                collapsable: false,
                children: [
                    '/',
                    '/project/terms.md',
                ]
            },
            {
                title: 'Panel',
                collapsable: false,
                children: [
                    '/panel/getting_started',
                    '/panel/webserver_configuration',
                    '/panel/upgrading',
                ]
            },
            {
                title: 'Daemon',
                collapsable: true,
                children: [
                    '/',
                ]
            },
            {
                title: 'Tutorials',
                collapsable: false,
                children: [
                    '/tutorials/mysql_setup.md',
                    '/tutorials/creating_ssl_certificates.md',
                ],
            },
            {
                title: 'API Reference',
                collapsable: true,
                children: [
                    '/',
                ]
            }
        ]
    }
};