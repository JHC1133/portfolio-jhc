import studio from '../images/abstract/studio.png';
import kyrkMoln from '../images/abstract/kyrk-moln.png';
import cubedJoar from '../images/abstract/cubed-joar.png';
import terra from '../images/abstract/terra.png';
import setPiece from '../images/abstract/set-piece.png';
import banana from '../images/abstract/banana.png';
import edwardHopper from '../images/abstract/edward-hopper.png';


const AbstractPage = () => {
    return (
        <div className="main-content abstract">
            <h1>ABSTRACT</h1>
            <p>These images were made more playfully - experimenting with lighting and form.</p>
            <div className='photo-grid'>
                <img src={banana} className='first-item'/>
                <p className='second-item'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada placerat lorem sed auctor. Proin mattis ligula ac feugiat aliquet. Nunc at justo lectus. Mauris tempor id elit et condimentum. Phasellus dignissim metus a lobortis blandit. Curabitur ac velit at dui hendrerit tempus eget a velit. Aenean magna lacus, blandit vitae nisl ac, porta aliquet arcu.</p>
                <p className='third-item'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada placerat lorem sed auctor. Proin mattis ligula ac feugiat aliquet. Nunc at justo lectus. Mauris tempor id elit et condimentum. Phasellus dignissim metus a lobortis blandit. Curabitur ac velit at dui hendrerit tempus eget a velit. Aenean magna lacus, blandit vitae nisl ac, porta aliquet arcu.</p>
                <img src={kyrkMoln} className='fourth-item'/>   
                <img src={setPiece} className='fifth-item'/>
                <p className='sixth-item'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada placerat lorem sed auctor. Proin mattis ligula ac feugiat aliquet. Nunc at justo lectus. Mauris tempor id elit et condimentum. Phasellus dignissim metus a lobortis blandit. Curabitur ac velit at dui hendrerit tempus eget a velit. Aenean magna lacus, blandit vitae nisl ac, porta aliquet arcu.</p>
                <img src={studio} className='seventh-item'/>
                <p className='eigth-item'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada placerat lorem sed auctor. Proin mattis ligula ac feugiat aliquet. Nunc at justo lectus. Mauris tempor id elit et condimentum. Phasellus dignissim metus a lobortis blandit. Curabitur ac velit at dui hendrerit tempus eget a velit. Aenean magna lacus, blandit vitae nisl ac, porta aliquet arcu.</p>
                <img src={cubedJoar} className='ninth-item'/>
                <p className='tenth-item'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada placerat lorem sed auctor. Proin mattis ligula ac feugiat aliquet. Nunc at justo lectus. Mauris tempor id elit et condimentum. Phasellus dignissim metus a lobortis blandit. Curabitur ac velit at dui hendrerit tempus eget a velit. Aenean magna lacus, blandit vitae nisl ac, porta aliquet arcu.</p>
                <img src={terra} className='eleventh-item'/>
                <p className='twelth-item'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada placerat lorem sed auctor. Proin mattis ligula ac feugiat aliquet. Nunc at justo lectus. Mauris tempor id elit et condimentum. Phasellus dignissim metus a lobortis blandit. Curabitur ac velit at dui hendrerit tempus eget a velit. Aenean magna lacus, blandit vitae nisl ac, porta aliquet arcu.</p>
                <img src={edwardHopper} className='thirteenth-item'/>
                <p className='fourteenth-item'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada placerat lorem sed auctor. Proin mattis ligula ac feugiat aliquet. Nunc at justo lectus. Mauris tempor id elit et condimentum. Phasellus dignissim metus a lobortis blandit. Curabitur ac velit at dui hendrerit tempus eget a velit. Aenean magna lacus, blandit vitae nisl ac, porta aliquet arcu.</p>

            </div>
        </div>
    )
}

export default AbstractPage;