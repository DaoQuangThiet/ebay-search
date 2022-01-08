import { Container } from "@mui/material";
import PropTypes from 'prop-types';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';



const SearchForm = ({ searchQuery, setSearchQuery, handleSearchForm }) => {
    return (
        <form className="flex w-full justify-center" onSubmit={handleSearchForm}>
            <div className="block relative w-4/5">

            </div>
        </form>
    )
}


SearchForm.PropTypes = {
    searchQuery: PropTypes.string,
    setSearchQuery: PropTypes.func,
    handleSearchForm: PropTypes.func
}

SearchForm.defaultProps = {
    searchQuery: '',
    setSearchQuery: () => null,
    handleSearchForm: () => null
}

export default SearchForm