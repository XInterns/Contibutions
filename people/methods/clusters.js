var HashMap=require('hashmap')

var clusters=["knowledge sharing","mobile","recruitment","open source","development","technologies",
"organising","devops","companies","clients","languages","Testing"];

var cluster_values=new HashMap();

var values=[{1: "workshop",
             2:"xke",
             3:"Thedevtheory",
             4:"Webinar",
             5:"Conference",
             6:"Bootcamp",
             7:"Pydata",
             8: "Ignite",
             9: "Meetup",
            },
            {
                1:"xke",
                2:"thedevtheory",
                3:"webinar",
                4:"conference",
                5:"bootcamp",
                6:"Pydata",
                7:"ignite",
                8:"meetup",
                9:"workshop"
            },
            {1:"android",
            2:"mobile",
            3:"ios",
            4:"phone",
            },
            {
            1:"amity",
            2:"UPES",
            3:"Dtu",
            4:"recruitment",
            5:"recruiting",
            6:"recruit"
            },
            {1:"hiring",
            2:"Amity",
            3:"UPES",
            4:"Dtu",
            5:"hire",
            
            },
            {1:"open source",
            2:"github",
            3:"git",
            4:"development",
            
            } ,
            {1:"node",
            2:"js",
            3:"android",
            4:"ios",
            5:"react",
            6:"ruby",
            7:"rails",
            8:"rest",
            9:"server",
            10:"development",
            11:"develop"
            },
            {
            1:"Git",
            2:"Azure",
            3:"Machine learning",
            4:"Big Data",
            5:"Angular",
            6:"Cloud",
            7:"Devops",
            8:"Node",
            9:"Asp",
            10:"React",
            11:"Agile",
            12:"Shelly",
            13:"Haskell"
            },
            {1:"Hackathon",
            2:"Thedevthoery",
            3:"Recruitment",
            4:"Webinar",
            5:"Conference",
            },
            {1:"docker",
            2:"jenkins",
            3:"selenium",
            4:"travis",
            5:"devops"
            },
            {1:"Microsoft",
            2:"Xamarin",
            3:"Saxo",
            4:"Google",
            5:"Boston Scientific"
            },
            {1:"microsoft",
            2:"mckinsey",
            3:"xamarin",
            4:"saxo",
            5:"spicejet",
            6:"company",
            7:"companies"
            },
            {1:"rails",
            2:"python",
            3:"C",
            4:"js",
            5:"html",
            6:"css",
            7:"Php",
            8:"java",
            9:"javascript",
            10:"languages",
            11:"language"
            },
            {
             1: "units",
             2: "BDD",
             3: "TDD",
             4: "junit",
             5: "mocha",
             6: "chai",
             7: "testing",
             8: "unit"
            }

                  ];

for(var i=0;i<clusters.length;i++)
     {
         cluster_values.set(clusters[i],values[i]);
         
     }
module.exports=cluster_values;