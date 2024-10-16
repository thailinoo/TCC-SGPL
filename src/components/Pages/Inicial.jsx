import React from 'react' 
import image from './imagem.png' 

const Gallery = () => {
    
    const machineIds = [
        '00001', '00002', '00003', '00004', '00005',
        '00006', '00007', '00008', '00009', '00010',
        '00011', '00012', '00013', '00014', '00015',
        '00016', '00017', '00018', '00019', '00020',
        '00021', '00022', '00023', '00024', '00025',
        '00026', '00027', '00028', '00029', '00030',
        '00031', '00032', '00033', '00034', '00035'
    ];

    return (
        <div>
            <main>
                {machineIds.map((id, index) => (
                    <div className="grid-item" key={id} style={{ display: 'inline-block', margin: '20px' }}>
                        <img 
                            src={image} 
                            alt={`Image ${index + 1}`} 
                            style={{ width: '300px', height: '200px' }} 
                        />
                        <p style={{ textAlign: 'center', marginTop: '10px' }}>Máquina {id}</p>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default Gallery;