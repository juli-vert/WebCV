const data = ( ()=> {
    const vars = {
        'personal' : {
            'name': 'Pere Gil',
            'contact' : [
                {
                    'method':'email',
                    'url':'mailto:pere.gil_at_gmail_dot_com'
                },
                {
                    'method':'github',
                    'url': 'https://github.com/julivert82'
                },
                {
                    'method':'linkedin',
                    'url': 'https://www.linkedin.com/in/pereg/'
                },
            ],
            'description': 'Computer Science Engineer',
        },
        'professional' : [
            {
                'title': 'Camarero',
                'period': '2000AC',
                'details': 'Ipse LorumIpse LorumIpse LorumIpse LorumIpse LorumIpse LorumIpseLorumIpse LorumIpseLorumIpse LorumIpseLorumIpse LorumIpseLorumIpse LorumIpse LorumIpse LorumIpse Lorum',
            },
            {
                'title': 'Flipadillo',
                'period': '2000AC',
                'details': 'Siempre he sido un flipadillo',
            },
            {
                'title': 'Ipse Lorum',
                'period': '2000AC',
                'details': 'Ipse Lorum',
            },
            {
                'title': 'Ipse Lorum',
                'period': '2000AC',
                'details': 'Ipse Lorum',
            }
        ],
        'studies' : [
            {
                'title': 'Ipse Lorum',
                'period': '2000AC',
                'details': 'Ipse LorumIpse LorumIpse LorumIpse LorumIpse LorumIpse LorumIpse LorumIpse Lorum',
            },
            {
                'title': 'Ipse Lorum',
                'period': '2000AC',
                'details': 'Ipse Lorum',
            },
            {
                'title': 'Ipse Lorum',
                'period': '2000AC',
                'details': 'Ipse Lorum',
            }
        ],
        'skills' : [
            {
                'name': 'Ipse Lorum',
                'expertise': 'Ipse Lorum master',
            },
            {
                'name': 'Ipse Lorum',
                'expertise': 'Ipse Lorum beginner',
            },
        ]
    }
    return  {
        data: () => {
            return vars
        }

    }; 
    
})();
