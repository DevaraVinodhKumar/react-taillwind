import React from 'react'

const NavBar = () => {
  return (
    <section>
        <div className='flex p-2'>
            <h2>Color Generator</h2>
            <div>
                <input type="color"/>
                <input type="text" placeholder='#ff102g' />
                <input type="submit" />
            </div>

        </div>
    </section>
  )
}

export default NavBar