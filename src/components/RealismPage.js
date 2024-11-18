import windowAltar from '../images/realism/window-altar.png';
import soborgChair from '../images/realism/soborg-chair.png';
import fallingWater from '../images/realism/falling-water.png';
import zanottaCouch from '../images/realism/zanotta-couch.png';

const Realism = () => {
    return (
        <div className="main-content realism">
            <h1>REALISM</h1>
            <p>The following images were made with the goal to attain photorealism.</p>
            <div className='photo-grid'>
                <img src={windowAltar} className='first-item'/>
                <p className='second-item'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada placerat lorem sed auctor. Proin mattis ligula ac feugiat aliquet. Nunc at justo lectus. Mauris tempor id elit et condimentum. Phasellus dignissim metus a lobortis blandit. Curabitur ac velit at dui hendrerit tempus eget a velit. Aenean magna lacus, blandit vitae nisl ac, porta aliquet arcu.</p>
                <p className='third-item'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada placerat lorem sed auctor. Proin mattis ligula ac feugiat aliquet. Nunc at justo lectus. Mauris tempor id elit et condimentum. Phasellus dignissim metus a lobortis blandit. Curabitur ac velit at dui hendrerit tempus eget a velit. Aenean magna lacus, blandit vitae nisl ac, porta aliquet arcu.</p>
                <img src={fallingWater} className='fourth-item'/>   
                <img src={soborgChair} className='fifth-item'/>
                <p className='sixth-item'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada placerat lorem sed auctor. Proin mattis ligula ac feugiat aliquet. Nunc at justo lectus. Mauris tempor id elit et condimentum. Phasellus dignissim metus a lobortis blandit. Curabitur ac velit at dui hendrerit tempus eget a velit. Aenean magna lacus, blandit vitae nisl ac, porta aliquet arcu.</p>
                <img src={zanottaCouch} className='seventh-item'/>
                <p className='eigth-item'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada placerat lorem sed auctor. Proin mattis ligula ac feugiat aliquet. Nunc at justo lectus. Mauris tempor id elit et condimentum. Phasellus dignissim metus a lobortis blandit. Curabitur ac velit at dui hendrerit tempus eget a velit. Aenean magna lacus, blandit vitae nisl ac, porta aliquet arcu.</p>

            </div>
        </div>
    )
}

export default Realism;