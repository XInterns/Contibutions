var clusters=["knowledge sharing","workshop","mobile","recruitment","hiring","open source","development","technologies",
"organising","devops","companies","clients","languages","testing"];

var cluster_values=new HashMap();

var values=[{
             1:"xke",
             2:"thedevtheory",
             3:"webinar",
             4:"conference",
             5:"bootcamp",
             6:"Pydata",
             7:"ignite",
             8:"meetup",
             9:"knowledge sharing"
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
            1:"git",
            2:"azure",
            3:"machine learning",
            4:"big Data",
            5:"angular",
            6:"cloud",
            7:"devops",
            8:"node",
            9:"asp",
            10:"react",
            11:"agile",
            12:"shelly",
            13:"haskell",
            14:"technologies",
            15:"technology"
            },
            {
            1:"hackathon",
            2:"thedevthoery",
            3:"recruitment",
            4:"webinar",
            5:"conference",
            6:"organising",
            7:"organise",
            8:"organised"
            },
            {1:"docker",
            2:"jenkins",
            3:"selenium",
            4:"travis",
            5:"devops"
            },
            {1:"microsoft",
            2:"github",
            3:"xamarin",
            4:"saxo",
            5:"google",
            6:"boston scientific",
            7:"client",
            8:"clients"
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
