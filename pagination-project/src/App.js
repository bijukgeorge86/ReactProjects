import React, { useEffect, useState } from 'react';
import { useFetch } from './customHook/useFetch';
import Follower from './Follower';

function App() {
    const { loading, data } = useFetch();
    //console.log(data);
    const [page, setPage] = useState(0);
    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        if (loading) return;
        setFollowers(data[page]);
    }, [loading, page, data]);

    const handlePage = (index) => {
        setPage(index);
    };
    const prevPage = () => {
        setPage((oldPage) => {
            let prevPage = oldPage - 1;
            if (prevPage < 0) {
                prevPage = data.length - 1;
            }
            return prevPage;
        });
    };
    const nextPage = () => {
        setPage((oldPage) => {
            let nextPage = oldPage + 1;
            if (nextPage > data.length - 1) {
                nextPage = 0;
            }
            return nextPage;
        });
    };
    return (
        <main>
            <div className="section-title">
                <h1>{loading ? '...loading' : 'Pagination'}</h1>
            </div>
            <section className="followers">
                <div className="container">
                    {followers.map((follower) => {
                        return <Follower key={follower.id} {...follower} />;
                    })}
                </div>
                {!loading && (
                    <div className="btn-container">
                        <button className="prev-btn" onClick={prevPage}>
                            Prev
                        </button>
                        {data.map((item, index) => {
                            return (
                                <button
                                    key={index}
                                    className={`page-btn ${
                                        index === page ? 'active-btn' : null
                                    } `}
                                    onClick={() => handlePage(index)}
                                >
                                    {index + 1}
                                </button>
                            );
                        })}
                        <button className="next-btn" onClick={nextPage}>
                            Next
                        </button>
                    </div>
                )}
            </section>
        </main>
    );
}

export default App;
