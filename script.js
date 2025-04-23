function toggleVisibility(conId) {
    const container = document.getElementById(conId);
    if (container.style.display === 'block') {
        container.style.display = 'none';
    } else {
        container.style.display = 'block';
    }
}
function toggleVisibilityMultiId(ids){
    ids.forEach(conId => {
        toggleVisibility(conId);
    });
}

const MENUID =["Industry", "Partner", "Events", "Marketing", "Newsletters"]

function toggleVisibilityMenu(conId) {/*TODO finserire la transizione*/
    const containerSelect = document.getElementById(conId);
    if (containerSelect.style.display === 'block') {
        containerSelect.style.display = 'none';
    } else {
    MENUID.forEach(id => {
            const container = document.getElementById(id);
            container.style.display = 'none';
        })
        containerSelect.style.display = 'block';
    }
}

const MENUID12 =["Industry12", "Partner12", "Events12", "Marketing12", "Newsletters12"]

function toggleVisibilityMenu12(conId) {
    const containerSelect = document.getElementById(conId);
    if (containerSelect.style.display === 'block') {
        containerSelect.style.display = 'none';
    } else {
    MENUID12.forEach(id => {
            const container = document.getElementById(id);
            container.style.display = 'none';
        })
        containerSelect.style.display = 'block';
    }
}