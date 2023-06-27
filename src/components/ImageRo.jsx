import React, { useEffect, useState } from 'react'

export default function ImageRo({ images }) {
    const [img, setImg] = useState(images[0] ? images[0] : null)
    const changeImage = (index) => {
        setImg(images[index])
    }

    return (
        <>
            <div className="container w-75">
                <img src={img} alt="" className="img-fluid mb-5" />
                <ImageRo />
            </div>
        </>
    )
}