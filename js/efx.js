function creation(name,role,img) {
    return `
    <div class="card">
        <div class="img">
        <img src="img/${img}" style="width: 10rem;">
        </div>
        <div class="info">
            <h1>${name}</h1>
            <h3>${role}</h1>
        </div>
    </div>
    `
}

