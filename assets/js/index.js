import React, { useRef, useEffect, useState } from 'react';
import CommentBox from './components/CommentBox';
import { SpinnerCircular } from 'spinners-react';
import Select from './components/Select';
import '../styles/app.css';

function App() {

    const [isLoading, setIsLoading] = useState(false)
    const [sortValue, setSortValue] = useState('')
    const [comments, setComments] = useState([])

    const getComments = async () => {
        setIsLoading(true)
        const response = await fetch('/api/comments');
        const json = await response.json();
        setComments(json)
        setSortValue('new')
        setIsLoading(false)
    }

    useEffect(() => {
        getComments()
    }, [])

    const sortedData =
        sortValue == 'new' ?
            comments.sort(function (a, b) { return b.timestamp - a.timestamp }) :
            sortValue == 'old' ?
                comments.sort(function (a, b) { return a.timestamp - b.timestamp }) : '';

    return (
        <>
            <Select
                setSortValue={setSortValue}
                options={[
                    { value: "new", children: "Newest" },
                    { value: "old", children: "Oldest" },
                ]}
                className="select-box"
            />
            <section id="comments-section" className="comments-box">
                {isLoading &&
                    <div className="spinner-box">
                        <SpinnerCircular size="100" color="rgb(20, 20, 20)" />
                    </div>}
                {!!comments.length &&
                    <CommentBox comments={sortedData} />}
            </section>
        </>
    );
}

export default App;