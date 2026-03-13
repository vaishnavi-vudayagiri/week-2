 //assignment 1
 const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };
              /*const user2 = {
                id: 101,
                name: "Rani",
                preferences: {
                  theme: "bright",
                  language: "un"
                }
              };*/
    //1. Create a shallow copy of user
              let shallowcopy={...user}
              console.log(shallowcopy)
    //2. Change:
     shallowcopy.name='vaishh'
     console.log(shallowcopy)
    //  i. name in the copied object
    //  ii. preferences.theme in the copied object
        shallowcopy.preferences.theme ='bright'
         console.log(shallowcopy)
    // iii .Log both original and copied objects
         console.log(user)
         console.log(shallowcopy)
         
