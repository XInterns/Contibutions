var HashMap=require('hashmap');

var clusters=["knowledge sharing","workshop","workshops","mobile","recruitment","hiring","open source","development","technologies",
"organising","devops","companies","testing"];

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
            1:"recruitment",
            2:"recruiting",
            3:"recruit",
            4:"hire",
            5:"hired"
            },
            {1:"hiring",
             2:"hire",
             3:"hired",
             4:"recruit",
             5:"recruited"            
            },
            {1:"open source",
            2:"github",
            3:"git"            
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
            5:"Google",
            6:"boston scientific"
            },
            {
             1: "BDD",
             2: "TDD",
             3: "junit",
             4: "mocha",
             5: "chai",
             6: "testing",
             
            }

                  ];

for(var i=0;i<clusters.length;i++)
     {
         cluster_values.set(clusters[i],values[i]);
         
     }
module.exports=cluster_values;
