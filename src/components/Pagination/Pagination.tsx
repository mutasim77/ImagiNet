import { useContext } from 'react'
import { PictureContext } from '../../context/PictureProvider';

import './Pagination.scss';

const Pagination = () => {
    const {
        data,
        isLoading,
        fetchData,
        currentSearch,
        currentPage,
        setCurrentPage
    } = useContext(PictureContext);


    const totalPages: number = data.total_pages;

    const handlePageChange = async (newPage: number | string) => {
        if (newPage === '...') {
            newPage = Math.round((+currentPage + totalPages) / 2);
        }

        await fetchData(currentSearch, newPage);
        setCurrentPage(newPage);
    }

    return (
        <>
            {
                (!isLoading && data.total_pages) ?
                    (<div className='pagination'>
                        <div className='group-buttons'>
                            <button
                                onClick={() => handlePageChange(+currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                {' < '}
                            </button>

                            <button className='disabled'>{currentPage}</button>
                            <button onClick={() => handlePageChange('...')}>...</button>
                            <button className='disabled'>{totalPages}</button>

                            <button
                                onClick={() => handlePageChange(+currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                {' > '}
                            </button>
                        </div>
                    </div>)
                    :
                    null
            }
        </>
    );
}

export default Pagination;
