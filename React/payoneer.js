import React, {useState, useEffect} from 'react';

function Home() {
    const [photo, setPhoto] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [query, setQuery] = useState("")
    const [fileteredList, setFillteredList] = useState([]);

    const [isFullScreen, setFullscreen] = useState(false);
    const [currenModal, setCurrentModal] = useState(null);

    useEffect(() => {
        setLoading(true);
        const data = fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((result) => {
            setLoading(false);
            setPhoto(result.products);
            setFillteredList(result.products)
        })
        .catch((err) => {
            setError(err)
        })
    }, [])

    const searchTile = (images, query) => {
        return images.filter((image) => image.title.toLowerCase().includes(query.toLowerCase()));
    }
    
    const updateSearchQuery = (e) => {
        setQuery(e.target.value);
        setFillteredList(searchTile(photo, e.target.value))
    }

    const handleImageClick = (e) => {
        let value = e.target.getAttribute("src");
        console.log(value)
        setFullscreen(true);
        setCurrentModal(value);
    }

    const imageTile = (imageArray) => {
        return imageArray.map((image) => (
            <div classname = "" >
                <img alt={image.title} src={image.thumbnail} id={image.id}></img>
                <p>{image.title}</p>
            </div>
        ))
    }

  return (
    <>
    <input value={query} onChange={(e) => updateSearchQuery(e)} />
    {
    isFullScreen ?
        <div className="" id="imageList" onClick={(e) => handleImageClick(e)}>
            {/* {{ loading && <div>Loading... </div> }} */}
             imageTile(fileteredList)
        </div> : <img src={currenModal} alt="" />
    
    }
    
    </>
  );
}

export default Home;
