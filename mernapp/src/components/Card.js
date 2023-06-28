import React from 'react'

export default function Card() {
    return (
        <div>
            <div>
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img className="card-img-top" src="https://source.unsplash.com/random/300×300/?Burger" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">imp text .................................................</p>
                        <div className='container w-50' >
                            <select className='mt-3 h-100 bg-success'>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    );
                                })}
                            </select>
                            <select className='m-2 h-100 bg-success rounded'>
                                <option value="half">Half</option>
                                <option value="full">full</option>

                            </select>
                            <div className='d-inline h-100 fs-5'>
                                total price
                            </div>
                        </div>
                        {/* <button></button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
