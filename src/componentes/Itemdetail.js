import { React, useEffect, useState } from 'react'

const Itemdetail = ({ selected, setSelected }) => {
    const [visible, setVisible] = useState('d-none')

    useEffect(() => {
        if (selected && visible === 'd-none') setVisible('d-block')
    }, [selected, visible])

    function cambia() {
        setSelected()
    }

    console.log(selected)

    return (
        <>
            <div className={`modal ${visible}`} id='modal' tabIndex='-1'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title'>{selected.titulo}</h5>
                            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' onClick={(e) => cambia()}></button>
                        </div>
                        <div className='modal-body'>
                            <img src={selected.picture} alt='wini'></img>
                            {selected.precio} 
                        </div>
                        <div className='modal-footer'>
                            <button type='button' className='btn btn-secondary' data-bs-dismiss='modal' onClick={(e) => cambia()}>
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Itemdetail
