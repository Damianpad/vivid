import { StyledSearchBar } from "./SearchBar.style"

export default function SearchBar() {
    return (
        <StyledSearchBar>
            <section className="searchContainer">
                <input type="search" placeholder="Search" className='search'/>
            </section>
        </StyledSearchBar>
    )
}