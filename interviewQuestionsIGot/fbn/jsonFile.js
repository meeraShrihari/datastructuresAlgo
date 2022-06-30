const inputShape = {
    // Current items in the cart
    items: {
        // Azoxystrobin 2.08 Value Pick 2.5 gal jug
        'UPC_009-00030': {
            price: 42647,
            quantity: 1,
        },
        // Azoxystrobin 2.08 Value Pick 265 gal tote
        'UPC_009-00031': {
            price: 1749000,
            quantity: 1,
        },
        // Glyphosate 4lb Value Pick 275 gal tote
        'UPC_011-01375': {
            price: 291775,
            quantity: 1,
        },
    },
    metadata: {
        isd: {
            chemical: {
                '13621': {
                    chemical_id: 13621,
                    isd_id: 7080,
                    upcs: ['UPC_011-00450', 'UPC_011-00451', 'UPC_011-00452', 'UPC_011-01375'],
                    name: 'Glyphosate 4lb Value Pick',
                },
                '13710': {
                    chemical_id: 13710,
                    isd_id: 7323,
                    upcs: ['UPC_009-00030', 'UPC_009-00031'],
                    name: 'Azoxystrobin 2.08 Value Pick',
                },
            },
        },
        upcs: {
            // Azoxystrobin 2.08 Value Pick
            'UPC_009-00030': {
                amount_per_package: {
                    amount: 265,
                },
                availability: {
                    can_add_to_cart: true,
                },
                chemical_id: 13710,
                isd_id: 7323,
                // 265x1 gal tote, 265 gal tote
                package: {
                    amount_per_container: 265.0,
                    container: 'tote',
                    containers_per_package: 1,
                    package: 'tote',
                    package_capacity: 265,
                    unit: 'us_liquid_gallon',
                },
                price_mcu: 1749000,
                upc: 'UPC_009-00030',
            },
            // Azoxystrobin 2.08 Value Pick
            'UPC_009-00031': {
                amount_per_package: {
                    amount: 5,
                },
                availability: {
                    can_add_to_cart: true,
                },
                chemical_id: 13710,
                isd_id: 7323,
                // 2.5x2 gal jug, 5 gal case
                package: {
                    amount_per_container: 2.5,
                    container: 'jug',
                    containers_per_package: 2,
                    package: 'case',
                    package_capacity: 5,
                    unit: 'us_liquid_gallon',
                },
                price_mcu: 42647,
                upc: 'UPC_009-00031',
            },
            // Glyphosate 4lb Value Pick
            'UPC_011-00450': {
                amount_per_package: {
                    amount: 265,
                },
                availability: {
                    can_add_to_cart: false,
                },
                chemical_id: 13621,
                isd_id: 7080,
                // 265x1 gal tote, 265 gal tote
                package: {
                    amount_per_container: 265.0,
                    container: 'tote',
                    containers_per_package: 1,
                    package: 'tote',
                    package_capacity: 265,
                    unit: 'us_liquid_gallon',
                },
                price_mcu: 268975,
                upc: 'UPC_011-00450',
            },
            // Glyphosate 4lb Value Pick
            'UPC_011-00451': {
                amount_per_package: {
                    amount: 3975,
                },
                availability: {
                    can_add_to_cart: false,
                },
                chemical_id: 13621,
                isd_id: 7080,
                // 265x15 gal totes, 3975 gal tote
                package: {
                    amount_per_container: 265.0,
                    container: 'tote',
                    containers_per_package: 15,
                    package: 'tote',
                    package_capacity: 3975,
                    unit: 'us_liquid_gallon',
                },
                price_mcu: 4368525,
                upc: 'UPC_011-00451',
            },
            // Glyphosate 4lb Value Pick
            'UPC_011-00452': {
                amount_per_package: {
                    amount: 5,
                },
                availability: {
                    can_add_to_cart: true,
                },
                chemical_id: 13621,
                isd_id: 7080,
                // 2.5x2 gal jugs, 5 gal case
                package: {
                    amount_per_container: 2.5,
                    container: 'jug',
                    containers_per_package: 2,
                    package: 'case',
                    package_capacity: 5,
                    unit: 'us_liquid_gallon',
                },
                price_mcu: 6675,
                upc: 'UPC_011-00452',
            },
            // Glyphosate 4lb Value Pick
            'UPC_011-01375': {
                amount_per_package: {
                    amount: 275,
                },
                availability: {
                    can_add_to_cart: true,
                },
                chemical_id: 13621,
                isd_id: 7080,
                // 275x1 gal tote, 275 gal tote
                package: {
                    amount_per_container: 275.0,
                    container: 'tote',
                    containers_per_package: 1,
                    package: 'tote',
                    package_capacity: 275,
                    unit: 'us_liquid_gallon',
                },
                price_mcu: 291775,
                upc: 'UPC_011-01375',
            },
        },
    },
 };
 
 const transform = (input) => {
     // your code here
     var jsonObj = {}
     input = JSON.parse(input);
     Object.keys(input.metadata.isd.chemical).forEach(chemical => {
         
             {
                 chemical_id : cheimcal.chemical_id,
                 isd_id : cheimcal.isd_id,
                 name : cheimcal.name,
                 upsc: cheimcal.upcs.filter(up => {
                     if(up.upc === 'UPC_011-00452' || up.upc === 'UPC_011-01375') {
                         return up;
                     }
                 })
             }
     }
     
     return {}
 }
 /*
 metadata: {
        isd: {
            chemical: {
                '13621': {
                    chemical_id: 13621,
                    isd_id: 7080,
                    upcs: ['UPC_011-00450', 'UPC_011-00451', 'UPC_011-00452', 'UPC_011-01375'],
                    name: 'Glyphosate 4lb Value Pick',
                },
                '13710': {
                    chemical_id: 13710,
                    isd_id: 7323,
                    upcs: ['UPC_009-00030', 'UPC_009-00031'],
                    name: 'Azoxystrobin 2.08 Value Pick',
                },
            },
        },
     */
 console.log(transform(inputShape))



 /*
 



 
/*
metadata: {
       isd: {
           chemical: {
               '13621': {
                   chemical_id: 13621,
                   isd_id: 7080,
                   upcs: ['UPC_011-00450', 'UPC_011-00451', 'UPC_011-00452', 'UPC_011-01375'],
                   name: 'Glyphosate 4lb Value Pick',
               },
               '13710': {
                   chemical_id: 13710,
                   isd_id: 7323,
                   upcs: ['UPC_009-00030', 'UPC_009-00031'],
                   name: 'Azoxystrobin 2.08 Value Pick',
               },
           },
       },
    */
