import {} from 'react'
import { ContainerInput, MainInput } from './Search.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Search = ({query, setQuery}) => {
  return (
    <div className='flex flex-col gap-8 justify-center mb-12'>
        <form onSubmit={(e) => e.preventDefault()}>
          <ContainerInput>
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#c0c0c0", marginRight: '7px'}} />
            <MainInput 
              placeholder='Pesquise' 
              spellCheck='false' 
              value={query}
              onChange={(e) => setQuery(e.target.value)} 
            />
          </ContainerInput>
        </form>
    </div>
  )
}

export default Search