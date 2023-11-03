//Using Map method 

//["Mike lives in London", "Tim lives in US", "John lives in Australia"] 

const users = [ 

  { 
    first_name: 'Mike', 
    location: 'London' 
  }, 

  { 
    first_name: 'Tim', 
    location: 'US' 
  }, 

  { 
    first_name: 'John', 
    location: 'Australia' 
  } 

]; 

    let ans=users.map((e)=>{
		return `${e.first_name} lives in ${e.location}`
	})
	console.log(ans)

