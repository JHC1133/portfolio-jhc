const Sidebar = ({ setActivePage }) => {
    return (
        <div className="sidebar sidebar-content left-block">
            <button className="category-button roboto" onClick={() => setActivePage('REALISM')}>REALISM</button>
            <button className="category-button roboto" onClick={() => setActivePage('ABSTRACT')}>ABSTRACT</button>
            <button className="category-button roboto" onClick={() => setActivePage('UI')}>UI</button>
        </div>
    )
}

export default Sidebar;