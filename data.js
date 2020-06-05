const data = ( ()=> {
    const vars = {
        'letter' : "All-purpose engineer with more than 15 years of experience in the IT industry. Strong knowledge about Infrastructure, reliability, high availability and maintanibility.<br>As a proactive and self-motivated engineer-minded IT professional, I'm trying to do a lot of things by my own. Trying to analyze the business needs, the IT related environment and the budget to provide the most suitable solutions.<br>Despite of being a network engineer for the vast majority of my career I've always tried to do as many things as possible, automatation with custom scripts, building my own solutions using the available tools at every moment and nowadays building a lot of things with python and web fronted.",
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
                'title': 'IT technical Lead',
                'where': 'Telemedicine clinic',
                'period': 'Jul 2015 - Current',
                'details': "As Infrastructure manager of TMC I'm in charge of the maintenance of the key systems of the company, these include: the complex Network distributed in 4 Data Centres and 4 offices and Remote users (about 300) using BGP and IPSec VPNs, VMware, Windows/Linux servers and SAN Netapp Storage. <br>As IT technical Lead: Managing the whole IT team from the technical perspective, being the technical reference of the team, as well as, managing all the technical projects within the colleagues. <br>In addition to that, I'm leading some of the I+D projects trying to build new products according with the business needs in the area of the Telemedicine. As a part of this area, I'm developing some PoCs, models or even production assets in Python/JS/c#, creating redundant Infrastructure architectures",
            },
            {
                'title': 'Network Engineer',
                'where': 'NTT Europe',
                'period': 'Mar 2013 - Jun 2015',
                'details': 'Working about 6 months exclusively in a huge Data Centre migration project in London. <br>Managing the Data Centre network infrastructure in Europe of NTT mainly based in Cisco Nexus. <br>Deploying the Enterprise Cloud product abroad. <br> Developing a templating system in Python/django for configuraiton automation',
            },
            {
                'title': 'Technical Architect',
                'where': 'Atlas IT',
                'period': 'Oct 2008 - Mar 2013',
                'details': 'Direct interaction with client. Managing dedicated network infrastructure for about 15 customers and taking care of the shared one. I deployed a "cloud-style infrastructure" for PaaS in Sydney using Vmware, Netapp, Cisco and Fortinet',
            },
            {
                'title': 'IT technician & Marketing manager',
                'where': 'AD+ Medical',
                'period': 'Sep 2004 - Oct 2008',
                'details': 'Mainly focused on advertisement and clinics design using Photoshop, Corel Draw, Freehand, Floorplan and Autocad. <br>Supporting local users in IT requests',
            }
        ],
        'studies' : [
            {
                'title': 'Computer Science Engineer',
                'where': 'UPC',
                'period': '2001-2010',
                'details': 'Mainly focused in OS and Networks<br>NFC of 6.54',
            },
            {
                'title': 'Fortinet Certified',
                'where': 'Pearson VUE',
                'period': 'Dec 2014',
                'details': 'FCNSA & FCNSP',
            },
            {
                'title': 'ITIL certified',
                'where': 'EXIN',
                'period': 'Feb 2014',
                'details': 'ITIL v3 Foundation',
            },
            {
                'title': 'OpenStack Certified',
                'where': 'Mirantis',
                'period': 'Dec 2015',
                'details': 'MCA200',
            },
            {
                'title': 'Netapp course',
                'where': 'Arrow ECS',
                'period': '2018',
                'details': 'ONTAP 9 Cluster and Data Protection Administration',
            },
            {
                'title': 'DevOps tools',
                'where': 'Apium Academy',
                'period': '2020',
                'details': 'Docker and Kubernetes',
            },
            
        ],
        'skills' : [
            {
                'name': 'Networking',
                'expertise': 'Routing, Switching, Firewalls, Network programmability ',
            },
            {
                'name': 'Virtualization',
                'expertise': 'VMware 5,6',
            },
            {
                'name': 'Storage',
                'expertise': 'Netapp, NAS, SAN, iSCSI',
            },
            {
                'name': 'Devops',
                'expertise': 'Docker, Swarm, K8s, AWS, GCP',
            },
            {
                'name': 'Programming',
                'expertise': 'Python, Flask, Javascript',
            }
        ]
    }
    return  {
        data: () => {
            return vars
        }

    }; 
    
})();
