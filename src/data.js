const data = {
    'orders': {
        'total': 276000,
        'arr': [2, 9, 3, 6, 4, 8],
        'labels' : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    },
    'sales' : {
        'total': 4679,
        'pcrt': 0.2814
    },
    'totalrevenue' : {
      2023 : {'total': 32500, 'totalGrowth': 0.78, 'companyGrowth': 0.62},
      2022 : {'total': 41200, 'monthCount': [18, 7, 15, 29, 18, 12, 9]},
      2021 : {'total': 15700, 'monthCount': [-13, -18, -9, -14, -5, -17, -15]},
      'labels' : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },
    'payments' : {
        'total': 2468,
        'pcrt': 0.1482
    },
    'revenue': {
        'total': 425000,
        'arr': [3, 15, 13, 5, 18, 9, 12],
        'labels': ['M', 'T', 'W', 'T', 'F', 'S', 'S']
    },
    'profit': {
        'total': 84686000,
        'pcrt': 0.682,
        'arr': [2, 9, 3, 6, 5, 10],
        'labels': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    'stats': {
        'totalSales': 42820,
        'totalOrders': 8258,
        'pcrt': 0.38,
        'details': [
            {'type': 'Electronic', 'desc': 'Mobile, Earbuds, TV', 'count': 80, 'sales': 82500},
            {'type': 'Fashion', 'desc': 'Tshirt, Jeans, Shoes', 'count': 45, 'sales': 23800},
            {'type': 'Decor', 'desc': 'Fine Art, Dining', 'count': 40, 'sales': 849},
            {'type': 'Sports', 'desc': 'Football, Cricket Kit', 'count': 20, 'sales': 99},
        ]
    },
    'records': {
        'income': {'total': 459100, 'pcrt': 0.429, 'arr': [24, 21, 30, 22, 42, 26, 35, 29], labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug'], 'currentWeekTotal': 6500, 'weekDiff': 39000},
        'expenses': {'total': 316500, 'pcrt': 0.278, 'arr': [24, 21, 30, 22, 42, 26, 35, 29], labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug'], 'currentWeekTotal': 7200, 'weekDiff': 16000},
        'profit': {'total': 147900, 'pcrt': 0.351, 'arr': [24, 21, 30, 22, 42, 26, 35, 29], labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug'], 'currentWeekTotal': 4200, 'weekDiff': 28000},
    },
    'transactions': [
        {'type': 'Paypal', 'desc': 'Send money', 'amount': 82.6, 'icon': 'paypal.png'},
        {'type': 'Wallet', 'desc': "Mac'D", 'amount': 270.69, 'icon': 'wallet.png'},
        {'type': 'Transfer', 'desc': 'Refund', 'amount': 673.91, 'icon': 'folder.png'},
        {'type': 'Credit Card', 'desc': 'Ordered Food', 'amount': -838.71, 'icon': 'credit-card.png'},
        {'type': 'Wallet', 'desc': 'Starbucks', 'amount': -203.33, 'icon': 'wallet.png'},
        {'type': 'Mastercard', 'desc': 'Ordered Food', 'amount': -92.45, 'icon': 'atm-card.png'},
    ],
    'activity': [
        {'title': '12 Invoices have been paid', 'content': {'desc': 'Invoices have been paid to the company', 'attachment': 'Invoices.pdf', 'icon': 'pdf.png'}, 'timestamp': '12 min ago'},
        {'title': 'Client Meeting', 
         'content': {'desc': 'Project meeting with john @10:15am', 
                     'members': [{'name': 'Steven Nash (Client)', 'icon': 'avatar2.jpg', 'position': 'CEO of ThemeSelection'}]}, 
         'timestamp': '45 min ago'},
        {'title': 'Create a new project for client', 
         'content': {'desc': '5 team members in a project', 
                    'members': [{'name': 'Howard Lloyd', 'icon': 'avatar3.jpg'},
                                {'name': 'Katie Lane', 'icon': 'avatar4.jpg'},
                                {'name': 'George Allen', 'icon': 'avatar5.jpg'},
                                {'name': 'Alice Cobb', 'icon': 'avatar6.jpg'},
                                {'name': 'Jeffrey Warner', 'icon': 'avatar7.jpg'}]}, 
         'timestamp': '2 days ago'},
    ],
    'distribution': {
        'browser': [
            {'type': 'Chrome', 'visits': 8920, 'pcrt': 0.6491, 'icon': 'chrome.png'},
            {'type': 'Safari', 'visits': 1290, 'pcrt': 0.1903, 'icon': 'safari.png'},
            {'type': 'Firefox', 'visits': 328, 'pcrt': 0.0326, 'icon': 'firefox.png'},
            {'type': 'Edge', 'visits': 142, 'pcrt': 0.0399, 'icon': 'edge.png'},
            {'type': 'Opera', 'visits': 85, 'pcrt': 0.0212, 'icon': 'opera.png'},
            {'type': 'Brave', 'visits': 36, 'pcrt': 0.0106, 'icon': 'brave.png'},
        ],
       'os': [
            {'type': 'Windows', 'visits': 475260, 'pcrt': 0.615, 'icon': 'windows.png'},
            {'type': 'Mac', 'visits': 89120, 'pcrt': 0.1567, 'icon': 'mac.png'},
            {'type': 'Ubuntu', 'visits': 38680, 'pcrt': 0.0582, 'icon': 'ubuntu.png'},
            {'type': 'Linux', 'visits': 30270, 'pcrt': 0.0503, 'icon': 'linux.png'},
            {'type': 'Chrome', 'visits': 8340, 'pcrt': 0.0325, 'icon': 'chrome.png'},
            {'type': 'Cent', 'visits': 2250, 'pcrt': 0.0176, 'icon': 'cent.png'},
        ],
       'country': [
            {'type': 'USA', 'visits': 87240, 'pcrt': 0.3812, 'icon': 'usa.png'},
            {'type': 'Brazil', 'visits': 42690, 'pcrt': 0.2823, 'icon': 'brazil.png'},
            {'type': 'India', 'visits': 12580, 'pcrt': 0.1382, 'icon': 'india.png'},
            {'type': 'Australia', 'visits': 4130, 'pcrt': 0.1272, 'icon': 'australia.png'},
            {'type': 'China', 'visits': 2210, 'pcrt': 0.711, 'icon': 'china.png'},
            {'type': 'France', 'visits': 1560, 'pcrt': 0.659, 'icon': 'france.png'},
        ],
    }
}

export default data;