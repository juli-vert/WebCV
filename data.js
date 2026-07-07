const data = ( ()=> {
    const vars = {
        'letter' : "With 20 years of experience in the IT industry, I’ve grown from a curious trainee into a versatile professional—always eager to tackle new challenges. While I jokingly consider myself a 'jack of all trades, master of none', my real strength lies in my ability to adapt, learn, and contribute to virtually any aspect of IT. As a proactive and self-motivated engineer, I excel at analyzing both business and IT environments to deliver tailored, effective solutions. I’m passionate about problem-solving, constantly exploring new technologies, and sharing knowledge with others. I believe that collaboration and mutual growth create the strongest teams—teams where every member has the opportunity to shine. With a diverse skill set, I thrive in a wide range of IT domains, from networking and virtualization to storage and software development. My background equips me to adapt quickly and make meaningful contributions in dynamic, technology-driven environments. My hands-on approach, combined with strategic oversight, enables me to excel in roles requiring both technical expertise and leadership. I thrive on continuous learning and believe that no challenge is insurmountable. Let’s connect to exchange ideas and explore opportunities to collaborate!",
        'personal' : {
            'name': 'Pere Gil',
            'contact' : [
                {
                    'method':'email',
                    'url':'mailto:pere.gil_at_gmail_dot_com'
                },
                {
                    'method':'github',
                    'url': 'https://github.com/juli-vert'
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
                'title': 'Lead Software Engineer',
                'where': 'New Relic',
                'period': 'Jan 2021 - Current',
                'details': "Leading a Core Infrastructure team in architecting and delivering a cloud-native application routing platform, unifying API gateway, load balancing, proxy, and security services on Kubernetes across public cloud environments.<br>Architected and automated end-to-end provisioning and domain configuration workflows, scaling system capacity to 140,000+ RPS while minimizing infrastructure overhead.<br>Spearheaded the engineering team responsible for New Relic’s UI traffic entry point, directing global CDN and DNS strategies to ensure high availability and low latency.",
            },
            {
                'title': 'IT Infrastructure Manager & Tech Lead',
                'where': 'Telemedicine clinic',
                'period': 'Jul 2015 - Dec 2020',
                'details': "Engineered and managed a global network infrastructure spanning 5 data centers (Spain, Sydney, UK, Sweden, France), 4 offices, and hundreds of remote users, ensuring 99.9% uptime with BGP and IPSec VPNs.<br>Architected the company's core compute platform using VMware, Windows/Linux servers, and NetApp storage solutions to support all key business systems.<br>Provided technical leadership and mentorship for the IT team, overseeing project management and fostering a culture of technical excellence.<br>Spearheaded R&D initiatives for new teleradiology products, developing proofs-of-concept (PoCs) and production-ready assets in Python, JavaScript, and .NET.<br>Developed a full-stack online radiologist assessment platform during the pandemic, fully integrated with a web-based DICOM viewer and automated reporting, which enabled the company to continue its recruitment process without interruption.",
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
                'details': 'Mainly focused in OS and Networks<br>Grade: 6.54',
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
                'expertise': 'Routing, Switching, Firewalls, Network programmability, Load Balancing, K8s API Gateway, Istio',
            },
            {
                'name': 'Virtualization',
                'expertise': 'VMware, Docker'
            },
            {
                'name': 'Storage',
                'expertise': 'Netapp, NAS, SAN, iSCSI',
            },
            {
                'name': 'SRE & DevOps',
                'expertise': 'Kubernetes, Helm, ArgoCD, AWS',
            },
            {
                'name': 'Development',
                'expertise': 'Go, Python, Javascript',
            }
        ]
    }
    return  {
        data: () => {
            return vars
        }

    }; 
    
})();
