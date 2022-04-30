import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { getHeroBySearch } from '../selectors/getHeroBySearch'

export const Search = () => {

  const [searchParams, setSearchParams] = useSearchParams({
    keyword: ""
  })

  const [{ keyword}, handleInputChange] = useForm({
    keyword: searchParams.get('keyword')
  })

  const result = getHeroBySearch(searchParams.get('keyword'))
  console.log(result);
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams({
      keyword
    })
  }
  return (
    <div className='row'>
      <div className='col-3'>
        <h4>Busqueda</h4>
        <hr />
        <form onSubmit={handleSearch}>
          <input type="text" placeholder='Busca tu heroe'
            className='form-control' name='keyword' value={keyword} onChange={handleInputChange} />
        </form>
      </div>
      <form>
        <div className='col-9'>

        </div>
      </form>

    </div>
  )
}
