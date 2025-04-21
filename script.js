function toggleVisibility(conId) {
    const container = document.getElementById(conId);
    if (container.style.display === 'block') {
        container.style.display = 'none';
    } else {
        container.style.display = 'block';
    }
}
