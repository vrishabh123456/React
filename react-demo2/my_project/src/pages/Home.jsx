import React from 'react'

const Home = () => {
  return (
    <div>
        <h6 className='heading'>This is Home Page</h6>
    </div>
  )
}

  // const data = async () => {
  //   let ecodata = await fetch('http://localhost:3000/ecomall')
  //   .then(ecodata =>  ecodata.json())
  //   .then(ecodata =>  console.log(ecodata))
  // }


  // const data = async () => {
  //   try {
  //     let ecodata = await fetch('http://localhost:3000/ecomall')
  //     // .then(ecodata =>  ecodata.json())
  //     // .then(ecodata =>  console.log(ecodata))
  //     console.log(ecodata);
      
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // data()

  const data = () => {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:3000/ecomall')
        .then(response => {
          resolve(response); 
        })
        .catch(error => {
          reject(error); 
        });
    });
  };
  
  data()
    .then(ecodata => {
      console.log(ecodata);
    })
    .catch(error => {
      console.log(error);
    });

  console.log('Home Data', data);
  


export default Home