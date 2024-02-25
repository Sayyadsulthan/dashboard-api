# Project Overview

    1 [`Installation`]
    2 [`API usage`]

# 1 Installation

    To Install all the dependencies use command
        npm i / npm install

    To num the project use command
        npm start

    To close the terminal use command
        control + C

    # To run the command you need to first run the command which is commented in index.js file
        1) First uncomment the method runTableQuery();
            and run using npm start
        2) Second uncomment the method  addDataTOTable();
            and run using npm start

    # After the successfull running the command
        close the terminal use command
            control + C
    comment the methods which are used above runTableQuery(); and addDataTOTable();

# api usage

        try to use in localhost

# 1) To get transactions

        eg:
        "http://localhost:8080/api/transactions?page=1"

        Response:
             "message": "Transactions data of page 1",
    "data": [
        {
            "id": 11,
            "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 25",
            "price": "109.00",
            "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultraslim notebooks. Supports TRIM command Garbage Collection technology RAID and ECC Error Checking  Correction to provide the optimized performance and enhanced reliability.",
            "category": "electronics",
            "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
            "sold": false,
            "dateofsale": "2021-09-27T14:59:54.000Z"
        },
        {
            "id": 12,
            "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
            "price": "798.00",
            "description": "Expand your PS4 gaming experience Play anywhere Fast and easy setup Sleek design with high capacity 3year manufacturers limited warranty",
            "category": "electronics",
            "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
            "sold": true,
            "dateofsale": "2022-03-27T14:59:54.000Z"
        },
        "success": true
        ]

# 2) To get combined data for chart

          eg:
        "http://localhost:8080/api/combined-data?month=6"

        Resopnse:
    {
    "success": true,
    "apiData1": {
        "message": "Data for the month: 6",
        "data": {
            "totalSales": "17148.60",
            "totalSoldItem": "4",
            "totalUnSoldItem": "6"
        },
        "success": false
    },
    "apiData2": {
        "message": "pie data from the month 6",
        "data": {
            "xCategory": [
                {
                    "id": 29,
                    "title": "WD 2TB Elements Portable External Hard Drive  USB 30 ",
                    "price": "640.00",
                    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity Compatibility Formatted NTFS for Windows 10 Windows 8.1 Windows 7 Reformatting may be required for other operating systems Compatibility may vary depending on users hardware configuration and operating system",
                    "category": "electronics",
                    "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
                    "sold": false,
                    "dateofsale": "2022-06-27T14:59:54.000Z"
                },
                {
                    "id": 50,
                    "title": "SanDisk SSD PLUS 1TB Internal SSD  SATA III 6 Gbs",
                    "price": "1090.00",
                    "description": "Easy upgrade for faster boot up shutdown application load and response As compared to 5400 RPM SATA 2.5 hard drive Based on published specifications and internal benchmarking tests using PCMark vantage scores Boosts burst write performance making it ideal for typical PC workloads The perfect balance of performance and reliability Readwrite speeds of up to 535MBs450MBs Based on internal testing Performance may vary depending upon drive capacity host device OS and application.",
                    "category": "electronics",
                    "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
                    "sold": false,
                    "dateofsale": "2022-06-27T14:59:54.000Z"
                }
            ],
            "yCategory": [
                {
                    "id": 39,
                    "title": "Opna Womens Short Sleeve Moisture",
                    "price": "79.50",
                    "description": "100 Polyester Machine wash 100 cationic polyester interlock Machine Wash  Pre Shrunk for a Great Fit Lightweight roomy and highly breathable with moisture wicking fabric which helps to keep moisture away Soft Lightweight Fabric with comfortable Vneck collar and a slimmer fit delivers a sleek more feminine silhouette and Added Comfort",
                    "category": "women's clothing",
                    "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
                    "sold": true,
                    "dateofsale": "2022-06-27T14:59:54.000Z"
                },
                {
                    "id": 40,
                    "title": "DANVOUY Womens T Shirt Casual Cotton Short",
                    "price": "129.90",
                    "description": "95Cotton5Spandex Features Casual Short Sleeve Letter PrintVNeckFashion Tees The fabric is soft and has some stretch. Occasion CasualOfficeBeachSchoolHomeStreet. Season SpringSummerAutumnWinter.",
                    "category": "women's clothing",
                    "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
                    "sold": false,
                    "dateofsale": "2022-06-27T14:59:54.000Z"
                },],
                 "zCategory": [
                {
                    "id": 23,
                    "title": "Mens Cotton Jacket",
                    "price": "559.90",
                    "description": "great outerwear jackets for SpringAutumnWinter suitable for many occasions such as working hiking camping mountainrock climbing cycling traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father husband or son in this thanksgiving or Christmas Day.",
                    "category": "men's clothing",
                    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
                    "sold": false,
                    "dateofsale": "2022-06-27T14:59:54.000Z"
                }
            ],
        },
    },
         "apiData3": {
        "message": "the data of month 6",
        "data": [
            {
                "min": 0,
                "max": 100,
                "totalItems": 3
            },
            {
                "min": 101,
                "max": 200,
                "totalItems": 1
            },
            {
                "min": 201,
                "max": 300,
                "totalItems": 0
            },],
             "success": true
        },
    }
