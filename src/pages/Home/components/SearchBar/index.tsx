import { ChangeEvent, useContext, useState } from "react";
import { SearchBarContainer } from "./styles";
import { SearchPostContext } from "../../../../context/SearchPostContext";

export function SearchBar() {
  const [postName, setPostName] = useState('')
  

  const { searchForPostName, resetPostsFiltered } = useContext(SearchPostContext)

  function handleChangePostName(event: ChangeEvent<HTMLInputElement>) {
    const postNameInput = event.target.value
    const isPostNameEmpty = postNameInput.length === 0 ? true : false

    setPostName(postNameInput)

    if (isPostNameEmpty) {
      resetPostsFiltered()
    }
  }

  function handleSearchforPostName(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    searchForPostName(`${postName}+repo:ricardorhv/github-blog`)
  }

  return (
    <SearchBarContainer onSubmit={handleSearchforPostName}>
      <input 
        type="text" 
        placeholder="Buscar conteúdo"
        onChange={handleChangePostName}
      />
      <button type="submit">Pesquisar</button>
    </SearchBarContainer>
  )
}