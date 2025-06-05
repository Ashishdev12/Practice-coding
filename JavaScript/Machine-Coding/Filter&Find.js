// diff between filter and find method


const users = [
    {firstName: 'John', lastName: 'Doe', age: 25},
    {firstName: 'Jane', lastName: 'Doe', age: 30},
    {firstName: 'Jack', lastName: 'Doe', age: 35},
    {firstName: 'Jill', lastName: 'Doe', age: 40},
    {firstName: 'Joe', lastName: 'Doe', age: 45},
  ]

//   const result = users.filter((user)=> {
//     if(user.age <= 30){
//         return user
//     } 
//   })

//   console.log(result);

  const result = users.find((user)=> {
    if(user.age <= 30){
        return user
    } 
  })

  console.log(result);