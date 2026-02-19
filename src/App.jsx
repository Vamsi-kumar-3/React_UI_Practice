import React from 'react'
import Section1 from './components/section1/section1'

import Navbar from './components/section1/Navbar'
const App = () => {
  const users=[
    {img:'https://i.pinimg.com/1200x/6d/e9/d7/6de9d78f36f4813664b601456b6513bd.jpg',
      intro:"“As long as I’m alive, there are infinite chances!”",
      
    },
    {img:'https://i.pinimg.com/736x/94/bc/58/94bc581b13bb6c75acb728d326099620.jpg',
      intro:"“The longer you live, the more you realize that reality is just pain and suffering.”",
      
    },
    {img:'https://i.pinimg.com/1200x/ef/3c/0a/ef3c0a95d051c9112ec10f2a45830add.jpg',
      intro:"“Even the strongest enemy has a weakness.”",
      
    }
  ]
  return (
    <div>
     
       <Section1 users={users} />
       
      
    </div>
  )
}

export default App
