import React from 'react'

function ResultItem (props) {
    const {id, image, name, biography } = props.information
    
    return (
        <section className='search-card' key={id}>
            <img className='search-card__image' src={image.url} />
            <div className='search-card__details'>
                <h2 className='search-card__details--name'>{name}</h2>
                <p className='search-card__details--aligment'>{biography.alignment === 'bad'? 'Villano' : 'Héroe'}</p>
            </div>
            <style jsx>
                {`
                .search-card {
                    position: relative;
                    display: flex;
                    align-items: flex-end;
                    width: 12rem;
                    height: 15rem;
                    margin: 1rem;
                    box-shadow: 0px 0px 9px 0px;
                    transition: all 500ms;
                    cursor: pointer;
                }
                .search-card:hover {
                    transform: scale(1.05);
                }
                .search-card__image {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    z-index: -1;
                }
                .search-card__details {
                    width: 100%;
                    padding: 1rem;
                    background: linear-gradient(
                        to top,
                        rgba(0, 0, 0, 0.9) 0%,
                        rgba(0, 0, 0, 0) 100%
                );
                    color: #fff;
                }
                .search-card,
                .search-card__image,
                .search-card__details {
                    border-radius: 1rem;
                }
                `}
            </style>
        </section> 
    )
}

export default function ResultList (props) {
    return props.results.map(item =><ResultItem key={item.id} information={item}/>)
}