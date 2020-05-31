import React from 'react';

const Sort = (props) => {

    return (
        <select defaultValue="Sort" onChange={(e) => props.handleSort(e)}>
            <option value="created_at">Publish Date</option>
            <option value="comment_count">Number of Comments</option>
            <option value="votes">Votes</option> 
        </select>
    );
};

export default Sort;