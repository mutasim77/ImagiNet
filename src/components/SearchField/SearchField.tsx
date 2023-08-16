import { useContext, useState } from 'react';
import { PictureContext } from '../../context/PictureProvider';
import { AiOutlineSearch, AiFillCloseCircle } from 'react-icons/ai';

const SearchField = () => {
    const { fetchData, setCurrentSearch, setCurrentPage } = useContext(PictureContext);
    const [searchValue, setSearchValue] = useState('');
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const fetchDataOrganized = async () => {
        await fetchData(searchValue, 1);
        setCurrentPage(1);
        setCurrentSearch(searchValue);
        setSearchValue('');
    }

    const onHandleClick = async () => {
        fetchDataOrganized();
    }

    const onHandleKeyDown = async (evt: React.KeyboardEvent) => {
        if (evt.key === 'Enter') {
            fetchDataOrganized();
        }
    }

    const handleFocus = () => setIsFocused(true);

    const handleBlur = () => {
        setTimeout(() => {
            setIsFocused(false);
        }, 200)
    }

    return (
        <>
            <input type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder='Search anything...'
                onFocus={handleFocus}
                onBlur={handleBlur}
                onKeyDown={onHandleKeyDown}
            />
            {isFocused && (
                <button
                    onClick={() => setSearchValue('')}
                    className="close-btn"
                >
                    <AiFillCloseCircle />
                </button>
            )}
            <button
                className='search-btn'
                onClick={onHandleClick}
            >
                <AiOutlineSearch />
            </button>
        </>
    )
}

export default SearchField;
